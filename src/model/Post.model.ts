import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
    created_by: {
      type: String,
      required: true,
    },
    user_name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
//If the Post collection does not exist create a new one.
export default mongoose.models.Post || mongoose.model("Post", postSchema);
