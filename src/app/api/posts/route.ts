import { NextResponse } from "next/server";
import { connect } from "@/service/db";
import PostModel from "@/model/Post.model";

export const GET = async () => {
  try {
    await connect();

    const post = await PostModel.find();

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request: { json: () => any }) => {
  const body = await request.json();

  const newPost = new PostModel(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
