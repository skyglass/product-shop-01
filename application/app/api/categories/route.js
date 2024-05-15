import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Category from "@/models/category";

export async function GET(req) {
  await dbConnect();

  try {
    const categories = await Category.find({}).sort({ createdAt: "-1" });

    return NextResponse.json(categories, { status: 200 });
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
