import GithubProvider from "next-auth/providers/github";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import { createHash } from "crypto";

const createUserId = (base: string): string => {
    return createHash("sha256").update(base).digest("hex");
};

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    return await NextAuth(req, res, {
        // Configure one or more authentication providers
        providers: [
            GithubProvider({
                clientId: process.env.GITHUB_CLIENT_ID || "",
                clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
            }),
        ],

        callbacks: {
            async jwt({ token }) {
                if (token?.email && !token.fdlst_private_userId) {
                    token.fdlst_private_userId = createUserId(token.email);
                }
                console.log("#### jwt");
                return token;
            },
            async session({ session }) {
                if (
                    session?.user?.email &&
                    !session?.user.fdlst_private_userId
                ) {
                    session.user.fdlst_private_userId = createUserId(
                        session?.user?.email
                    );
                }
                console.log("#### session");
                return session;
            },
        },

        debug: true,
    });
}
