import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";

export async function PUT(req, context) {
  await dbConnect();

  const _req = await req.json();
  // console.log("context ==================> ", context.params);

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      context.params.id,
      { ..._req },
      { new: true }
    );

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: err,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req, context) {
  // console.log("context in DELETE ==================> ", context.params.id);

  await dbConnect();

  try {
    const deletedProduct = await Product.findByIdAndDelete(context.params.id);

    return NextResponse.json(deletedProduct, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}
