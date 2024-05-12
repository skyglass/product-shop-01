import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Tag from "@/models/tag";
import slugify from "slugify";

export async function POST(req) {
  const _req = await req.json();
  await dbConnect();

  try {
    const { name, parent } = _req;

    const tag = await Tag.create({
      name,
      parent,
      slug: slugify(name),
    });

    return NextResponse.json(tag, { status: 200 });
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
