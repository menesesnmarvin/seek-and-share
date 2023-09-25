import { NextResponse } from "next/server";
import { connect } from "@/service/db";
import PostModel from "@/model/Post.model";

export const GET = async (
  _request: any,
  { params }: { params: { id: string } },
) => {
  const { id } = params;

  try {
    await connect();

    const post = await PostModel.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (
  _request: any,
  { params }: { params: { id: string } },
) => {
  const { id } = params;

  try {
    await connect();

    await PostModel.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async (
  _request: any,
  { params }: { params: { id: string } },
) => {
  const { id } = params;
  const body = await _request.json();
  console.log(id);
  try {
    await connect();

    await PostModel.updateOne(
      { _id: id },
      {
        $set: { status: body.status, title: body.title, content: body.content },
      },
    );

    return new NextResponse("Post has been updated", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
