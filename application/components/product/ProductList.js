import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div className="row">
      {products?.map((product) => (
        <div className="col-lg-4" key={product?.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
