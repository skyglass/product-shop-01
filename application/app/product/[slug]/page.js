import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ProductImage from "@/components/product/ProductImage";
import ProductLike from "@/components/product/ProductLike";
import ProductRating from "@/components/product/ProductRating";
import UserReviews from "@/components/product/UserReviews";
import AddToCart from "@/components/product/AddToCart";
import CouponCode from "@/components/product/CouponCode";
import { stockStatus } from "@/utils/helpers";
import ProductCard from "@/components/product/ProductCard";

dayjs.extend(relativeTime);

export async function generateMetadata({ params }) {
  const product = await getProduct(params?.slug);
  return {
    title: product?.title,
    description: product?.description?.substr(0, 160),
  };
}

async function getProduct(slug) {
  try {
    const response = await fetch(`${process.env.API}/product/${slug}`, {
      method: "GET",
      next: { revalidate: 1 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function ProductViewPage({ params }) {
  const { product, relatedProducts } = await getProduct(params?.slug);

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-lg-10 offset-lg-1 mb-4">
          <div className="card">
            <div className="bg-warning text-center">
              {stockStatus(product?.stock)}
            </div>
            {/* images and preview modal */}
            <ProductImage product={product} />

            {/* card body */}
            <div className="card-body">
              <h5 className="card-title">{product?.title}</h5>

              {/* show price based on coupon */}
              <CouponCode product={product} />

              <div className="card-text">
                <div
                  dangerouslySetInnerHTML={{
                    __html: product?.description,
                  }}
                />
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
                Added {dayjs(product?.createdAt).fromNow()}
              </small>
            </div>

            <div className="card-footer text-center">
              <ProductRating product={product} />
            </div>
          </div>

          <div className="my-3">
            <AddToCart product={product} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <p className="lead text-center my-5">Other products you may like</p>
          <div className="row">
            {relatedProducts?.map((product) => (
              <div className="col-lg-4" key={product._id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-10 offset-lg-1 my-5">
          <UserReviews reviews={product?.ratings} />
        </div>
      </div>
    </div>
  );
}
