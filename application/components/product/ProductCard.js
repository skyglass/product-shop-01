import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import ProductLike from "@/components/product/ProductLike";
import Stars from "@/components/product/Stars";
import { calculateAverageRating } from "@/utils/helpers";
import AddToCart from "@/components/product/AddToCart";
import { stockStatus } from "@/utils/helpers";

dayjs.extend(relativeTime);

export default function ProductCard({ product }) {
  return (
    <div className="card mb-4">
      <div className="bg-warning text-center">
        {stockStatus(product?.stock)}
      </div>
      <div style={{ height: "200px", overflow: "hidden" }}>
        <Image
          src={product?.images?.[0]?.secure_url || "/images/new-wave.jpeg"}
          className="card-img-top"
          width={500}
          height={300}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          alt={product?.title}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <Link
            href={`/product/${product?.slug}`}
            as={`/product/${product?.slug}`}
          >
            {product.title} [{product?.images?.length} 📸]
          </Link>
        </h5>

        <div className="d-flex justify-content-between">
          <h4>${product?.price?.toFixed(2)}</h4>
          {product?.previousPrice > product?.price && (
            <h4 className="text-danger">
              <del>${product?.previousPrice?.toFixed(2)}</del>
            </h4>
          )}
        </div>

        <div className="card-text">
          <div
            dangerouslySetInnerHTML={{
              __html:
                product?.description?.length > 160
                  ? `${product?.description.substring(0, 160)}...`
                  : product?.description,
            }}
          ></div>
        </div>
      </div>

      <div className="card-footer d-flex justify-content-between">
        <small className="text-muted">
          Category: {product?.category?.name}
        </small>
        <small className="text-muted">
          Tags: {product?.tags?.map((tag) => tag?.name).join(" ")}
        </small>
      </div>

      <div className="card-footer d-flex justify-content-between">
        <ProductLike product={product} />
        <small className="text-muted">
          Posted {dayjs(product?.createdAt).fromNow()}
        </small>
      </div>

      <div className="card-footer">
        {/* <pre>{JSON.stringify(product?.ratings, null, 4)}</pre> */}
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">Brand: {product?.brand}</small>
          <div>
            <small>
              <Stars rating={calculateAverageRating(product?.ratings)} />
            </small>
            <small className="text-muted ml-1">
              {`(${product?.ratings?.length})`}
            </small>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <AddToCart product={product} />
      </div>
    </div>
  );
}
