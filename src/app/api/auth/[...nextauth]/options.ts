import type { NextAuthOptions } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { dzClient } from "@/src/db";

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "database",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60 // 24 hours
    },
    // session: {
    //     strategy: "jwt"
    // },
    adapter: DrizzleAdapter(dzClient),
    providers: [],
    callbacks: {
        async session({ session }) {
            return session;
        }
    },
    pages: {
        error: "/"
    }
};
