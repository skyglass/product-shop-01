import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Order from "@/models/order";

export async function PUT(req, context) {
  await dbConnect();
  const body = await req.json();

  try {
    const order = await Order.findByIdAndUpdate(
      context.params.orderId,
      {
        delivery_status: body.delivery_status,
      },
      { new: true }
    );
    return NextResponse.json(order, { status: 200 });
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
