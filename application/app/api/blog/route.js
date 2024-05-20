import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/blog";
import User from "@/models/user";
import queryString from "query-string";

export async function GET(req) {
  await dbConnect();

  // console.log("req.url ==================> ", req.url);
  const searchParams = queryString.parseUrl(req.url).query;
  // console.log("searchParams => ", searchParams.page);

  const { page } = searchParams || {}; // Use searchParams.page instead of req.query.page
  const pageSize = 6;

  // let page = req.nextUrl.searchParams.get('page')

  try {
    const currentPage = Number(page) || 1; // Set default page to 1 if not provided
    const skip = (currentPage - 1) * pageSize; // Calculate the number of documents to skip
    const totalBlogs = await Blog.countDocuments({}); // Get the total count of blogs

    const blogs = await Blog.find({})
      .populate("postedBy", "name")
      .skip(skip)
      .limit(pageSize)
      .sort({ createdAt: -1 }); // Retrieve the paginated blogs

    console.log(blogs.length);

    return NextResponse.json(
      {
        blogs,
        currentPage,
        totalPages: Math.ceil(totalBlogs / pageSize),
      },
      { status: 200 }
    );
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
