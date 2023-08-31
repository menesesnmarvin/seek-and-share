import { NextResponse } from "next/server";
import { connect } from "@/service/db";
import UserModel from "@/model/User.model";

export const GET = async (
  _request: any,
  { params }: { params: { email: string } },
) => {
  const { email } = params;

  try {
    await connect();

    const user = await UserModel.findOne({ email: email });

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
