import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import Category from "@/models/category"; // Import the Category model
import Tag from "@/models/tag"; // Import the Tag model
import queryString from "query-string";

export async function GET(req) {
  await dbConnect();

  const { productSearchQuery } = queryString.parseUrl(req.url).query;

  try {
    // Search for categories and tags based on the productSearchQuery
    const [categories, tags] = await Promise.all([
      Category.find({ name: { $regex: productSearchQuery, $options: "i" } }),
      Tag.find({ name: { $regex: productSearchQuery, $options: "i" } }),
    ]);

    const categoryIds = categories.map((category) => category._id);
    const tagIds = tags.map((tag) => tag._id);

    // Main product search query
    const products = await Product.find({
      $or: [
        { title: { $regex: productSearchQuery, $options: "i" } },
        { description: { $regex: productSearchQuery, $options: "i" } },
        { brand: { $regex: productSearchQuery, $options: "i" } },
        { category: { $in: categoryIds } }, // Search for products with matching category IDs
        { tags: { $in: tagIds } }, // Search for products with matching tag IDs
      ],
    })
      .populate("category", "name")
      .populate("tags", "name")
      .sort({ createdAt: -1 });

    return NextResponse.json(products, { status: 200 });
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

// import { NextResponse } from "next/server";
// import dbConnect from "@/utils/dbConnect";
// import Product from "@/models/product";
// import queryString from "query-string";

// export async function GET(req) {
//   await dbConnect();

//   const { productSearchQuery } = queryString.parseUrl(req.url).query;

//   try {
//     const products = await Product.find({
//       $or: [
//         { title: { $regex: productSearchQuery, $options: "i" } }, // Case-insensitive search on the title field
//         { description: { $regex: productSearchQuery, $options: "i" } }, // Case-insensitive search on the content field
//         { brand: { $regex: productSearchQuery, $options: "i" } }, // Case-insensitive search on the category field
//       ],
//     }).sort({ createdAt: -1 });

//     return NextResponse.json(products, { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json(
//       {
//         err: "Server error. Please try again.",
//       },
//       { status: 500 }
//     );
//   }
// }
