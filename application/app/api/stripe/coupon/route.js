import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  await dbConnect();
  const _req = await req.json();
  // console.log("_req in stripe checkout session api", _req);

  try {
    const coupon = await stripe.coupons.retrieve(_req.couponCode);
    console.log("coupon", coupon);
    return NextResponse.json(coupon, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}
