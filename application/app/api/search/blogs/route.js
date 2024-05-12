import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/blog";
import queryString from "query-string";

export async function GET(req) {
  await dbConnect();

  const { searchQuery } = queryString.parseUrl(req.url).query;

  try {
    const blogs = await Blog.find({
      $or: [
        { title: { $regex: searchQuery, $options: "i" } }, // Case-insensitive search on the title field
        { content: { $regex: searchQuery, $options: "i" } }, // Case-insensitive search on the content field
        { category: { $regex: searchQuery, $options: "i" } }, // Case-insensitive search on the category field
      ],
    }).sort({ createdAt: -1 });

    return NextResponse.json(blogs, { status: 200 });
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
