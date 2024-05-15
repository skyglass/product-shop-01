import { useCart } from "@/context/cart";
import OrderSummary from "@/components/product/cart/OrderSummary";
import CartItem from "@/components/product/cart/CartItem";

export default function Step1({ onNextStep }) {
  const { cartItems } = useCart();

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <p className="alert alert-primary">Review Cart / Adjust Quantity</p>

          {cartItems?.map((product) => (
            <CartItem product={product} />
          ))}

          <div className="d-flex justify-content-end my-4">
            <button
              className="btn btn-danger btn-raised col-6"
              onClick={onNextStep}
            >
              Next
            </button>
          </div>
        </div>

        <div className="col-lg-4">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
