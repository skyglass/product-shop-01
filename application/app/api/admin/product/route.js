import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import slugify from "slugify";

export async function POST(req) {
  const _req = await req.json();
  await dbConnect();

  try {
    console.log("... _req ===> ", _req);
    const product = await Product.create({
      ..._req,
      slug: slugify(_req.title),
    });

    return NextResponse.json(product, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}
