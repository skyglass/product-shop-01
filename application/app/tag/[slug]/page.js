import ProductList from "@/components/product/ProductList";
import TagsList from "@/components/tag/TagList";
import Link from "next/link";

export const dynamic = "force-dynamic";

export async function generateMetadata({ slug }) {
  const tag = await getTag(slug);
  return {
    title: tag?.name,
    description: `Best selling products with the tag of "${tag?.name}" in category "${tag?.parent?.name}"`,
  };
}

async function getTag(slug) {
  try {
    const response = await fetch(`${process.env.API}/tag/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("tags page response => ", data);
    return data;
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
}

export default async function TagViewPage({ params }) {
  const { tag, products } = await getTag(params?.slug);

  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 mt-5">
            <div className="btn btn-danger btn-raised border-20 col p-4 mb-3">
              {tag?.name} /{" "}
              <Link
                href={`/category/${tag?.parent?.slug}`}
                className="text-dark"
              >
                {tag?.parent?.name}
              </Link>
            </div>
          </div>

          <div className="col-lg-9">
            <p className="text-center lead fw-bold">
              Products with tag "{tag?.name}" from category "{tag?.parent?.name}
              "
            </p>
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </main>
  );
}
