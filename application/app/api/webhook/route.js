import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Order from "@/models/order";
import Product from "@/models/product";

// https://github.com/shadcn-ui/taxonomy

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  await dbConnect();

  const _raw = await req.text();
  const sig = req.headers.get("stripe-signature");

  try {
    // Construct the event using the Stripe SDK
    const event = stripe.webhooks.constructEvent(
      _raw,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    // console.log("event => ", event);

    // Handle the event
    switch (event.type) {
      case "charge.succeeded":
        const chargeSucceeded = event.data.object;
        // console.log("chargeSucceeded => ", chargeSucceeded);

        const { id, ...rest } = chargeSucceeded;

        // decrement stock
        // const cartItems = JSON.parse(chargeSucceeded.metadata.cartItems);
        // for (const cartItem of cartItems) {
        //   const product = await Product.findById(cartItem._id);
        //   if (product) {
        //     product.stock -= cartItem.quantity;
        //     await product.save();
        //   }
        // }

        // await Order.create({
        //   ...rest,
        //   chargeId: id,
        //   userId: chargeSucceeded.metadata.userId,
        //   cartItems,
        // });
        // console.log("order created => ", order);

        // decrement stock and gather product IDs
        const cartItems = JSON.parse(chargeSucceeded.metadata.cartItems);
        const productIds = cartItems.map((cartItem) => cartItem._id);

        // Fetch all products in one query
        const products = await Product.find({ _id: { $in: productIds } });

        // Create an object to quickly map product details by ID
        const productMap = {};
        products.forEach((product) => {
          productMap[product._id.toString()] = {
            _id: product._id,
            title: product.title,
            slug: product.slug,
            price: product.price,
            image: product.images[0]?.secure_url || "",
          };
        });

        // Create cartItems with product details
        const cartItemsWithProductDetails = cartItems.map((cartItem) => ({
          ...productMap[cartItem._id],
          quantity: cartItem.quantity,
        }));

        // console.log(
        //   "cartItemsWithProductDetails =================***=> ",
        //   cartItemsWithProductDetails
        // );

        // Create order
        const orderData = {
          ...rest,
          chargeId: id,
          userId: chargeSucceeded.metadata.userId,
          cartItems: cartItemsWithProductDetails,
        };
        await Order.create(orderData);

        // Decrement product stock
        for (const cartItem of cartItems) {
          const product = await Product.findById(cartItem._id);
          if (product) {
            product.stock -= cartItem.quantity;
            await product.save();
          }
        }

        return NextResponse.json({ ok: true }, { status: 200 });

      // break;
      // ... handle other event types
      // default:
      //   console.log(`Unhandled event type ${event.type}`);
    }
  } catch (err) {
    console.log("*******err********", err);
    return NextResponse.json(`Webhook Error: ${err.message}`, { status: 400 });
  }
}

//   const {
//     id, // chargeId
//     payment_intent,
//     receipt_url,
//     refunded,
//     status,
//     amount_captured,
//     currency,
//     shipping,
//   } = event.data.object;
