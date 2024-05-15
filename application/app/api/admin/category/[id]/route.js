import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Category from "@/models/category";

export async function PUT(req, context) {
  await dbConnect();

  const _req = await req.json();

  try {
    const updatingCategory = await Category.findByIdAndUpdate(
      context.params.id,
      { ..._req },
      { new: true }
    );

    return NextResponse.json(updatingCategory, { status: 200 });
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

export async function DELETE(req, context) {
  await dbConnect();

  try {
    const deletedCategory = await Category.findByIdAndDelete(context.params.id);

    return NextResponse.json(deletedCategory, { status: 200 });
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
