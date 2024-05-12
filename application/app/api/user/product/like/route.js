import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import { getToken } from "next-auth/jwt";

export async function POST(req) {
  await dbConnect();

  const _req = await req.json();

  const { productId } = _req;
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  try {
    const updated = await Product.findByIdAndUpdate(
      productId,
      { $addToSet: { likes: token.user._id } },
      { new: true }
    );

    return NextResponse.json(updated, { status: 200 });
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

export async function PUT(req) {
  await dbConnect();

  const _req = await req.json();

  const { productId } = _req;
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  try {
    const updated = await Product.findByIdAndUpdate(
      productId,
      { $pull: { likes: token.user._id } },
      { new: true }
    );

    return NextResponse.json(updated, { status: 200 });
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
