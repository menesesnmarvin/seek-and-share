import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
        //   clientId: process.env.GOOGLE_CLIENT_ID as string,
        //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
    ]
}