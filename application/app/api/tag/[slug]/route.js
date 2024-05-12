import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Tag from "@/models/tag";
import Product from "@/models/product";

export async function GET(req, context) {
  await dbConnect();
  const slug = context.params.slug;

  try {
    const tag = await Tag.findOne({ slug }).populate("parent", "name slug");

    const products = await Product.find({ tags: tag })
      .populate("tags", "name")
      .populate("category", "name")
      .limit(12)
      .sort({
        createdAt: "-1",
      });

    return NextResponse.json({ tag, products });
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
