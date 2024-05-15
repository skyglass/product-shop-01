import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import cloudinary from "cloudinary";

// config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  const _req = await req.json();
  await dbConnect();

  try {
    const result = await cloudinary.uploader.upload(_req.image);
    // console.log("image upload response => ", result);

    return NextResponse.json(
      {
        public_id: result.public_id,
        secure_url: result.secure_url,
      },
      { status: 200 }
    );
  } catch (err) {
    console.log("image upload error => ", err);
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  const _req = await req.json();
  await dbConnect();

  try {
    const result = await cloudinary.uploader.destroy(_req.public_id);
    console.log("removed from cloudinary => ", result);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}

/**
export async function PUT(req) {
  const _req = await req.json();
  await dbConnect();

  try {
    const result = await cloudinary.uploader.destroy(_req.public_id);
    console.log("removed from cloudinary => ", result);

    if (result.result === "ok") {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json(
        {
          err: "Error deleting image from Cloudinary",
          status: 500,
        },
        { status: 500 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      {
        err: "Error deleting image from Cloudinary",
        status: 500,
      },
      { status: 500 }
    );
  }
}
 */
