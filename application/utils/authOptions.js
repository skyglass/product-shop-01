import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/user";
import dbConnect from "@/utils/dbConnect";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      dbConnect();

      const { email } = user;

      // Try to find a user with the provided email
      let dbUser = await User.findOne({ email });

      // If the user doesn't exist, create a new one
      if (!dbUser) {
        dbUser = await User.create({
          email,
          name: user.name,
          image: user.image,
        });
      }

      return true;
    },
    // add user profile/role to token and session
    // jwt: async ({ token, user }) => {
    //   const userByEmail = await User.findOne({ email: token.email });
    //   userByEmail.password = undefined;
    //   token.user = userByEmail;
    //   return token;
    // },
    // session: async ({ session, token }) => {
    //   const userByEmail = await User.findOne({ email: token.email });
    //   userByEmail.password = undefined;
    //   session.user = userByEmail;
    //   return session;
    // },
    jwt: async ({ token, user }) => {
      const userByEmail = await User.findOne({ email: token.email });
      userByEmail.password = undefined;
      token.user = userByEmail;
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
