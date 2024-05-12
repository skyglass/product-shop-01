import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Order from "@/models/order";
import User from "@/models/user";
import { currentUser } from "@/utils/currentUser";

export async function GET(req) {
  await dbConnect();

  try {
    const user = await currentUser(); // Get the current user asynchronously

    const orders = await Order.find({ userId: user._id })
      .populate("userId", "name")
      .sort({
        createdAt: -1,
      });

    return NextResponse.json(orders, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}
