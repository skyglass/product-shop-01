import Image from "next/image";
import Link from "next/link";
import AddToCart from "@/components/product/AddToCart";

export default function CartItem({ product, addToCart = true, quantity }) {
  return (
    <>
      <div className="card mb-3" key={product._id}>
        <div className="row g-0">
          <div className="col-md-4">
            <div style={{ height: "200px", overflow: "hidden" }}>
              <Image
                src={
                  product?.images?.[0]?.secure_url || "/images/new-wave.jpeg"
                }
                className="card-img-top"
                width={500}
                height={300}
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
                alt={product?.title}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                <Link
                  href={`/product/${product?.slug}`}
                  as={`/product/${product?.slug}`}
                >
                  {product.title} {!addToCart && quantity && `x ${quantity}`}
                </Link>
              </h5>
              <h4>${product?.price.toFixed(2)}</h4>
              <div className="card-text">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      product?.description?.length > 160
                        ? `${product?.description.substring(0, 160)}...`
                        : product?.description,
                  }}
                />
              </div>

              {addToCart && (
                <div className="mt-3">
                  <AddToCart product={product} reviewAndCheckout={false} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
