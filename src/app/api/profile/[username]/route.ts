import { NextResponse } from "next/server";
import { connect } from "@/service/db";
import PostModel from "@/model/Post.model";

export const GET = async (
  _request: any,
  { params }: { params: { username: string } },
) => {
  const { username } = params;

  try {
    await connect();

    const post = await PostModel.find({ user_name: username });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
