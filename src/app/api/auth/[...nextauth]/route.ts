import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db/index";
import { users } from "@/db/schema/users";
import { nextAuthOptions } from "@/libs/next-auth-options";

const handler = NextAuth(nextAuthOptions);
// const handler = NextAuth({
//   adapter: DrizzleAdapter(db),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
// });

export { handler as GET, handler as POST };
