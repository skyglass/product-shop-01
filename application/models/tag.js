import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      min: 2,
      max: 32,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

tagSchema.plugin(uniqueValidator);

export default mongoose.models.Tag || mongoose.model("Tag", tagSchema);
