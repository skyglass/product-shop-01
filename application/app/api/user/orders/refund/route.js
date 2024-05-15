import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Order from "@/models/order";
import Product from "@/models/product";
import { currentUser } from "@/utils/currentUser";
import queryString from "query-string";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req, res) {
  await dbConnect();

  try {
    const user = await currentUser(); // Get the current user asynchronously

    // Get the order to refund
    // const orderId = request.nextUrl.searchParams.get("orderId")
    const { orderId } = queryString.parseUrl(req.url).query;
    const order = await Order.findById(orderId);

    // Check if the order exists and belongs to the current user
    if (!order || order.userId.toString() !== user._id.toString()) {
      return NextResponse.json(
        { error: "Order not found or unauthorized" },
        { status: 404 }
      );
    }

    // Check if the order is still "Not Processed"
    if (order.delivery_status !== "Not Processed") {
      return NextResponse.json(
        { error: "Order cannot be refunded" },
        { status: 400 }
      );
    }

    // Make the refund request to Stripe
    const refund = await stripe.refunds.create({
      payment_intent: order.payment_intent, // Use the payment intent ID from your order
      reason: "requested_by_customer",
    });

    // Update the product quantities based on the refunded items
    for (const cartItem of order.cartItems) {
      const product = await Product.findById(cartItem._id);

      if (product) {
        product.stock += cartItem.quantity;
        await product.save();
      }
    }

    // Update the order in the database with refund details
    order.status = "Refunded";
    order.refunded = true;
    order.delivery_status = "Cancelled";
    order.refundId = refund.id; // Store the refund ID for reference
    await order.save();

    return NextResponse.json(
      { message: "Order refunded successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";
// import dbConnect from "@/utils/dbConnect";
// import Order from "@/models/order";
// import { currentUser } from "@/utils/currentUser";
// import queryString from "query-string";

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// export async function POST(req, res) {
//   await dbConnect();

//   try {
//     const user = await currentUser(); // Get the current user asynchronously

//     // Get the order to refund
//     const { orderId } = queryString.parseUrl(req.url).query;
//     const order = await Order.findById(orderId);

//     // Check if the order exists and belongs to the current user
//     if (!order || order.userId.toString() !== user._id.toString()) {
//       return NextResponse.json(
//         { error: "Order not found or unauthorized" },
//         { status: 404 }
//       );
//     }

//     // Check if the order is still "Not Processed"
//     if (order.delivery_status !== "Not Processed") {
//       return NextResponse.json(
//         { error: "Order cannot be refunded" },
//         { status: 400 }
//       );
//     }

//     // Make the refund request to Stripe
//     const refund = await stripe.refunds.create({
//       payment_intent: order.payment_intent, // Use the payment intent ID from your order
//       reason: "requested_by_customer",
//     });

//     // console.log("refund response ===============> ", refund);

//     // Update the order in the database with refund details
//     order.status = "Refunded";
//     order.refunded = true;
//     order.delivery_status = "Cancelled";
//     order.refundId = refund.id; // Store the refund ID for reference
//     await order.save();

//     return NextResponse.json(
//       { message: "Order refunded successfully" },
//       { status: 200 }
//     );
//   } catch (err) {
//     return NextResponse.json(
//       {
//         err: err.message,
//       },
//       { status: 500 }
//     );
//   }
// }
