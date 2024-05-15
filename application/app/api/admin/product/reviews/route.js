import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import queryString from "query-string";

export async function GET(req) {
  await dbConnect();

  const searchParams = queryString.parseUrl(req.url).query;
  const { page } = searchParams || {};
  const pageSize = 6; // Number of ratings per page

  try {
    const currentPage = Number(page) || 1;
    const skip = (currentPage - 1) * pageSize;

    // Lookup products for all reviews and populate ratings.postedBy
    const reviews = await Product.aggregate([
      {
        $lookup: {
          from: "products", // The collection name
          localField: "_id",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $unwind: "$product", // Unwind the product array
      },
      {
        $unwind: "$ratings", // Unwind the ratings array
      },
      {
        $lookup: {
          from: "users", // The collection name for users
          localField: "ratings.postedBy",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $project: {
          _id: 0,
          product: {
            _id: 1,
            title: 1,
            slug: 1,
            price: 1,
            image: { $arrayElemAt: ["$product.images.secure_url", 0] },
          },
          ratings: {
            rating: "$ratings.rating",
            comment: "$ratings.comment",
            postedBy: {
              _id: { $arrayElemAt: ["$user._id", 0] },
              name: { $arrayElemAt: ["$user.name", 0] },
              // Add other fields you want to include from the users collection
            },
            _id: "$ratings._id",
          },
        },
      },
      {
        $sort: { "ratings.createdAt": -1 }, // Sort by createdAt field in descending order
      },
      {
        $skip: skip,
      },
      {
        $limit: pageSize,
      },
    ]);

    const totalRatings = await Product.aggregate([
      {
        $group: {
          _id: null,
          totalRatings: { $sum: { $size: "$ratings" } },
        },
      },
    ]);

    const totalAllRatings =
      totalRatings.length > 0 ? totalRatings[0].totalRatings : 0;

    console.log("totalAllRatings => ", totalAllRatings);

    return NextResponse.json(
      {
        reviews,
        totalRatings: totalAllRatings,
        currentPage,
        totalPages: Math.ceil(totalAllRatings / pageSize),
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
