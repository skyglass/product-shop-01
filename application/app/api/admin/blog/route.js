import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/blog";
import slugify from "slugify";
// import { getToken } from "next-auth/jwt";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";

export async function GET(request) {
  return NextResponse.json({ message: "Hello from Blog GET endpoint" });
}

export async function POST(req) {
  const _req = await req.json();
  console.log("_req => ", _req);
  await dbConnect();

  try {
    const { title, content, category, image } = _req;

    // Check if required fields are filled
    switch (true) {
      case !title:
        return NextResponse.json({ err: "Title is required" }, { status: 400 });
      case !content:
        return NextResponse.json(
          { err: "Content is required" },
          { status: 400 }
        );
      case !category:
        return NextResponse.json(
          { err: "Category is required" },
          { status: 400 }
        );
    }

    // Check if blog with that title already exists
    const existingBlog = await Blog.findOne({
      slug: slugify(title?.toLowerCase()),
    });

    // get token to get current user's id
    // const token = await getToken({
    //   req,
    //   secret: process.env.NEXTAUTH_SECRET,
    // });
    const session = await getServerSession(authOptions);
    // console.log("session in blog api => ", session.user);

    if (existingBlog) {
      return NextResponse.json(
        {
          err: "Blog with that title already exists",
        },
        { status: 409 }
      );
    } else {
      const blog = await Blog.create({
        title,
        content,
        category,
        image: image ? image : null,
        postedBy: session.user._id,
        slug: slugify(title?.toLowerCase()),
      });

      return NextResponse.json(blog, { status: 200 });
    }
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
