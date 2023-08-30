import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      //   clientId: process.env.GOOGLE_CLIENT_ID as string,
      //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: {
    //       label: "Username:",
    //       type: "text",
    //       placeholder: "your-username",
    //     },
    //     password: {
    //       label: "Password:",
    //       type: "password",
    //       placeholder: "your-password",
    //     },
    //   },
    //   async authorize(credentials) {
    //     // This is where you need to retrieve user data
    //     // to verify with credentials
    //     // Docs: https://next-auth.js.org/configuration/providers/credentials
    //     const user = {
    //       id: "42",
    //       username: "meneses.marvin.n@gmail.com",
    //       name: "Marvin Meneses",
    //       email: "meneses.marvin.n@gmail.com",
    //       password: "nextauth",
    //       image:
    //         "https://lh3.googleusercontent.com/a/AAcHTtfhD6iRNNO0Us2ZFfS0u8m9APlEpEQ4IctxRLyB2PLi=s96-c",
    //     };

    //     if (
    //       credentials?.username === user.username &&
    //       credentials?.password === user.password
    //     ) {
    //       return user;
    //     } else {
    //       return null;
    //     }
    //   },
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    // maxAge: 60,
  },
};
