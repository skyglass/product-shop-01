import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import User from "@/models/user";
import Category from "@/models/category";
import Tag from "@/models/tag";

export async function GET(req, context) {
  await dbConnect();

  try {
    const product = await Product.findOne({
      slug: context.params.slug,
    })
      .populate("category", "name")
      .populate("tags", "name")
      .populate({
        path: "ratings.postedBy",
        model: "User", // The User model name
        select: "name", // Select the fields you want to populate
      });

    // Fetch related products based on category or tags
    const relatedProducts = await Product.find({
      $or: [
        { category: product.category }, // Fetch products in the same category
        { tags: { $in: product.tags } }, // Fetch products with similar tags
      ],
      _id: { $ne: product._id }, // Exclude the current product
    }).limit(3); // Limit the number of related products

    return NextResponse.json({ product, relatedProducts }, { status: 200 });
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

// import { NextResponse } from "next/server";
// import dbConnect from "@/utils/dbConnect";
// import Product from "@/models/product";

// export async function GET(req, context) {
//   await dbConnect();

//   try {
//     const product = await Product.findOne({
//       slug: context.params.slug,
//     })
//       .populate("category", "name")
//       .populate("tags", "name")
//     return NextResponse.json(product, { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json(
//       {
//         err: err.message,
//       },
//       { status: 500 }
//     );
//   }
// }
