import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Category from "@/models/category";
import slugify from "slugify";

export async function POST(req) {
  const _req = await req.json();
  await dbConnect();

  try {
    const { name } = _req;

    const category = await Category.create({
      name,
      slug: slugify(name),
    });

    return NextResponse.json(category, { status: 200 });
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
