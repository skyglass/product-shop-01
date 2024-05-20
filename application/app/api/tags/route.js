import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Tag from "@/models/tag";

export async function GET(req) {
  await dbConnect();

  try {
    const tags = await Tag.find({})
      .populate("parent", "name")
      .sort({ createdAt: -1 });

    return NextResponse.json(tags, { status: 200 });
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
