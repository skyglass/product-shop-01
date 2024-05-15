import { useSession } from "next-auth/react";
import Link from "next/link";
import { useCart } from "@/context/cart";
import toast from "react-hot-toast";
import OrderSummary from "@/components/product/cart/OrderSummary";

export default function Step2({ onNextStep, onPrevStep }) {
  // update can be used to update user session
  // update({ user: { ...data.user, address: data } });
  const { data, status, update } = useSession();

  const { couponCode, setCouponCode, handleCoupon } = useCart();

  if (status !== "authenticated") {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="d-flex justify-content-end my-4">
              <button
                className="btn btn-outline-danger btn-raised col-6"
                onClick={onPrevStep}
              >
                Previous
              </button>

              <Link
                className="btn btn-primary btn-raised col-6"
                href={`/login?callbackUrl=${window.location.href}`}
              >
                Login to Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <p className="alert alert-primary">Contact Details / Login</p>

          <div>
            <input
              type="text"
              value={data?.user?.name}
              className="form-control mb-2 px-2"
              placeholder="Your name"
              disabled
            />
            <input
              type="email"
              value={data?.user?.email}
              className="form-control mb-2 px-2"
              placeholder="Your email"
              disabled
            />

            {/*  coupon */}
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="form-control mb-2 px-2 mt-4"
              placeholder="Enter your coupon code here"
            />

            <button
              className="btn btn-success btn-raised"
              onClick={() => handleCoupon(couponCode)}
              disabled={!couponCode.trim()}
            >
              Apply Coupon
            </button>

            {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
          </div>

          <div className="d-flex justify-content-end my-4">
            <button
              className="btn btn-outline-danger btn-raised col-6"
              onClick={onPrevStep}
            >
              Previous
            </button>

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
