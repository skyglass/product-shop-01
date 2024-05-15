# NextJS_13_NextAuth_Serverless_API

- [NextJS\_13\_NextAuth\_Serverless\_API](#nextjs_13_nextauth_serverless_api)
  - [Project setup](#project-setup)
  - [Use bootstrap material](#use-bootstrap-material)
  - [Navigation](#navigation)
  - [Connect to MongoDB](#connect-to-mongodb)
  - [Create mongoose model](#create-mongoose-model)
  - [Register API](#register-api)
  - [Toast notification](#toast-notification)
  - [Environment variables](#environment-variables)
  - [Register page](#register-page)
  - [Login Page](#login-page)
  - [Authentication using Next Auth](#authentication-using-next-auth)
  - [Provide user session](#provide-user-session)
  - [Access logged in user info](#access-logged-in-user-info)
  - [User dashboard](#user-dashboard)
  - [Protecting pages](#protecting-pages)
  - [Redirect back to intended page](#redirect-back-to-intended-page)
  - [Login with google](#login-with-google)
  - [Login page](#login-page-1)
  - [Save social login user in database](#save-social-login-user-in-database)
  - [Additional user info in session](#additional-user-info-in-session)
  - [Show user role](#show-user-role)
  - [Admin layout and page](#admin-layout-and-page)
  - [Role based page protection for admin](#role-based-page-protection-for-admin)
  - [Blog Model](#blog-model)
  - [Use cloudinary for image uploads](#use-cloudinary-for-image-uploads)
  - [Blog create page](#blog-create-page)
  - [Create blog API](#create-blog-api)
  - [Blogs list API with Pagination](#blogs-list-api-with-pagination)
  - [Blog list on home page](#blog-list-on-home-page)
  - [Use blog cards to display list of blogs](#use-blog-cards-to-display-list-of-blogs)
  - [Single blog API](#single-blog-api)
  - [Blog view page](#blog-view-page)
  - [Loading page (default)](#loading-page-default)
  - [Blog like and unlike API](#blog-like-and-unlike-api)
  - [Blog like component](#blog-like-component)
  - [How to like/unlike in single blog view](#how-to-likeunlike-in-single-blog-view)
  - [User liked blogs API](#user-liked-blogs-api)
  - [Liked blogs page](#liked-blogs-page)
  - [Blogs list for admin](#blogs-list-for-admin)
  - [Blog update and delete API](#blog-update-and-delete-api)
  - [Blog update and delete page](#blog-update-and-delete-page)
  - [Blog search context](#blog-search-context)
  - [Search provider](#search-provider)
  - [Search form](#search-form)
  - [Search API](#search-api)
  - [Search page](#search-page)
  - [Deploy to vercel](#deploy-to-vercel)
  - [Ecommerce Project](#ecommerce-project)
  - [Category model](#category-model)
  - [Category create API](#category-create-api)
  - [Categories list API](#categories-list-api)
  - [Categories update API](#categories-update-api)
  - [Categories delete API](#categories-delete-api)
  - [Category context](#category-context)
  - [Category create function](#category-create-function)
  - [Category list function](#category-list-function)
  - [Category update function](#category-update-function)
  - [Category delete function](#category-delete-function)
  - [Category provider](#category-provider)
  - [Category page for admin](#category-page-for-admin)
  - [ChatGPT for category and tags ideas](#chatgpt-for-category-and-tags-ideas)
  - [Category create, update and delete component](#category-create-update-and-delete-component)
  - [Category list component](#category-list-component)
  - [Tags](#tags)
  - [Tag Model](#tag-model)
  - [Tag create API](#tag-create-api)
  - [Tag list API](#tag-list-api)
  - [Tag update API](#tag-update-api)
  - [Tag delete API](#tag-delete-api)
  - [Tag context](#tag-context)
  - [Tag create function](#tag-create-function)
  - [Tag list function](#tag-list-function)
  - [Tag update function](#tag-update-function)
  - [Tag delete function](#tag-delete-function)
  - [Tag provider](#tag-provider)
  - [Tags page for admin](#tags-page-for-admin)
  - [Tag create update and delete component](#tag-create-update-and-delete-component)
  - [Tag list component](#tag-list-component)
  - [Trying API post routes using Postman (optional)](#trying-api-post-routes-using-postman-optional)
  - [Product model](#product-model)
  - [Products create API](#products-create-api)
  - [Get products list with pagination](#get-products-list-with-pagination)
  - [Get single product](#get-single-product)
  - [Product update and delete by admin](#product-update-and-delete-by-admin)
  - [Product context](#product-context)
  - [Admin create product](#admin-create-product)
  - [Admin products list](#admin-products-list)
  - [Shop page](#shop-page)
  - [Pagination component](#pagination-component)
  - [Product List component](#product-list-component)
  - [Blog Single View Page](#blog-single-view-page)
  - [Product Images and Preview Modal](#product-images-and-preview-modal)
  - [Product Like API](#product-like-api)
  - [Product Unlike API](#product-unlike-api)
  - [User Liked Products API](#user-liked-products-api)
  - [User Product Like Unlike Component](#user-product-like-unlike-component)
  - [5 star rating system](#5-star-rating-system)
  - [Filtering products](#filtering-products)
  - [Product search (text based)](#product-search-text-based)
  - [Show Reviews Comments](#show-reviews-comments)
  - [Products metadata](#products-metadata)
  - [Add to cart](#add-to-cart)
  - [Cart page](#cart-page)
  - [Create Order with Stripe Webhook](#create-order-with-stripe-webhook)
  - [Order model](#order-model)
  - [Coupon](#coupon)
  - [Coupon code in product url](#coupon-code-in-product-url)
  - [Sale price (previous price)](#sale-price-previous-price)
  - [Orders for user](#orders-for-user)
  - [On stripe success page, remove items from cart](#on-stripe-success-page-remove-items-from-cart)
  - [When order is created decrement stock](#when-order-is-created-decrement-stock)
  - [User order refund/cancle api](#user-order-refundcancle-api)
  - [Orders for admin](#orders-for-admin)
  - [Database Chart on Admin Dashboard](#database-chart-on-admin-dashboard)
  - [Only purchaser can leave rating](#only-purchaser-can-leave-rating)
  - [Related products](#related-products)
  - [Shop page for products (without filters)](#shop-page-for-products-without-filters)
  - [Post deployment issues (fixed)](#post-deployment-issues-fixed)
  - [Post deployment updates](#post-deployment-updates)
  - [Show chart in user dashboard](#show-chart-in-user-dashboard)
  - [User reviewed products](#user-reviewed-products)
  - [All reviews API](#all-reviews-api)
  - [User reviews](#user-reviews)
  - [All reviews for admin](#all-reviews-for-admin)
  - [Product Reviews component](#product-reviews-component)
  - [Product reviews delete](#product-reviews-delete)
  - [Order delete](#order-delete)
  - [Forgot password](#forgot-password)
  - [Categories list in menu](#categories-list-in-menu)
  - [Single category view (with products)](#single-category-view-with-products)

## Project setup

```
npx create-next-app@latest
```

Delete `page.module.css` and all css from `globals.css`

```js
// app/page
export default function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
    </div>
  );
}

// app/layout
import "./globals.css";

export const metadata = {
  title: "Blogs App",
  description: "Latest blogs on Web Development, React, Next.js, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## Use bootstrap material

```
npm i bootstrap-material-design
```

```js
// layout
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
```

## Navigation

```js
// create nav
// components/TopNav.js
import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="nav shadow p-2 justify-content-between mb-3">
      <Link className="nav-link" href="/">
        BLOG
      </Link>

      <div className="d-flex">
        <Link className="nav-link" href="/login">
          Login
        </Link>
        <Link className="nav-link" href="/register">
          Register
        </Link>
      </div>
    </nav>
  );
}

// import <TopNav /> in layout
```

Create NextJs 13 API (Serverless functions) inside app directory

```js
// create api
// app/api/route.js
import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ message: "Hello world" });
}
```

## Connect to MongoDB

```js
// MongoDB connection
// npm i mongoose next-auth

// .env.local
DB_URI=mongodb://127.0.0.1:27017/next-auth

// utils/dbConnect
import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose.connect(process.env.DB_URI);
};

export default dbConnect;
```

## Create mongoose model

```js
// User model
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
      lowercase: true,
    },
    password: String,
    role: {
      type: String,
      default: "user",
    },
    image: String,
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
```

## Register API

```js
// create register api
// npm i bcrypt

// app/api/register/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/user";
import bcrypt from "bcrypt";

export async function POST(req) {
  const _req = await req.json();
  // console.log("_req => ", _req);
  await dbConnect();
  try {
    const { name, email, password } = _req;
    // Check if user with email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        {
          err: "User with that email already exists",
        },
        { status: 409 }
      );
    } else {
      await new User({
        name,
        email,
        password: await bcrypt.hash(password, 10),
      }).save();
      return NextResponse.json(
        {
          success: "Registered successfully",
        },
        { status: 200 }
      );
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}
// you can test with postman
```

## Toast notification

```js
// npm i react-hot-toast

// layout
<Toaster position="top-right" />
```

## Environment variables

```js
// config.js
const DB_URI = "mongodb+srv://xxx";
const API =
  process.env.NODE_ENV === "production"
    ? "https://xxx.vercel.com/api"
    : "http://localhost:3000/api";
const NEXTAUTH_SECRET = "YOUR_dsafdsa";
const GOOGLE_CLIENT_ID = "xxx-xxx.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "XWOixxxhM-xxx-cv_S";
const CLOUDINARY_UPLOAD_PRESET = "xxx";
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/xxx/image/upload";

module.exports = {
  DB_URI,
  API,
  NEXTAUTH_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_URL,
};

// next.config.js
/** @type {import('next').NextConfig} */
const config = require("./config");

const nextConfig = {
  env: {
    DB_URI: config.DB_URI,
    API: config.API,
    NEXTAUTH_SECRET: config.NEXTAUTH_SECRET,
    GOOGLE_CLIENT_ID: config.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: config.GOOGLE_CLIENT_SECRET,
    CLOUDINARY_UPLOAD_PRESET: config.CLOUDINARY_UPLOAD_PRESET,
    CLOUDINARY_URL: config.CLOUDINARY_URL,
  },
};

module.exports = nextConfig;
```

## Register page

```js
// app/register/page
"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Register() {
  const [name, setName] = useState("Ryan");
  const [email, setEmail] = useState("ryan@gmail.com");
  const [password, setPassword] = useState("rrrrrr");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        toast.error(data.err);
        setLoading(false);
        return;
      }

      const data = await response.json();
      toast.success(data.success);
      router.push("/login");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <main>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center vh-100">
          <div className="col-lg-5 bg-light p-5 shadow">
            <h2>Register</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control mb-2"
                placeholder="Your name"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mb-2"
                placeholder="Your email"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-2"
                placeholder="Your password"
              />
              <button
                className="btn btn-primary"
                disabled={loading || !name || !email || !password}
              >
                {loading ? "Please wait.." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
```

## Login Page

```js
"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState("ryan@gmail.com");
  const [password, setPassword] = useState("rrrrrr");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Login success");
      router.push("/");
    }
  };

  return (
    <main>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center vh-100">
          <div className="col-lg-5 bg-light p-5 shadow">
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mb-2"
                placeholder="Your email"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-2"
                placeholder="Your password"
              />
              <button
                className="btn btn-primary"
                disabled={loading || !email || !password}
              >
                {loading ? "Please wait.." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
```

## Authentication using Next Auth

```js
// config.js
// name "NEXTAUTH_SECRET" is important, dont rename
export const NEXTAUTH_SECRET = "YOUR_SECRET";

// utils/authOptions
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import bcrypt from "bcrypt";
import dbConnect from "@/utils/dbConnect";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        dbConnect();

        const { email, password } = credentials;

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("Invalid email or password");
        }

        // If the user has no password (i.e., they signed up via a social network), throw an error
        if (!user.password) {
          throw new Error("Please login via the method you used to sign up");
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {
          throw new Error("Invalid email or password");
        }

        return user;
      },
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

// use authOptions in [...nextauth]/route
// app/api/auth/[...nextauth]/route
import NextAuth from "next-auth";

import { authOptions } from "@/utils/authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
```

## Provide user session

```js
// SessionProvider in Layout
"use client";
import "./globals.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
import TopNav from "@/components/TopNav";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Toaster position="top-right" />
          <TopNav />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
```

## Access logged in user info

```js
// Access session info in TopNav
import { useSession, signOut } from "next-auth/react";

import Link from "next/link";

export default function TopNav() {
  const { data, status } = useSession();

  // console.log(data, status);

  return (
    <nav className="nav shadow p-2 justify-content-between mb-3">
      <Link className="nav-link" href="/">
        BLOG
      </Link>

      {status === "authenticated" ? (
        <div className="d-flex">
          <Link className="nav-link" href="/dashboard">
            Dashboard
          </Link>
          <a
            className="nav-link pointer"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            Logout
          </a>
        </div>
      ) : (
        <div className="d-flex">
          <Link className="nav-link" href="/login">
            Login
          </Link>
          <Link className="nav-link" href="/register">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
```

```
// globals.css
.pointer {
  cursor: pointer;
}
```

## User dashboard

```js
// app/dashboard/user/page
export default function UserDashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="lead">Dashboard</p>
          <hr />
          ...
        </div>
      </div>
    </div>
  );
}
// this page is accessible to anyone
```

## Protecting pages

Protect dashboard pages

```js
// middleware.js
export { default } from "next-auth/middleware";
export const config = { matcher: ["/dashboard/:path*"] };
```

## Redirect back to intended page

```js
// login
import { useRouter, useSearchParams } from "next/navigation";

const router = useRouter();
const searchParams = useSearchParams();
const callbackUrl = searchParams.get("callbackUrl") || "/";

// handleSubmit()
router.push(callbackUrl);
```

## Login with google

```js
// config.js
GOOGLE_CLIENT_ID=xxx
GOOGLE_CLIENT_SECRET=xxx
// import in next.config.js

// utils/authOptions

// ...
import GoogleProvider from "next-auth/providers/google";

// providers: [
GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
```

## Login page

```js
<button
  className="btn btn-danger btn-raised mb-4"
  onClick={() => signIn("google", { callbackUrl: "/" })}
>
  Sign in with Google
</button>
```

## Save social login user in database

Currently user who login with google, is not saved in database

```js
// utils/authOptions
// after providers array
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
          name: user?.name,
          image: user?.image,
        });
      }

      return true;
    },
  },

```

## Additional user info in session

Currently only user name and email is in the session. Let's add role and other user info. Try consonle.log(data) in TopNav

```js
// get user roles

// authOptions
callbacks: {
  // ...
  // add user profile/role to token and session
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
```

## Show user role

```js
// TopNav
<Link
  className="nav-link"
  href={`/dashboard/${data?.user?.role === "admin" ? "admin" : "user"}`}
>
  {data.user.name} ({data?.user?.role})
</Link>
// manually update user role to "admin" and try
```

## Admin layout and page

```js
// components/nav/AdminNav
import Link from "next/link";

export default function AdminNav() {
  return (
    <>
      <nav className="nav justify-content-center mb-3">
        <Link className="nav-link" href="/dashboard/admin">
          Admin
        </Link>
        <Link className="nav-link" href="/dashboard/admin/product/create">
          Create Product
        </Link>
      </nav>
    </>
  );
}


// app/dashboard/admin/layout
import Link from "next/link";
import AdminNav from '@/components/nav/AdminNav';

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminNav />
      {children}
    </>
  );
}

// app/dashboard/admin/page
export default function AdminDashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p>Admin Dashboard</p>
          <hr />
          ...
        </div>
      </div>
    </div>
  );
}
```

## Role based page protection for admin

Currently any logged in user can access '/dashboard/admin' routes

```js
// middleware.js

// export { default } from "next-auth/middleware";
// export const config = { matcher: ["/dashboard/:path*"] };

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// client and server side protection
export const config = {
  matcher: [
    "/dashboard/user/:path*",
    "/dashboard/admin/:path*",
    "/api/user/:path*",
    "/api/admin/:path*",
  ],
};

export default withAuth(
  async function middleware(req) {
    // authorize roles
    const url = req.nextUrl.pathname;
    const userRole = req?.nextauth?.token?.user?.role;

    // client side protection
    if (url?.includes("/admin") && userRole !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        if (!token) {
          return false;
        }
      },
    },
  }
);
```

## Blog Model

```js
// Blog model

// models/blog
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: String,
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    likes: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
```

## Use cloudinary for image uploads

```js
// config.js
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET = xxx;
NEXT_PUBLIC_CLOUDINARY_URL = xxx;
```

## Blog create page

```js
// Blog create page for admin

// npm i react-quill

// app/dashboard/admin/blog/create/page
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function AdminBlogCreate() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // cloudinary - click on settings icon > preset > unsigned
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      ); // replace with your upload_preset

      // upload to cloudinary
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY_URL, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setImage(data.secure_url);
        } else {
          console.log("Image upload failed");
        }
      } catch (err) {
        console.log("Error uploading image:", err);
      }

      setLoading(false);
    }
  };

  const createBlog = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/admin/blog`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            content,
            category,
            image,
          }),
        }
      );

      if (response.ok) {
        router.push("/dashboard/admin");
        toast.success("Blog created successfully");
      } else {
        const errorData = await response.json();
        toast.error(errorData.err);
      }
    } catch (err) {
      console.log("err => ", err);
      toast.error("An error occurred while creating the blog");
    }
  };

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <p>Create Blog</p>
          <label className="text-secondary">Blog title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control p-2 my-2"
          />

          <label className="text-secondary">Blog content</label>
          <ReactQuill
            className="border rounded my-2"
            value={content}
            onChange={setContent}
          />

          <label className="text-secondary">Blog category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control p-2 my-2"
          />

          {image && (
            <img src={image} alt="preview" style={{ width: "100px" }} />
          )}

          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-outline-secondary">
              <label className="mt-2" htmlFor="upload-button">
                {loading ? "Uploading..." : "Upload image"}
              </label>
              <input
                id="upload-button"
                type="file"
                accept="image/*"
                hidden
                onChange={uploadImage}
              />
            </button>

            <button
              diasabled={loading}
              className="btn bg-primary text-light"
              onClick={createBlog}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## Create blog API

```js
// npm i slugify

// app/api/admin/blog/route.js
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/blog";
import slugify from "slugify";
import { getToken } from "next-auth/jwt";

export async function GET(request) {
  return NextResponse.json({ message: "Hello from Blog GET endpoint" });
}

export async function POST(req) {
  const _req = await req.json();
  console.log("_req => ", _req);
  await dbConnect();

  try {
    const { title, content, category, image } = _req;

    // Check if required fields are filled
    switch (true) {
      case !title:
        return NextResponse.json({ err: "Title is required" }, { status: 400 });
      case !content:
        return NextResponse.json(
          { err: "Content is required" },
          { status: 400 }
        );
      case !category:
        return NextResponse.json(
          { err: "Category is required" },
          { status: 400 }
        );
    }

    // Check if blog with that title already exists
    const existingBlog = await Blog.findOne({
      slug: slugify(title?.toLowerCase()),
    });

    // get token to get current user's id
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (existingBlog) {
      return NextResponse.json(
        {
          err: "Blog with that title already exists",
        },
        { status: 409 }
      );
    } else {
      const blog = await Blog.create({
        title,
        content,
        category,
        image: image ? image : null,
        postedBy: token.user._id,
        slug: slugify(title?.toLowerCase()),
      });

      return NextResponse.json(blog);
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}
```

## Blogs list API with Pagination

```js
// blog NOT blogs

// api/blog/route.js
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/blog";
import queryString from "query-string";

export async function GET(req) {
  await dbConnect();

  // console.log("req.url ==================> ", req.url);
  const searchParams = queryString.parseUrl(req.url).query;
  // console.log("searchParams => ", searchParams.page);

  const { page } = searchParams || {}; // Use searchParams.page instead of req.query.page
  const pageSize = 6;

  try {
    const currentPage = Number(page) || 1; // Set default page to 1 if not provided
    const skip = (currentPage - 1) * pageSize; // Calculate the number of documents to skip
    const totalBlogs = await Blog.countDocuments({}); // Get the total count of blogs

    const blogs = await Blog.find({})
      .populate("postedBy", "name")
      .skip(skip)
      .limit(pageSize)
      .sort({ createdAt: "-1" }); // Retrieve the paginated blogs

    console.log(blogs.length);

    return NextResponse.json(
      {
        blogs,
        currentPage,
        totalPages: Math.ceil(totalBlogs / pageSize),
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}
```

## Blog list on home page

```js
// npm i query-string

// app/page.js

import queryString from "query-string";
import Link from "next/link";

async function getBlogs(searchParams) {
  const urlParams = {
    page: searchParams.page || 1,
  };

  const searchQuery = new URLSearchParams(urlParams).toString();
  console.log("searchQuery => ", searchQuery); // page=1

  // blog NOT blogs
  const response = await fetch(`${process.env.API}/blog?${searchQuery}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Add any additional headers if required
    },
    // cache: "no-store", // NEVER USE THIS ANYWHERE
    next: { revalidate: 1 },
  });

  if (!response.ok) {
    console.log("Failed to fetch blogs => ", response);
    throw new Error("Failed to fetch blogs.");
  }

  const data = await response.json();
  return data;
}

export default async function Home({ searchParams = { page: "1" } }) {
  // console.log("searchParams => ", searchParams);
  const data = await getBlogs(searchParams);
  const { blogs, currentPage, totalPages } = data;

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <main>
      <p className="text-center lead fw-bold">Blogs {blogs?.length}</p>

      <pre>{JSON.stringify(blogs, null, 4)}</pre>

      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            {hasPreviousPage && (
              <li className="page-item">
                <Link
                  className="page-link px-3"
                  href={`?page=${currentPage - 1}`}
                >
                  Previous
                </Link>
              </li>
            )}

            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              return (
                <li
                  key={page}
                  className={`page-item${
                    currentPage === page ? " active" : ""
                  }`}
                >
                  <Link className="page-link" href={`?page=${page}`}>
                    {page}
                  </Link>
                </li>
              );
            })}

            {hasNextPage && (
              <li className="page-item">
                <Link
                  className="page-link px-3"
                  href={`?page=${currentPage + 1}`}
                >
                  Next
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </main>
  );
}
```

## Use blog cards to display list of blogs

```js
// components/blogs/ListBlog.js
import BlogCard from "./BlogCard";

export default function ListBlog({ blogs }) {
  return (
    <div className="container mb-5">
      <div className="row g-4">
        {blogs?.map((blog) => (
          <div className="col-lg-4" key={blog.id}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}


// components/blog/BlogCard

// npm i dayjs
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function BlogCard({ blog }) {
  return (
    <div className="card" className="mb-4">
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img
          src={blog?.image || "/images/new-wave.jpeg"}
          className="card-img-top"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          alt={blog.title}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h5>
        <div className="card-text">
          <div
            dangerouslySetInnerHTML={{
              __html:
                blog.content.length > 160
                  ? `${blog.content.substring(0, 160)}...`
                  : blog.content,
            }}
          />
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <small className="text-muted">Category: {blog.category}</small>
        <small className="text-muted">
          Author: {blog.postedBy?.name || "Admin"}
        </small>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <small>❤️ {blog?.likes?.length} likes</small>
        <small className="text-muted">
          Posted {dayjs(blog.updatedAt).fromNow()}
        </small>
      </div>
    </div>
  );
}

// show list of blogs
<ListBlog blogs={blogs} />
```

## Single blog API

```js
// api/blog/[slug]/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/blog";

export async function GET(req, context) {
  await dbConnect();
  // console.log("req ==================> ", context);

  try {
    const blog = await Blog.findOne({ slug: context.params.slug }).populate(
      "postedBy",
      "name"
    );
    return NextResponse.json(blog);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}
```

## Blog view page

```js
// app/blog/[slug]/page

// npm i dayjs
// public/images/new-wave.jpg

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

async function getBlog(slug) {
  const apiUrl = `${process.env.API}/blog/${slug}`;

  const options = {
    method: "GET",
    next: { revalidate: 1 },
    // cache: "no-store", // required to update likes later
  };

  try {
    const response = await fetch(apiUrl, options);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function BlogViewPage({ params }) {
  //   console.log("params in single blog view => ", params);
  const blog = await getBlog(params.slug);

  return (
    <main>
      <p className="text-center lead fw-bold">Blogs</p>
      <BlogList blogs={blogs} />

      {/* <pre>{JSON.stringify(blogs, null, 4)}</pre> */}
      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            {hasPreviousPage && (
              <li className="page-item">
                <Link
                  className="page-link px-3"
                  href={`/?page=${currentPage - 1}`}
                  as={`/?page=${currentPage - 1}`}
                >
                  Previous
                </Link>
              </li>
            )}

            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              return (
                <li
                  key={page}
                  className={`page-item${
                    currentPage === page ? " active" : ""
                  }`}
                >
                  <Link
                    className="page-link"
                    href={`/?page=${page}`}
                    // use 'as' to avoid interpreting it as a separate route
                    as={`/?page=${page}`}
                  >
                    {page}
                  </Link>
                </li>
              );
            })}

            {hasNextPage && (
              <li className="page-item">
                <Link
                  className="page-link px-3"
                  href={`/?page=${currentPage + 1}`}
                  as={`/?page=${currentPage + 1}`}
                >
                  Next
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </main>
  );
}
```

## Loading page (default)

```js
// app/loading.js
export default function Loading() {
  return (
    <p className="d-flex justify-content-center align-items-center vh-100">
      Loading...
    </p>
  );
}
```

## Blog like and unlike API

```js
// api/user/blog/like/route

// make sure to use next: {revalidate: 1}
// do not use cache: "no-store"

import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/blog";
import { getToken } from "next-auth/jwt";

export async function PUT(req) {
  await dbConnect();

  const _req = await req.json();

  const { blogId } = _req;
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  try {
    const updated = await Blog.findByIdAndUpdate(
      blogId,
      { $addToSet: { likes: token.user._id } },
      { new: true }
    );

    return NextResponse.json(updated);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}

// api/blog/unlike/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/blog";
import { getToken } from "next-auth/jwt";

export async function PUT(req) {
  await dbConnect();

  const _req = await req.json();

  const { blogId } = _req;
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  try {
    const updated = await Blog.findByIdAndUpdate(
      blogId,
      { $pull: { likes: token.user._id } },
      { new: true }
    );

    return NextResponse.json(updated);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}
```

## Blog like component

```js
// components/blog/BlogLike
"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter, usePathname } from "next/navigation";
import { set } from "mongoose";

export default function BlogLike({ blog }) {
  const { data, status } = useSession();
  // console.log("blog", blog);
  const [likes, setLikes] = useState(blog?.likes);

  const router = useRouter();
  const pathname = usePathname();

  const isLiked = likes?.includes(data?.user?._id);

  const handleLike = async () => {
    if (status !== "authenticated") {
      toast.error("Please login to like");
      router.push(
        `/login?callbackUrl=${process.env.API.replace("/api", "")}${pathname}`
      );

      return;
    }
    try {
      if (isLiked) {
        const answer = window.confirm("You liked it. Want to unlike?");
        if (answer) {
          handleUnlike();
        }
      } else {
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            blogId: blog._id,
          }),
        };

        const response = await fetch(
          `${process.env.API}/user/blog/like`,
          options
        );
        if (!response.ok) {
          throw new Error(
            `Failed to like: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        // console.log("blog liked response => ", data);
        setLikes(data.likes);
        toast.success("Blog liked");
        router.refresh(); // only works in server components
      }
    } catch (err) {
      console.log(err);
      toast.error("Error liking blog");
    }
  };

  const handleUnlike = async () => {
    try {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          blogId: blog._id,
        }),
      };

      const response = await fetch(
        `${process.env.API}/user/blog/unlike`,
        options
      );
      if (!response.ok) {
        throw new Error(
          `Failed to unlike: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      // console.log("blog unliked response => ", data);
      setLikes(data.likes);
      toast.success("Blog unliked");
      router.refresh();
    } catch (err) {
      console.log(err);
      toast.error("Error unliking blog");
    }
  };

  // 🖤

  return (
    <>
      <small className="pointer">
        <span onClick={handleLike}>❤️ {likes?.length} likes</span>
      </small>
    </>
  );
}
```

## How to like/unlike in single blog view

```js
// app/blog/[slug]/page
<div className="card-footer d-flex justify-content-between">
  <BlogLike blog={blog} />
  <small className="text-muted">Posted {dayjs(blog.updatedAt).fromNow()}</small>
</div>;

// show blog like/unlike in home page
{
  /* <small>❤️ {blog?.likes?.length} likes</small> */
}
<BlogLike blog={blog} />;
```

## User liked blogs API

```js
// api/user/liked-blogs/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/blog";
import { getToken } from "next-auth/jwt";

export async function GET(req) {
  await dbConnect();

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  console.log("token in user liked-blogs => ", token);

  try {
    // Find blogs that have the user's _id in their likes array
    const likedBlogs = await Blog.find({ likes: token.user._id });

    return NextResponse.json(likedBlogs);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}
```

## Liked blogs page

```js
// app/dashboard/user/layout
import Link from "next/link";

export default function UserLayout({ children }) {
  return (
    <>
      <nav className="nav justify-content-center mb-3">
        <Link className="nav-link" href="/dashboard/user">
          Dashboard
        </Link>
      </nav>
      {children}
    </>
  );
}

// Fetch liked blogs, sending Cookie in fetch request headers

import { cookies } from "next/headers";
import ListBlog from "@/components/blog/ListBlog";

async function getLikedBlogs() {
  const nextCookies = cookies();
  const nextAuthSessionToken = nextCookies.get("next-auth.session-token");

  // console.log("nextAuthSessionToken", nextAuthSessionToken);

  const apiUrl = `${process.env.API}/user/liked-blogs`;

  const options = {
    method: "GET",
    // cache: "no-store",
    next: { revalidate: 1 },
    headers: {
      Cookie: `next-auth.session-token=${nextAuthSessionToken?.value}`,
    },
  };

  try {
    const response = await fetch(apiUrl, options);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function UserDashboard() {
  const likedBlogs = await getLikedBlogs();

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="lead">Liked Blogs</p>
          <br />
          <ListBlog blogs={likedBlogs} />
        </div>
      </div>
    </div>
  );
}
```

## Blogs list for admin

```js
<Link className="nav-link" href="/dashboard/admin/blog/list">
  Blogs List
</Link>
```

```js
// List of blogs for admin
// app/dashboard/admin/blog/list/page
import Link from "next/link";
import queryString from "query-string";

async function getBlogs(searchParams) {
  const urlParams = {
    page: searchParams.page || 1,
  };

  const searchQuery = queryString.stringify(urlParams);

  const apiUrl = `${process.env.API}/blog?${searchQuery}`;

  const options = {
    method: "GET",
    // cache: "no-store",
    next: { revalidate: 1 },
  };

  try {
    const response = await fetch(apiUrl, options);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function AdminBlogsList({ searchParams }) {
  const data = await getBlogs(searchParams);
  const { blogs, currentPage, totalPages } = data;

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p>Blogs List</p>
          <hr />
          {blogs.map((blog, index) => (
            <div key={blog._id} className="d-flex justify-content-between">
              <p>{blog.title}</p>
              <Link
                href={`/dashboard/admin/blog/update/${blog.slug}`}
                className="text-danger"
              >
                Update
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            {hasPreviousPage && (
              <li className="page-item">
                <Link
                  className="page-link px-3"
                  href={`?page=${currentPage - 1}`}
                >
                  Previous
                </Link>
              </li>
            )}

            {hasNextPage && (
              <li className="page-item">
                <Link
                  className="page-link px-3"
                  href={`?page=${currentPage + 1}`}
                >
                  Next
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
```

## Blog update and delete API

```js
// api/admin/blog/[id]/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/blog";

export async function PUT(req, context) {
  await dbConnect();

  const _req = await req.json();
  // console.log("context ==================> ", context.params);

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      context.params.id,
      { ..._req },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({
        error: "Blog not found",
      });
    }

    return NextResponse.json(updatedBlog);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req, context) {
  // console.log("context in DELETE ==================> ", context.params.id);

  await dbConnect();

  try {
    const deletedBlog = await Blog.findByIdAndDelete(context.params.id);

    if (!deletedBlog) {
      return res.status(404).json({
        error: "Blog not found",
      });
    }

    return NextResponse.json(deletedBlog);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}
```

## Blog update and delete page

```js
// app/dashboard/admin/blog/update/[slug]/page.js
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function AdminBlogUpdate({ params }) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    getBlog();
  }, [params]);

  async function getBlog() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/blog/${params.slug}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setId(data._id);
      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      setImage(data.image);
      setPreview(data.image);
    } catch (error) {
      console.error("Error fetching blog:", error);
      // Handle error state or show a message to the user
    }
  }

  // cloudinary - click on settings icon > preset > unsigned
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      ); // replace with your upload_preset

      // upload to cloudinary
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY_URL, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setImage(data.secure_url);
        } else {
          console.log("Image upload failed");
        }
      } catch (err) {
        console.log("Error uploading image:", err);
      }

      setLoading(false);
    }
  };

  const updateBlog = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/admin/blog/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            content,
            category,
            image,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update blog");
      }

      // router.back();
      window.location.href = "/dashboard/admin/blog/list";
      toast.success("Blog updated successfully");
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Failed to update blog");
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/admin/blog/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      // router.back();
      window.location.href = "/dashboard/admin/blog/list";
      toast.success("Blog deleted successfully");
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog");
    }
  };

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <p>Update blog</p>
          <label className="text-secondary">Blog title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control p-2 my-2"
          />

          <label className="text-secondary">Blog content</label>
          <ReactQuill
            className="border rounded my-2"
            value={content}
            onChange={setContent}
          />

          <label className="text-secondary">Blog category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control p-2 my-2"
          />

          {image && (
            <img src={image} alt="preview" style={{ width: "100px" }} />
          )}

          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-outline-secondary">
              <label className="mt-2" htmlFor="upload-button">
                {loading ? "Uploading..." : "Upload image"}
              </label>
              <input
                id="upload-button"
                type="file"
                accept="image/*"
                hidden
                onChange={uploadImage}
              />
            </button>

            <button className="btn bg-primary text-light" onClick={updateBlog}>
              Update
            </button>
          </div>

          <div className="d-flex justify-content-end mt-5">
            <button
              diasabled={loading}
              onClick={handleDelete}
              className="btn btn-sm btn-outline-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## Blog search context

```js
// context/search.js
"use client";
import { createContext, useState, useContext } from "react";
import { useRouter } from "next/navigation";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const router = useRouter();

  const fetchSearchResults = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.API}/search?searchQuery=${searchQuery}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSearchResults(data);
      // console.log("search results => ", data);
      router.push(`/search?searchQuery=${searchQuery}`);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults,
        fetchSearchResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
```

## Search provider

```js
// Wrap root layout with search provider
import { SearchProvider } from "@/context/search";

// app/layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <SearchProvider>
            <Toaster position="top-left" />
            <TopNav />
            {children}
          </SearchProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
```

## Search form

```js
// TopNav
import { useSearch } from "@/context/search";

// ...
const { searchQuery, setSearchQuery, fetchSearchResults } = useSearch();

// ...

<form className="d-flex" role="search" onSubmit={fetchSearchResults}>
  <input
    className="form-control"
    type="search"
    placeholder="Search"
    aria-label="Search"
    onChange={(e) => setSearchQuery(e.target.value)}
    value={searchQuery}
  />
  <button className="btn" type="submit" style={{ borderRadius: "20px" }}>
    &#128270;
  </button>
</form>;
```

## Search API

```js
// api/search/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/blog";
import queryString from "query-string";

export async function GET(req) {
  await dbConnect();

  const { searchQuery } = queryString.parseUrl(req.url).query;

  try {
    const blogs = await Blog.find({
      $or: [
        { title: { $regex: searchQuery, $options: "i" } }, // Case-insensitive search on the title field
        { content: { $regex: searchQuery, $options: "i" } }, // Case-insensitive search on the content field
        { category: { $regex: searchQuery, $options: "i" } }, // Case-insensitive search on the category field
      ],
    }).sort({ createdAt: -1 });

    return NextResponse.json(blogs);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}
```

## Search page

```js
// app/search/page
"use client";
import { useEffect } from "react";
import BlogList from "@/components/blog/BlogList";
import { useSearchParams } from "next/navigation";
import { useSearch } from "@/context/search";

export default function SearchPage() {
  // context
  const { setSearchQuery, searchResults, setSearchResults } = useSearch();
  // console.log("searchQuery in search page =====> ", searchQuery);

  const searchParams = useSearchParams();
  const query = searchParams.get("searchQuery");

  // to fetch results on page load based on query
  useEffect(() => {
    if (query) {
      console.log(
        "Got search params in search page => ",
        searchParams.get("searchQuery")
      );
      setSearchQuery(query);
      fetchResultsOnLoad(query);
    }
  }, [query]);

  const fetchResultsOnLoad = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/search?searchQuery=${query}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p>Search result {searchResults.length}</p>
          {/* <pre>{JSON.stringify(searchResults, null, 4)}</pre> */}
          {searchResults ? <BlogList blogs={searchResults} /> : ""}
        </div>
      </div>
    </div>
  );
}
```

Add Cors (optional)

```js
// ...
// add cors support - optional
if (url.startsWith("/api")) {
  NextResponse.next().headers.append("Access-Control-Allow-Origin", "*");
}
// client side protection
if (url?.includes("/admin") && userRole !== "admin") {
  return NextResponse.redirect(new URL("/", req.url));
}
```

## Deploy to vercel

```
npm i -g vercel@latest
vercel
vercel --prod
```

## Ecommerce Project

## Category model

Now we start building ecommerce app. Start off with categories

```js
// models/category
import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      min: 2,
      max: 32,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
  },
  { timestamps: true }
);

categorySchema.plugin(uniqueValidator);

export default mongoose.models.Category ||
  mongoose.model("Category", categorySchema);
```

## Category create API

```js
// api/admin/category/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Category from "@/models/category";
import slugify from "slugify";

export async function POST(req) {
  const body = await req.json();
  await dbConnect();

  try {
    const { name } = body;

    const category = await Category.create({
      name,
      slug: slugify(name),
    });

    return NextResponse.json(category);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}
```

## Categories list API

This will be publicly accessible route

```js
// api/category/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Category from "@/models/category";

export async function GET(req) {
  await dbConnect();

  try {
    const categories = await Category.find({}).sort({ createdAt: "-1" });
    return NextResponse.json(categories);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
```

## Categories update API

```js
// api/admin/category/[id]/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Category from "@/models/category";
import slugify from "slugify";

export async function PUT(req, context) {
  await dbConnect();
  const body = await req.json();

  try {
    const updatingCategory = await Category.findByIdAndUpdate(
      context.params.id,
      { ...body, slug: slugify(body.name) },
      { new: true }
    );

    return NextResponse.json(updatingCategory);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}
```

## Categories delete API

```js
// api/admin/category/[id]/route
export async function DELETE(req, context) {
  await dbConnect();

  try {
    const deletedCategory = await Category.findByIdAndDelete(context.params.id);

    return NextResponse.json(deletedCategory);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}
```

## Category context

```js
// context/category
"use client";
import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [name, setName] = useState("");
  // for fetching all categories
  const [categories, setCategories] = useState([]);
  // for update and delete
  const [updatingCategory, setUpdatingCategory] = useState(null);

  const createCategory = async () => {
    try {
      //
    } catch (err) {
      console.log("err => ", err);
      toast.error("An error occurred while creating the category");
    }
  };

  const fetchCategories = async () => {
    try {
      //
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const updateCategory = async () => {
    try {
      //
    } catch (err) {
      console.log("err => ", err);
      toast.error("An error occurred while updating the category");
    }
  };

  const deleteCategory = async () => {
    try {
      //
    } catch (err) {
      console.log("err => ", err);
      toast.error("An error occurred while deleting the category");
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        name,
        setName,
        createCategory,
        categories,
        setCategories,
        fetchCategories,
        updatingCategory,
        setUpdatingCategory,
        updateCategory,
        deleteCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
```

## Category create function

```js
// context/category
// ...
const createCategory = async () => {
  try {
    const response = await fetch(`${process.env.API}/admin/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });

    if (response.ok) {
      toast.success("Category created successfully");
      const newlyCreatedCategory = await response.json();
      setName("");
      setCategories([newlyCreatedCategory, ...categories]);
    } else {
      const errorData = await response.json();
      toast.error(errorData.err);
    }
  } catch (err) {
    console.log("err => ", err);
    toast.error("An error occurred while creating the category");
  }
};
```

## Category list function

```js
// context/category
// ...
const fetchCategories = async () => {
  try {
    // '/category' not '/categories'
    const response = await fetch(`${process.env.API}/category`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    setCategories(data);
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
};
```

## Category update function

```js
// context/category
// ...
const updateCategory = async () => {
  try {
    const response = await fetch(
      `${process.env.API}/admin/category/${updatingCategory._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatingCategory),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const updatedCategory = await response.json();

    // Update the categories state with the updated category
    setCategories((prevCategories) =>
      prevCategories.map((c) =>
        c._id === updatedCategory._id ? updatedCategory : c
      )
    );

    // Clear the categoryUpdate state
    setUpdatingCategory(null);

    toast.success("Category updated successfully");
  } catch (err) {
    console.log("err => ", err);
    toast.error("An error occurred while updating the category");
  }
};
```

## Category delete function

```js
// context/category
// ...
const deleteCategory = async () => {
  try {
    const response = await fetch(
      `${process.env.API}/admin/category/${updatingCategory._id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const deletedCategory = await response.json();

    // Category deleted successfully, now update the categories state
    setCategories((prevCategories) =>
      prevCategories.filter((c) => c._id !== deletedCategory._id)
    );

    // Clear the categoryUpdate state
    setUpdatingCategory(null);

    toast.success("Category deleted successfully");
  } catch (err) {
    console.log("err => ", err);
    toast.error("An error occurred while deleting the category");
  }
};
```

## Category provider

```js
// app/layout
// ...
import { CategoryProvider } from "@/context/category";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
        <CategoryProvider>
          <body>
            <TopNav />
            <Toaster />
            {/* children props/components can be server rendered */}
            {children}
          </body>
        </CategoryProvider>
      </SessionProvider>
    </html>
  );
}
```

## Category page for admin

```js
// components/nav/AdminNav
<Link className="nav-link" href="/dashboard/admin/category">
  Categories
</Link>;

// app/dashboard/admin/category/page
("use client");
import CategoryCreate from "@/components/category/CategoryCreate";
import CategoryList from "@/components/category/CategoryList";

export default function Categories() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <p className="lead">Create Category</p>
          <CategoryCreate />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <p className="lead mb-4">List of Categories</p>
          <CategoryList />
        </div>
      </div>
    </div>
  );
}
```

## ChatGPT for category and tags ideas

```
Category: Women's Fashion
Tags: Dresses, Tops, Bottoms, Outerwear, Activewear, Swimwear, Lingerie, Accessories, Shoes, Handbags.

Category: Men's Fashion
Tags: Shirts, T-Shirts, Pants, Jeans, Suits, Blazers, Activewear, Underwear, Accessories, Shoes.

Category: Kids' Fashion
Tags: Boys' Clothing, Girls' Clothing, Baby Clothing, Toddler Clothing, Kids' Shoes, Kids' Accessories.

Category: Activewear
Tags: Yoga Wear, Running Gear, Gym Clothing, Sportswear, Workout Accessories.

Category: Formal Wear
Tags: Evening Dresses, Suits, Tuxedos, Cocktail Dresses, Formal Shoes, Formal Accessories.

Category: Casual Wear
Tags: Casual Dresses, Casual Tops, Jeans, T-Shirts, Casual Shoes, Hats.

Category: Shoes
Tags: High Heels, Boots, Sneakers, Flats, Sandals, Loafers, Running Shoes.

Category: Accessories
Tags: Jewelry, Watches, Scarves, Belts, Sunglasses, Hats, Handbags.
```

## Category create, update and delete component

When a category is clicked, it will be put in the state as updatingCategory. Then you can update or delete that category using same form that was used to create.

```js
// components/category/CategoryCreate
"use client";
import { useCategory } from "@/context/category";

export default function AdminCreateCategory() {
  // context
  const {
    name,
    setName,
    updatingCategory,
    setUpdatingCategory,
    createCategory,
    updateCategory,
    deleteCategory,
  } = useCategory();

  return (
    <>
      <p>Create Category</p>
      <input
        type="text"
        value={updatingCategory ? updatingCategory.name : name}
        onChange={(e) =>
          updatingCategory
            ? setUpdatingCategory({ ...updatingCategory, name: e.target.value })
            : setName(e.target.value)
        }
        className="form-control p-2 my-2"
      />

      {/* <pre>{JSON.stringify(categoryUpdate, null, 4)}</pre> */}

      <div className="d-flex justify-content-between">
        <button
          className={`btn bg-${
            updatingCategory ? "info" : "primary"
          } text-light`}
          onClick={(e) => {
            e.preventDefault();
            updatingCategory ? updateCategory() : createCategory();
          }}
        >
          {updatingCategory ? "Update" : "Create"}
        </button>

        {updatingCategory && (
          <>
            <button
              className={`btn bg-danger text-light`}
              onClick={(e) => {
                e.preventDefault();
                deleteCategory();
              }}
            >
              Delete
            </button>

            <button
              className="btn bg-success text-light"
              onClick={() => setUpdatingCategory(null)}
            >
              Clear
            </button>
          </>
        )}
      </div>
    </>
  );
}
// see created categories list
// http://localhost:3000/api/category
```

## Category list component

```js
// components/category/CategoryList
"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useCategory } from "@/context/category";

export default function Categories() {
  // context
  const { categories, fetchCategories, setUpdatingCategory } = useCategory();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          {categories.map((c) => (
            <button
              className="btn"
              onClick={() => {
                setUpdatingCategory(c);
              }}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
```

## Tags

Follow similar steps as Category

## Tag Model

```js
// models/tag
const mongoose = require("mongoose");
import uniqueValidator from "mongoose-unique-validator";

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      min: 2,
      max: 32,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

tagSchema.plugin(uniqueValidator);

export default mongoose.models.Tag || mongoose.model("Tag", tagSchema);
```

## Tag create API

```js
// api/admin/tag/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Tag from "@/models/tag";
import slugify from "slugify";

export async function POST(req) {
  const _req = await req.json();
  await dbConnect();

  try {
    const { name, parent } = _req;

    const tag = await Tag.create({
      name,
      parent,
      slug: slugify(name),
    });

    return NextResponse.json(tag);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}
```

## Tag list API

```js
// api/tag/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Tag from "@/models/tag";

export async function GET(req) {
  await dbConnect();

  try {
    const tags = await Tag.find({}).sort({ createdAt: "-1" });

    return NextResponse.json(tags);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}
```

## Tag update API

```js
// api/admin/tag/[id]/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Tag from "@/models/tag";

export async function PUT(req, context) {
  await dbConnect();

  const _req = await req.json();

  try {
    const updatingTag = await Tag.findByIdAndUpdate(
      context.params.id,
      { ..._req },
      { new: true }
    );

    return NextResponse.json(updatingTag);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}
```

## Tag delete API

```js
// api/admin/tag/[id]/route
export async function DELETE(req, context) {
  await dbConnect();

  try {
    const deletedTag = await Tag.findByIdAndDelete(context.params.id);

    return NextResponse.json(deletedTag);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}
```

## Tag context

```js
"use client";
import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";

export const TagContext = createContext();

export const TagProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [parentCategory, setParentCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [updatingTag, setUpdatingTag] = useState(null);

  const createTag = async () => {
    try {
      //
    } catch (err) {
      console.log("err => ", err);
      toast.error("An error occurred while creating a tag");
    }
  };

  const fetchTags = async () => {
    try {
      //
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const updateTag = async () => {
    try {
      //
    } catch (err) {
      console.log("err => ", err);
      toast.error("An error occurred while updating a tag");
    }
  };

  const deleteTag = async () => {
    try {
      //
    } catch (err) {
      console.log("err => ", err);
      toast.error("An error occurred while deleting the sub category");
    }
  };

  return (
    <TagContext.Provider
      value={{
        name,
        setName,
        parentCategory,
        setParentCategory,
        createTag,
        tags,
        setTags,
        fetchTags,
        updatingTag,
        setUpdatingTag,
        updateTag,
        deleteTag,
      }}
    >
      {children}
    </TagContext.Provider>
  );
};

export const useTag = () => useContext(TagContext);
```

## Tag create function

```js
// context/tag
// ...
const createTag = async () => {
  try {
    const response = await fetch(`${process.env.API}/admin/tag`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        parent: parentCategory,
      }),
    });

    if (response.ok) {
      toast.success("Tag created successfully");
      const newlyCreatedTag = await response.json();
      setName("");
      setParentCategory("");
      setTags([newlyCreatedTag, ...tags]);
    } else {
      const errorData = await response.json();
      toast.error(errorData.err);
    }
  } catch (err) {
    console.log("err => ", err);
    toast.error("An error occurred while creating a tag");
  }
};
```

## Tag list function

```js
// context/tag
// ...
const fetchTags = async () => {
  try {
    const response = await fetch(`${process.env.API}/tags`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    setTags(data);
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
};
```

## Tag update function

```js
// context/tag
// ...
const updateTag = async () => {
  try {
    const response = await fetch(
      `${process.env.API}/admin/tag/${updatingTag._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatingTag),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const updatedTag = await response.json();

    // Update the categories state with the updated category
    setTags((prevTags) =>
      prevTags.map((t) => (t._id === updatedTag._id ? updatedTag : t))
    );

    // Clear the categoryUpdate state
    setUpdatingTag(null);
    setParentCategory("");

    toast.success("Tag updated successfully");
  } catch (err) {
    console.log("err => ", err);
    toast.error("An error occurred while updating a tag");
  }
};
```

## Tag delete function

```js
// context/tag
// ...
const deleteTag = async () => {
  try {
    const response = await fetch(
      `${process.env.API}/admin/tag/${updatingTag._id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const deletedTag = await response.json();

    // Category deleted successfully, now update the categories state
    setTags((prevTags) => prevTags.filter((t) => t._id !== deletedTag._id));

    // Clear the categoryUpdate state
    setUpdatingTag(null);
    setParentCategory("");

    toast.success("Tag deleted successfully");
  } catch (err) {
    console.log("err => ", err);
    toast.error("An error occurred while deleting the sub category");
  }
};
```

## Tag provider

```js
// app/layout
// ...
import { TagProvider } from "@/context/tag";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
        <CategoryProvider>
          <TagProvider>
            <body>
              <TopNav />
              <Toaster />
              {/* children props/components can be server rendered */}
              {children}
            </body>
          </TagProvider>
        </CategoryProvider>
      </SessionProvider>
    </html>
  );
}
```

## Tags page for admin

```js
// components/nav/AdminNav
<Link className="nav-link" href="/dashboard/admin/tag">
  Tags
</Link>
```

```js
// app/dashboard/admin/tag/page
"use client";
import { useEffect } from "react";
import { useTag } from "@/context/tag";
import TagCreate from "@/components/tag/TagCreate";
import TagList from "@/components/tag/TagList";

export default function Tags() {
  // context
  const { fetchTags } = useTag();

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <p className="lead">Create Tags</p>
          <TagCreate />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <p className="lead mb-4">List of Tags</p>
          <TagList />
        </div>
      </div>
    </div>
  );
}
```

## Tag create update and delete component

```js
// components/tag/TagCreate
"use client";
import { useTag } from "@/context/tag";
import { useCategory } from "@/context/category";
import { useEffect } from "react";

export default function AdminTagCreate() {
  // context
  const {
    name,
    setName,
    parentCategory,
    setParentCategory,
    updatingTag,
    setUpdatingTag,
    createTag,
    updateTag,
    deleteTag,
  } = useTag();
  const { fetchCategories, categories } = useCategory();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <p>Create tag</p>
      <input
        type="text"
        value={updatingTag ? updatingTag.name : name}
        placeholder="Tag Name"
        onChange={(e) =>
          updatingTag
            ? setUpdatingTag({
                ...updatingTag,
                name: e.target.value,
              })
            : setName(e.target.value)
        }
        className="form-control p-2 my-2"
      />

      <div className="form-group mt-4">
        <label>Parent category</label>
        <select
          name="category"
          className="form-control"
          onChange={(e) => setParentCategory(e.target.value)}
        >
          <option value="">Select one</option>
          {categories.length > 0 &&
            categories.map((c) => (
              <option
                key={c._id}
                value={c._id}
                selected={
                  c._id === updatingTag?.parent || c._id === parentCategory
                }
              >
                {c.name}
              </option>
            ))}
        </select>
      </div>

      {/* <pre>{JSON.stringify(updatingTag, null, 4)}</pre> */}

      <div className="d-flex justify-content-between">
        <button
          className={`btn bg-${updatingTag ? "info" : "primary"} text-light`}
          onClick={(e) => {
            e.preventDefault();
            updatingTag ? updateTag() : createTag();
          }}
        >
          {updatingTag ? "Update" : "Create"}
        </button>

        {updatingTag && (
          <>
            <button
              className={`btn bg-danger text-light`}
              onClick={(e) => {
                e.preventDefault();
                deleteTag();
              }}
            >
              Delete
            </button>

            <button
              className="btn bg-success text-light"
              onClick={() => setUpdatingTag(null)}
            >
              Clear
            </button>
          </>
        )}
      </div>
    </>
  );
}
```

## Tag list component

```js
// components/tag/TagList
"use client";
import { useEffect } from "react";
import { useTag } from "@/context/tag";

export default function TagsList() {
  // context
  const { tags, fetchTags, setUpdatingTag } = useTag();

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          {tags.map((t) => (
            <button
              className="btn"
              onClick={() => {
                setUpdatingTag(t);
              }}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
```

## Trying API post routes using Postman (optional)

```
POST        http://localhost:3000/api/admin/category
Headers     next-auth.session-token=eyxxx...
```

## Product model

```js
// models/product

// npm i mongoose-unique-validator

import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import Category from "@/models/category";
import Tag from "@/models/tag";

const ratingSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      maxlength: 200,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true } // Add timestamps
);

const likeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true } // Add timestamps
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      maxlength: 160,
      text: true, // for text search
    },
    slug: {
      type: String,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000,
      text: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32,
      validate: {
        validator: function (value) {
          return value !== 0;
        },
        message: "Price must be greater than 0.",
      },
    },
    previousPrice: Number,
    color: String,
    brand: String,
    stock: Number,
    shipping: {
      type: Boolean,
      default: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
    images: [
      {
        public_id: {
          type: String,
          default: "",
        },
        secure_url: {
          type: String,
          default: "",
        },
      },
    ],
    sold: {
      type: Number,
      default: 0,
    },
    likes: [likeSchema],
    // likes: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //   },
    // ],
    ratings: [ratingSchema],
    // ratings: [
    //   {
    //     rating: {
    //       type: Number,
    //       min: 1,
    //       max: 5,
    //     },
    //     comment: {
    //       type: String,
    //       maxlength: 200,
    //     },
    //     postedBy: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "User",
    //     },
    //   },
    // ],
  },
  { timestamps: true }
);

productSchema.plugin(uniqueValidator);

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
```

## Products create API

```js
// api/admin/product/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import slugify from "slugify";

export async function POST(req) {
  const _req = await req.json();
  await dbConnect();

  try {
    // console.log(_req);
    const product = await Product.create({
      ..._req,
      slug: slugify(_req.title),
    });

    return NextResponse.json(product);
  } catch (err) {
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}
```

```js
// model route context provider page component
// ask chatgpt to give you product json data to paste in postman
```

## Get products list with pagination

```js
// api/product/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import queryString from "query-string";

/**
 * route query alternatives
 * req.nextUrl.searchParams.get('xyz')
 */

export async function GET(req) {
  await dbConnect();

  const searchParams = queryString.parseUrl(req.url).query;

  const { page } = searchParams || {};
  const pageSize = 6;

  try {
    const currentPage = Number(page) || 1;
    const skip = (currentPage - 1) * pageSize;
    const totalProducts = await Product.countDocuments({});

    const products = await Product.find({})
      .skip(skip)
      .limit(pageSize)
      .sort({ createdAt: "-1" });

    return NextResponse.json(
      {
        products,
        currentPage,
        totalPages: Math.ceil(totalProducts / pageSize),
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}
```

## Get single product

```js
// api/product/[slug]/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";

export async function GET(req, context) {
  await dbConnect();

  try {
    const product = await Product.findOne({ slug: context.params.slug });
    return NextResponse.json(product);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}
```

## Product update and delete by admin

```js
// api/admin/product/[id]/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";

export async function PUT(req, context) {
  await dbConnect();

  const _req = await req.json();
  // console.log("context ==================> ", context.params);

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      context.params.id,
      { ..._req },
      { new: true }
    );

    return NextResponse.json(updatedProduct);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: err,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req, context) {
  // console.log("context in DELETE ==================> ", context.params.id);

  await dbConnect();

  try {
    const deletedProduct = await Product.findByIdAndDelete(context.params.id);

    return NextResponse.json(deletedProduct);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}
```

## Product context

```js
"use client";
import { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import Resizer from "react-image-file-resizer";
import { useRouter } from "next/navigation";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [updatingProduct, setUpdatingProduct] = useState(null);
  const [uploading, setUploading] = useState(false);

  const router = useRouter();

  // const uploadImages = (e) => {
  //   let files = e.target.files;

  //   let allUploadedFiles = updatingProduct
  //     ? updatingProduct.images || []
  //     : product
  //     ? product.images || []
  //     : [];

  //   if (files) {
  //     // Check if the total combined images exceed 10
  //     const totalImages = allUploadedFiles.length + files.length;
  //     if (totalImages > 10) {
  //       alert("You can't upload more than 10 images.");
  //       return;
  //     }

  //     setUploading(true);
  //     for (let i = 0; i < files.length; i++) {
  //       Resizer.imageFileResizer(
  //         files[i],
  //         1280,
  //         720,
  //         "JPEG",
  //         100,
  //         0,
  //         (uri) => {
  //           fetch(`${process.env.API}/admin/upload/image`, {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify({ image: uri }),
  //           })
  //             .then((response) => response.json())
  //             .then((data) => {
  //               // console.log("IMAGE UPLOAD RES DATA", data);
  //               allUploadedFiles.push(data);

  //               updatingProduct
  //                 ? setUpdatingProduct({
  //                     ...updatingProduct,
  //                     images: allUploadedFiles,
  //                   })
  //                 : setProduct({ ...product, images: allUploadedFiles });
  //             })
  //             .catch((err) => {
  //               console.log("CLOUDINARY UPLOAD ERR", err);
  //             })
  //             .finally(() => {
  //               // Check if this is the last file to be uploaded
  //               if (i === files.length - 1) {
  //                 setUploading(false);
  //               }
  //             });
  //         },
  //         "base64"
  //       );
  //     }
  //   }
  // };

  const uploadImages = (e) => {
    let files = e.target.files;

    let allUploadedFiles = updatingProduct
      ? updatingProduct.images || []
      : product
      ? product.images || []
      : [];

    if (files) {
      // Check if the total combined images exceed 10
      const totalImages = allUploadedFiles.length + files.length;
      if (totalImages > 4) {
        alert("You can't upload more than 4 images.");
        return;
      }

      setUploading(true);
      const uploadPromises = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const promise = new Promise((resolve) => {
          Resizer.imageFileResizer(
            file,
            1280,
            720,
            "JPEG",
            100,
            0,
            (uri) => {
              fetch(`${process.env.API}/admin/upload/image`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ image: uri }),
              })
                .then((response) => response.json())
                .then((data) => {
                  // Insert the new image at the beginning of the array
                  allUploadedFiles.unshift(data);

                  resolve();
                })
                .catch((err) => {
                  console.log("CLOUDINARY UPLOAD ERR", err);
                  resolve();
                });
            },
            "base64"
          );
        });

        uploadPromises.push(promise);
      }

      Promise.all(uploadPromises)
        .then(() => {
          // Update the state after all images are uploaded
          updatingProduct
            ? setUpdatingProduct({
                ...updatingProduct,
                images: allUploadedFiles,
              })
            : setProduct({ ...product, images: allUploadedFiles });

          setUploading(false);
        })
        .catch((error) => {
          console.log("Error uploading images: ", error);
          setUploading(false);
        });
    }
  };

  const deleteImage = (public_id) => {
    setUploading(true);
    fetch(`${process.env.API}/admin/upload/image`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ public_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("IMAGE DELETE RES DATA", data);
        const filteredImages = updatingProduct
          ? updatingProduct.images.filter(
              (image) => image.public_id !== public_id
            )
          : product.images.filter((image) => image.public_id !== public_id);

        updatingProduct
          ? setUpdatingProduct({
              ...updatingProduct,
              images: filteredImages,
            })
          : setProduct({ ...product, images: filteredImages });
      })
      .catch((err) => {
        toast.error("Image delete failed");
        console.log("CLOUDINARY DELETE ERR", err);
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const createProduct = async () => {
    try {
      const response = await fetch(`${process.env.API}/admin/product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...product,
        }),
      });

      if (response.ok) {
        const newlyCreatedProduct = await response.json();
        toast.success(`Product "${newlyCreatedProduct?.title}" created!`);
        router.push("/dashboard/admin/products");
      } else {
        const errorData = await response.json();
        toast.error(errorData.err);
      }
    } catch (err) {
      console.log("err => ", err);
      toast.error("An error occurred while creating the product");
    }
  };

  const fetchProducts = async (page = 1) => {
    try {
      const response = await fetch(`${process.env.API}/product?page=${page}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("products in context => ", data);

      setProducts(data.products);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const updateProduct = async () => {
    try {
      const response = await fetch(
        `${process.env.API}/admin/product/${updatingProduct._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatingProduct),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const updatedProduct = await response.json();
      toast.success(`Product "${updatedProduct?.title}" updated!`);
      // router.push("/dashboard/admin/products");
      router.back();
    } catch (err) {
      console.log("err => ", err);
      toast.error("An error occurred while updating the product");
    }
  };

  const deleteProduct = async () => {
    try {
      // delete the product images
      if (updatingProduct && updatingProduct.images) {
        // Map through updatingProduct.images and delete each image from Cloudinary
        for (const image of updatingProduct.images) {
          deleteImage(image.public_id);
        }
      }

      const response = await fetch(
        `${process.env.API}/admin/product/${updatingProduct._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const deletedProduct = await response.json();
      toast.error(`Product "${deletedProduct?.title}" deleted!`);
      // router.push("/dashboard/admin/products");
      router.back();
    } catch (err) {
      console.log("err => ", err);
      toast.error("An error occurred while deleting the product");
    }
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        createProduct,
        products,
        setProducts,
        currentPage,
        totalPages,
        fetchProducts,
        updatingProduct,
        setUpdatingProduct,
        updateProduct,
        deleteProduct,
        uploadImages,
        uploading,
        deleteImage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
```

## Admin create product

```js
// app/dashboard/admin/layout
<Link
  className="nav-link"
  href="/dashboard/admin/product"
>
  Add Product
</Link>
<Link className="nav-link" href="/dashboard/admin/products">
  Products List
</Link>

// app/dashboard/admin/product/page
"use client";
import ProductCreate from "@/components/product/admin/ProductCreate";

export default function AddProduct() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <ProductCreate />
        </div>
      </div>
    </div>
  );
}

// components/product/admin/ProductCreate.js
"use client";
import { useEffect } from "react";
import { useProduct } from "@/context/product";
import { useCategory } from "@/context/category";
import { useTag } from "@/context/tag";

export default function AdminCreateProduct() {
  // context
  const {
    product,
    setProduct,
    updatingProduct,
    setUpdatingProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    uploadImages,
    uploading,
    deleteImage,
  } = useProduct();

  const { categories, fetchCategories } = useCategory();
  const { tags, fetchTags } = useTag();

  const imagePreviews = updatingProduct
    ? updatingProduct?.images
    : product
    ? product?.images
    : [];

  useEffect(() => {
    fetchCategories();
    fetchTags();
  }, []);

  return (
    <>
      <p className="lead">{updatingProduct ? "Update" : "Create"} Product</p>
      <input
        type="text"
        placeholder="Title"
        value={updatingProduct ? updatingProduct?.title : product?.title}
        onChange={(e) =>
          updatingProduct
            ? setUpdatingProduct({ ...updatingProduct, title: e.target.value })
            : setProduct({ ...product, title: e.target.value })
        }
        className="form-control p-2 my-2"
      />

      <textarea
        placeholder="Description"
        value={
          updatingProduct ? updatingProduct.description : product?.description
        }
        onChange={(e) =>
          updatingProduct
            ? setUpdatingProduct({
                ...updatingProduct,
                description: e.target.value,
              })
            : setProduct({ ...product, description: e.target.value })
        }
        className="form-control p-2 my-2"
      />

      <div className="form-group">
        <input
          type="number"
          placeholder="Price"
          min="1"
          name="price"
          className="form-control p-2 my-2"
          value={updatingProduct ? updatingProduct.price : product?.price}
          onChange={(e) => {
            updatingProduct
              ? setUpdatingProduct({
                  ...updatingProduct,
                  price: e.target.value,
                })
              : setProduct({ ...product, price: e.target.value });
          }}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="Color"
          name="price"
          className="form-control p-2 my-2"
          value={updatingProduct ? updatingProduct.color : product?.color}
          onChange={(e) => {
            updatingProduct
              ? setUpdatingProduct({
                  ...updatingProduct,
                  color: e.target.value,
                })
              : setProduct({ ...product, color: e.target.value });
          }}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="Brand"
          name="brand"
          className="form-control p-2 my-2"
          value={updatingProduct ? updatingProduct.brand : product?.brand}
          onChange={(e) => {
            updatingProduct
              ? setUpdatingProduct({
                  ...updatingProduct,
                  brand: e.target.value,
                })
              : setProduct({ ...product, brand: e.target.value });
          }}
        />

        <div className="form-group">
          <input
            type="number"
            min="1"
            placeholder="Stock"
            name="Stock"
            className="form-control p-2 my-2"
            value={updatingProduct ? updatingProduct.stock : product?.stock}
            onChange={(e) => {
              updatingProduct
                ? setUpdatingProduct({
                    ...updatingProduct,
                    stock: e.target.value,
                  })
                : setProduct({ ...product, stock: e.target.value });
            }}
          />
        </div>

        <div className="form-group">
          <select
            name="category"
            className="form-control p-2 my-2"
            onChange={(e) => {
              const categoryId = e.target.value;
              const categoryName =
                e.target.options[e.target.selectedIndex].getAttribute("name");
              const category = categoryId
                ? { _id: categoryId, name: categoryName }
                : null; // Set the category to null if no value is selected

              if (updatingProduct) {
                setUpdatingProduct({
                  ...updatingProduct,
                  category: category,
                });
              } else {
                setProduct({
                  ...product,
                  category: category,
                });
              }
            }}
            value={
              updatingProduct
                ? updatingProduct?.category?._id || "" // Make sure to handle the case when updatingProduct.category is null or undefined
                : product?.category?._id || "" // Make sure to handle the case when product.category is null or undefined
            }
          >
            <option value="" disabled>
              Select category
            </option>
            {categories.length > 0 &&
              categories.map((c) => (
                <option key={c._id} value={c._id} name={c.name}>
                  {c.name}
                </option>
              ))}
          </select>
        </div>

        <div className="d-flex justify-content-evenly align-items-center">
          {tags
            .filter(
              (ft) =>
                ft.parent ===
                (updatingProduct?.category?._id || product?.category?._id)
            )
            .map((tag) => (
              <div key={tag._id} className="form-check">
                <input
                  type="checkbox"
                  id={tag._id}
                  name="tags"
                  value={tag._id}
                  checked={(updatingProduct
                    ? updatingProduct?.tags
                    : product?.tags
                  )?.some((selectedTag) => selectedTag._id === tag._id)} // Check if the tag object is in the selected tags array
                  onChange={(e) => {
                    const tagId = e.target.value;
                    const tagName = tag.name;
                    const selectedTags = updatingProduct
                      ? [...updatingProduct.tags]
                      : [...product.tags];

                    if (e.target.checked) {
                      selectedTags.push({ _id: tagId, name: tagName }); // Add the tag object to the selected tags array
                    } else {
                      const index = selectedTags.findIndex(
                        (selectedTag) => selectedTag._id === tagId
                      );
                      if (index !== -1) {
                        // if already in tags array remove
                        selectedTags.splice(index, 1);
                      }
                    }

                    if (updatingProduct) {
                      setUpdatingProduct({
                        ...updatingProduct,
                        tags: selectedTags,
                      });
                    } else {
                      setProduct({ ...product, tags: selectedTags });
                    }
                  }}
                />
                <label htmlFor={tag._id}>&nbsp;{tag.name}</label>
              </div>
            ))}
        </div>

        <div className="form-group mt-3">
          <label
            className={`btn btn-primary col-12 ${uploading ? "disabled" : ""}`}
          >
            {uploading ? "Processing..." : "Upload images"}
            <input
              type="file"
              multiple
              hidden
              accept="images/*"
              onChange={uploadImages}
              disabled={uploading}
            />
          </label>
        </div>

        <div className="d-flex justify-content-center">
          {imagePreviews?.length > 0
            ? imagePreviews.map((img) => (
                <div key={img.public_id}>
                  <img
                    src={img.secure_url}
                    className="img rounded-circle mx-1 shadow"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <br />
                  <div
                    className="text-center pointer"
                    onClick={() => deleteImage(img.public_id)}
                  >
                    ❌
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>

      {/* BUTTONS FOR UPDATE / DELETE */}

      <div className="d-flex justify-content-between mt-3">
        <button
          className={`btn btn-raised bg-${
            updatingProduct ? "info" : "primary"
          } text-light`}
          onClick={(e) => {
            e.preventDefault();
            updatingProduct ? updateProduct() : createProduct();
          }}
        >
          {updatingProduct ? "Update" : "Create"}
        </button>

        {updatingProduct && (
          <>
            <button
              className={`btn bg-danger text-light`}
              onClick={(e) => {
                e.preventDefault();
                deleteProduct();
              }}
            >
              Delete
            </button>

            <button
              className="btn bg-success text-light"
              onClick={() => window.location.reload()}
            >
              Clear
            </button>
          </>
        )}
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col-6">
            <pre>{JSON.stringify(product, null, 4)}</pre>
          </div>
          <dic className="col-6">
            <pre>{JSON.stringify(updatingProduct, null, 4)}</pre>
          </dic>
        </div>
      </div> */}
    </>
  );
}
```

## Admin products list

```js
// dashboard/admin/products/page
"use client";
import ProductList from "@/components/product/admin/ProductList";

export default function AddProduct() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <p className="lead mb-4">List of Products</p>
          <ProductList />
        </div>
      </div>
    </div>
  );
}


// components/product/admin/ProductList
"use client";
import { useEffect } from "react";
import { useProduct } from "@/context/product";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";

export default function AdminProducts() {
  // context
  const {
    products,
    currentPage,
    totalPages,
    fetchProducts,
    setUpdatingProduct,
  } = useProduct();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
       {products.map((product) => (
          <div
            className="col-lg-6 mb-4 pointer"
            onClick={() => {
              setUpdatingProduct(product);
              router.push(`/dashboard/admin/product`);
            }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <div style={{ height: "100px", overflow: "hidden" }}>
                  <Image
                    src={
                      product?.images?.[0]?.secure_url ||
                      "/images/new-wave.jpeg"
                    }
                    className="card-img-top"
                    width={500}
                    height={300}
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                    alt={product?.title}
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <h4>${product?.price.toFixed(2)}</h4>
                  <div className="card-text text-secondary">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          product?.description?.length > 160
                            ? `${product?.description.substring(0, 160)}...`
                            : product?.description,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* <pre>{JSON.stringify(currentPage, null, 4)}</pre> */}

      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              return (
                <li
                  key={page}
                  className={`page-item${
                    currentPage === page ? " active" : ""
                  }`}
                >
                  <Link
                    className="page-link"
                    href={`${pathname}?page=${page}`}
                    // use 'as' to avoid interpreting it as a separate route
                    as={`${pathname}?page=${page}`}
                  >
                    {page}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
```

## Shop page

```js
// app/shop/page
import BlogList from "@/components/blog/BlogList";
import Link from "next/link";

async function getProducts(searchParams) {
  const searchQuery = new URLSearchParams({
    page: searchParams?.page || 1,
  }).toString();
  //   console.log("searchQuery => ", searchQuery); // page=1

  const response = await fetch(`${process.env.API}/product?${searchQuery}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 1 },
  });

  if (!response.ok) {
    console.log("Failed to fetch products => ", response);
    throw new Error("Failed to fetch products.");
  }

  const data = await response.json();
  return data;
}

export default async function Shop({ searchParams }) {
  // console.log("searchParams => ", searchParams);
  const data = await getProducts(searchParams);
  const { products, currentPage, totalPages } = data;

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  const pathname = "/shop";

  return (
    <main>
      <p className="text-center lead fw-bold">Latest Products</p>

      <pre>{JSON.stringify(products, null, 4)}</pre>

      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            {hasPreviousPage && (
              <li className="page-item">
                <Link
                  className="page-link px-3"
                  href={`${pathname}?page=${currentPage - 1}`}
                  as={`${pathname}?page=${currentPage - 1}`}
                >
                  Previous
                </Link>
              </li>
            )}

            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              return (
                <li
                  key={page}
                  className={`page-item${
                    currentPage === page ? " active" : ""
                  }`}
                >
                  <Link
                    className="page-link"
                    href={`${pathname}?page=${page}`}
                    // use 'as' to avoid interpreting it as a separate route
                    as={`${pathname}?page=${page}`}
                  >
                    {page}
                  </Link>
                </li>
              );
            })}

            {hasNextPage && (
              <li className="page-item">
                <Link
                  className="page-link px-3"
                  href={`${pathname}?page=${currentPage + 1}`}
                  as={`${pathname}?page=${currentPage + 1}`}
                >
                  Next
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </main>
  );
}
```

## Pagination component

```js
// components/Pagination
import Link from "next/link";

export default function Pagination({ currentPage, totalPages, pathname }) {
  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {hasPreviousPage && (
            <li className="page-item">
              <Link
                className="page-link px-3"
                href={`${pathname}?page=${currentPage - 1}`}
                as={`${pathname}?page=${currentPage - 1}`}
              >
                Previous
              </Link>
            </li>
          )}

          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;
            return (
              <li
                key={page}
                className={`page-item${currentPage === page ? " active" : ""}`}
              >
                <Link
                  className="page-link"
                  href={`${pathname}?page=${page}`}
                  // use 'as' to avoid interpreting it as a separate route
                  as={`${pathname}?page=${page}`}
                >
                  {page}
                </Link>
              </li>
            );
          })}

          {hasNextPage && (
            <li className="page-item">
              <Link
                className="page-link px-3"
                href={`${pathname}?page=${currentPage + 1}`}
                as={`${pathname}?page=${currentPage + 1}`}
              >
                Next
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

// now use in '/shop'
<Pagination
  currentPage={data.currentPage}
  totalPages={data.totalPages}
  pathname="/shop"
/>;
// use it in admin products list component
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  pathname={pathname}
/>;
```

## Product List component

```js
// components/product/ProductList
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div className="container mb-5">
      <div className="row g-4">
        {products?.map((product) => (
          <div className="col-lg-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

// components/product/ProductCard
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";

dayjs.extend(relativeTime);

export default function ProductCard({ product }) {
  return (
    <div className="card mb-4">
      <div style={{ height: "200px", overflow: "hidden" }}>
        <Image
          src={product?.images?.[0]?.secure_url || "/images/new-wave.jpeg"}
          className="card-img-top"
          width={500}
          height={300}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          alt={product.title}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <Link href={`/product/${product.slug}`}>{product.title}</Link>
        </h5>
        <div className="card-text">
          <div
            dangerouslySetInnerHTML={{
              __html:
                product?.description?.length > 160
                  ? `${product?.description.substring(0, 160)}...`
                  : product?.description,
            }}
          />
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <small className="text-muted">Category: {product.category.name}</small>
        <small className="text-muted">
          Tags:{" "}
          {product.tags
            .map((tag) => tag.name)
            .join(", ")
            .replace(/,([^,]*)$/, "$1")}
        </small>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <small className="text-muted">Ratings</small>
        <small className="text-muted">
          Posted {dayjs(product.createdAt).fromNow()}
        </small>
      </div>
    </div>
  );
}
```

## Blog Single View Page

```js
// app/product/[slug]/page
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import ProductImage from "@/components/product/ProductImage";

dayjs.extend(relativeTime);

async function getProducts(slug) {
  try {
    const response = await fetch(`${process.env.API}/product/${slug}`, {
      method: "GET",
      next: { revalidate: 1 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function ProductViewPage({ params }) {
  const product = await getProducts(params.slug);

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-lg-8 mb-4">
          <div className="card">
            {/* images and preview modal */}
            <ProductImage product={product} />

            {/* card body */}
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <div className="card-text">
                <div
                  dangerouslySetInnerHTML={{
                    __html: product.description,
                  }}
                ></div>
              </div>
            </div>

            <div className="card-footer d-flex justify-content-between">
              <small className="text-muted">
                Category: {product.category.name}
              </small>
              <small className="text-muted">
                Tags: {product.tags.map((tag) => tag.name).join(" ")}
              </small>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <small className="text-muted">Ratings</small>
              <small className="text-muted">
                Added {dayjs(product.createdAt).fromNow()}
              </small>
            </div>
          </div>
        </div>

        <div className="col-lg-4">Add to cart / wishlist</div>
      </div>

      <div className="row">
        <div className="col my-5">
          <p className="lead">Related products</p>
        </div>
      </div>
    </div>
  );
}
```

## Product Images and Preview Modal

```js
// components/product/ProductImage
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useProduct } from "@/context/product";

export default function ProductImage({ product }) {
  const { showImagePreviewModal, setShowImagePreviewModal } = useProduct();
  const [currentImagePreviewUrl, setCurrentImagePreviewUrl] = useState("");

  const openModal = (url) => {
    setCurrentImagePreviewUrl(url);
    setShowImagePreviewModal(true);
  };

  const closeModal = () => {
    setShowImagePreviewModal(false);
  };

  useEffect(() => {
    // close modal on clicks on the page
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("modal")) {
      closeModal();
    }
  };

  const showImage = (src, alt) => (
    <Image
      src={src}
      className="card-img-top pointer"
      width={500}
      height={300}
      style={{ objectFit: "cover", height: "100%", width: "100%" }}
      alt={alt}
    />
  );

  return (
    <>
      {showImagePreviewModal && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            style={{ maxHeight: "90vh" }} // Set the maximum height of the modal
          >
            <div
              className="modal-content"
              style={{ height: "90%", width: "90%" }}
            >
              <div
                className="modal-body"
                style={{
                  height: "calc(100% - 60px)",
                  display: "flex",
                  alignItems: "center",
                  overflowY: "auto",
                }}
              >
                {showImage(currentImagePreviewUrl, product.title)}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="d-flex justify-content-center align-items-center">
        {product?.images?.length > 0 ? (
          product.images.map((image, index) => (
            <div
              key={image.public_id}
              style={{ height: "350px", overflow: "hidden", cursor: "pointer" }}
              onClick={() => openModal(image.secure_url)}
            >
              {showImage(image.secure_url, product.title)}
            </div>
          ))
        ) : (
          <div
            style={{ height: "350px", overflow: "hidden", cursor: "pointer" }}
            onClick={() => openModal("/images/new-wave.jpeg")}
          >
            {showImage("/images/new-wave.jpeg", product.title)}
          </div>
        )}
      </div>
    </>
  );
}
```

## Product Like API

```js
// api/user/product/like/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import { getToken } from "next-auth/jwt";

export async function PUT(req) {
  await dbConnect();

  const _req = await req.json();

  const { productId } = _req;
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  try {
    const updated = await Product.findByIdAndUpdate(
      productId,
      { $addToSet: { likes: token.user._id } },
      { new: true }
    );

    return NextResponse.json(updated);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}
```

## Product Unlike API

```js
// api/user/product/unlike/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import { getToken } from "next-auth/jwt";

export async function PUT(req) {
  await dbConnect();

  const _req = await req.json();

  const { productId } = _req;
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  try {
    const updated = await Product.findByIdAndUpdate(
      productId,
      { $pull: { likes: token.user._id } },
      { new: true }
    );

    return NextResponse.json(updated);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}
```

## User Liked Products API

```js
// api/user/product/liked/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import { getToken } from "next-auth/jwt";

export async function GET(req) {
  await dbConnect();

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  // console.log("token in user liked-products => ", token);

  try {
    const likedProducts = await Product.find({ likes: token.user._id });

    return NextResponse.json(likedProducts);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}
```

## User Product Like Unlike Component

```js
// components/product/ProductLike
"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter, usePathname } from "next/navigation";

export default function ProductLike({ product }) {
  const { data, status } = useSession();
  // console.log("product", product);
  const [likes, setLikes] = useState(product?.likes);

  const router = useRouter();
  const pathname = usePathname();

  const isLiked = likes?.includes(data?.user?._id);

  const handleLike = async () => {
    if (status !== "authenticated") {
      toast.error("Please login to like");
      router.push(
        `/login?callbackUrl=${process.env.API.replace("/api", "")}${pathname}`
      );

      return;
    }
    try {
      if (isLiked) {
        const answer = window.confirm("You liked it. Want to unlike?");
        if (answer) {
          handleUnlike();
        }
      } else {
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: product._id,
          }),
        };

        const response = await fetch(
          `${process.env.API}/user/product/like`,
          options
        );
        if (!response.ok) {
          throw new Error(
            `Failed to like: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        // console.log("product liked response => ", data);
        setLikes(data.likes);
        toast.success("Product liked");
        router.refresh(); // only works in server components
      }
    } catch (err) {
      console.log(err);
      toast.error("Error liking product");
    }
  };

  const handleUnlike = async () => {
    try {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product._id,
        }),
      };

      const response = await fetch(
        `${process.env.API}/user/product/unlike`,
        options
      );
      if (!response.ok) {
        throw new Error(`Failed to unlike`);
      }

      const data = await response.json();
      // console.log("product unliked response => ", data);
      setLikes(data.likes);
      toast.success("Product unliked");
      router.refresh();
    } catch (err) {
      console.log(err);
      toast.error("Error unliking product");
    }
  };

  // 🖤

  return (
    <small className="text-muted pointer">
      {!likes?.length ? (
        <span onClick={handleLike}>❤️ Be the first person to like</span>
      ) : (
        <span onClick={handleLike}>❤️ {likes?.length} people liked</span>
      )}
    </small>
  );
}
```

## 5 star rating system

```js
// context/product
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);
  const [comment, setComment] = useState("");

  // modal for image preview and ratings
  const openImagePreviewModal = (url) => {
    setCurrentImagePreviewUrl(url);
    setShowImagePreviewModal(true);
  };

  const closeModal = () => {
    setShowImagePreviewModal(false);
    setShowRatingModal(false);
  };

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("modal")) {
      closeModal();
    }
  };

  // components/Modal
  "use client";
import { useProduct } from "@/context/product";

export default function Modal({ children }) {
  // context
  const { closeModal } = useProduct();

  return (
    <>
      <div
        className="modal fade show"
        style={{ display: "block", maxHeight: "100vh", overflow: "auto" }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


// component/product/Stars
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function Stars({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      // push all gold stars
      stars.push(<FaStar key={i} className="text-danger" />);
    } else if (i === Math.ceil(rating) && rating % 1 >= 0.5) {
      // push half gold star if any
      stars.push(<FaStarHalfAlt key={i} className="text-danger" />);
    } else {
      // push empty star
      stars.push(<FaRegStar key={i} />);
    }
  }

  return <>{stars}</>;
}



// utils/helpers
export function calculateAverageRating(ratings) {
  let totalRating = 0;
  for (const ratingObj of ratings) {
    totalRating += ratingObj.rating;
  }
  const averageRating = totalRating / ratings.length;
  return averageRating;
}

// components/product/ProductRating
"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter, usePathname } from "next/navigation";
import { useProduct } from "@/context/product";
import Modal from "@/components/Modal";
import Stars from "@/components/product/Stars";
import { calculateAverageRating } from "@/utils/helpers";

export default function ProductRating({ product, leaveReview = true }) {
  // context
  const {
    showRatingModal,
    setShowRatingModal,
    currentRating,
    setCurrentRating,
    comment,
    setComment,
  } = useProduct();
  // to show the product average rating
  const [productRatings, setProductRatings] = useState(product?.ratings || []);
  const [averageRating, setAverageRating] = useState(0);
  // console.log("average product ratings => ", productRatings);

  const { data, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  // did current user already left a rating
  const alreadyRated = productRatings?.find(
    (rate) => rate?.postedBy._id === data?.user?._id
  );

  useEffect(() => {
    if (alreadyRated) {
      setCurrentRating(alreadyRated.rating);
      setComment(alreadyRated.comment);
    } else {
      setCurrentRating(0);
      setComment("");
    }
  }, [alreadyRated]);

  console.log("currentRating => ", currentRating);
  console.log("comment => ", comment);

  useEffect(() => {
    if (productRatings) {
      const average = calculateAverageRating(productRatings);
      setAverageRating(average);
    }
  }, [product?.ratings]);

  const submitRating = async () => {
    if (status !== "authenticated") {
      toast.error("Please login to leave a rating");
      router.push(
        `/login?callbackUrl=${process.env.API.replace("/api", "")}${pathname}`
      );

      return;
    }
    try {
      const response = await fetch(`${process.env.API}/user/product/rating`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product._id,
          rating: currentRating,
          comment,
        }),
      });
      if (!response.ok) {
        throw new Error(`Failed to leave a rating`);
      }

      const data = await response.json();
      setProductRatings(data.ratings);
      setShowRatingModal(false);
      console.log("product rating response => ", data);
      toast.success("You left a rating");
      router.refresh(); // only works in server components
    } catch (err) {
      console.log(err);
      toast.error("Error leaving a rating");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <small className="text-muted">
          <Stars rating={averageRating} /> (
          {productRatings?.length &&
            `In average ${averageRating} stars out of 5 from ${productRatings?.length} reviews`}
          )
        </small>

        {leaveReview && (
          <small className="text-muted pointer">
            <span className="pointer" onClick={(e) => setShowRatingModal(true)}>
              Leave a rating
            </span>
          </small>
        )}
      </div>

      {/* rating modal */}

      {showRatingModal && (
        <Modal>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Write a review"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

            <div className="pointer">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <span
                  key={ratingValue}
                  className={
                    ratingValue <= currentRating ? "star-active lead" : "lead"
                  }
                  onClick={() => setCurrentRating(ratingValue)}
                  role="img"
                  {/* aria-label={
                    ratingValue <= currentRating ? (
                      <FaStar className="text-danger" />
                    ) : (
                      <FaRegStar />
                    )
                  } */}
                >
                  {ratingValue <= currentRating ? "⭐" : "☆"}
                </span>
              );
            })}
          </div>

          <button
            onClick={submitRating}
            className="btn btn-primary btn-raised mt-3"
          >
            Submit
          </button>
        </Modal>
      )}
    </>
  );
}

// import <ProductRating /> in product/[slug]/page
  <div className="card-footer text-center">
    <ProductRating product={product} />
  </div>

// show rating in <ProductCard />
 <div className="card-footer">
    {/* <pre>{JSON.stringify(product?.ratings, null, 4)}</pre> */}
    <div className="d-flex justify-content-between align-items-center">
      <small className="text-muted">Brand: {product?.brand}</small>
      <div>
        <small>
          <Stars rating={calculateAverageRating(product?.ratings)} />
        </small>
        <small className="text-muted ml-1">
          {`(${product?.ratings?.length})`}
        </small>
      </div>
    </div>
  </div>

```

## Filtering products

```js
// products/page
const searchQuery = new URLSearchParams({
  page: searchParams?.page || 1,
  minPrice: searchParams?.minPrice || "",
  maxPrice: searchParams?.maxPrice || "",
  ratings: searchParams?.ratings || "",
  category: searchParams?.category || "",
  tag: searchParams?.tag || "",
  brand: searchParams?.brand || "",
}).toString();

<div className="col-lg-3">
  <ProductFilter searchParams={searchParams} />
</div>;

// component/product/ProductFilter.js
("use client");
import { useEffect, useState } from "react";
import Link from "next/link";
import { priceRanges } from "@/utils/filterData";
import Stars from "@/components/product/Stars";
import { useCategory } from "@/context/category";
import { useTag } from "@/context/tag";
import { useProduct } from "@/context/product";
import { useRouter } from "next/navigation";
import { FiX } from "react-icons/fi";

// page price ratings category tags brands

export default function ProductFilter({
  searchParams,
  pathname = "/products",
}) {
  const { minPrice, maxPrice, ratings, category, tag, brand } = searchParams;

  // context
  const { categories, fetchCategories } = useCategory();
  const { tags, fetchTags } = useTag();
  const { brands, fetchBrands } = useProduct();

  const router = useRouter();

  useEffect(() => {
    fetchCategories();
    fetchTags();
    fetchBrands();
  }, []);

  // classes
  const activeButton = "btn btn-sm btn-primary mx-1 border-20";
  const button = "btn btn-sm btn-secondary mx-1 border-20";

  const handleRemoveFilter = (filterName) => {
    const updatedSearchParams = { ...searchParams };
    delete updatedSearchParams[filterName];
    // Reset page to 1 when applying new filtering options
    updatedSearchParams.page = 1;

    const queryString = new URLSearchParams(updatedSearchParams).toString();
    const newUrl = `${pathname}?${queryString}`;

    router.push(newUrl);
  };

  return (
    <>
      <p className="lead">Filter Products</p>
      <Link href="/products" className="text-danger">
        Clear Filters
      </Link>

      <p className="text-primary mt-4 alert alert-secondary">Price</p>
      <div className="row d-flex align-items-center mx-1">
        {priceRanges.map((range) => {
          const url = {
            pathname,
            query: {
              ...searchParams,
              minPrice: range.min,
              maxPrice: range.max,
              page: 1,
            },
          };

          const isActive =
            minPrice === String(range.min) && maxPrice === String(range.max);

          return (
            <>
              <Link
                className={isActive ? activeButton : button}
                key={range.label}
                href={url}
                as={url}
              >
                {range.label}
              </Link>
              {isActive && (
                <FiX
                  className="pointer lead text-danger mb-1"
                  onClick={() => handleRemoveFilter("minPrice", "maxPrice")}
                />
              )}
            </>
          );
        })}
      </div>

      <p className="text-primary mt-4 alert alert-secondary">Ratings</p>
      <div className="row d-flex align-items-center mx-1">
        {[5, 4, 3, 2, 1].map((ratingValue) => {
          const isActive = String(ratings) === String(ratingValue); // Compare as strings

          const url = {
            pathname,
            query: {
              ...searchParams,
              ratings: isActive ? undefined : ratingValue, // Clear if already active
              page: 1,
            },
          };
          return (
            <div key={ratingValue} className="d-flex align-items-center">
              <Link
                href={url}
                as={url}
                className={isActive ? activeButton : button}
              >
                <Stars rating={ratingValue} />
              </Link>
              {isActive && (
                <FiX
                  className="pointer lead text-danger mb-1"
                  onClick={() => handleRemoveFilter("ratings")}
                />
              )}
            </div>
          );
        })}
      </div>

      <p className="text-primary mt-4 alert alert-secondary">Categories</p>
      <div className="row d-flex align-items-center filter-scroll mx-1">
        {categories?.map((c) => {
          const isActive = category === c._id;

          const url = {
            pathname,
            query: {
              ...searchParams,
              category: c._id,
              page: 1,
            },
          };
          return (
            <>
              <Link
                className={isActive ? activeButton : button}
                key={c._id}
                href={url}
                as={url}
              >
                {c.name}
              </Link>
              {isActive && (
                <FiX
                  className="pointer lead text-danger mb-1"
                  onClick={() => handleRemoveFilter("category")}
                />
              )}
            </>
          );
        })}
      </div>

      {category && (
        <>
          <p className="text-primary mt-4 alert alert-secondary">Tags</p>
          <div className="row d-flex align-items-center filter-scroll mx-1">
            {tags
              .filter((t) => t.parent && t.parent === category)
              ?.map((t) => {
                const url = {
                  pathname,
                  query: {
                    ...searchParams,
                    tag: t._id,
                    page: 1,
                  },
                };

                const isActive = tag === t._id;

                return (
                  <>
                    <Link
                      className={isActive ? activeButton : button}
                      key={t._id}
                      href={url}
                      as={url}
                    >
                      {t.name}
                    </Link>
                    {isActive && (
                      <FiX
                        className="pointer lead text-danger mb-1"
                        onClick={() => handleRemoveFilter("tag")}
                      />
                    )}
                  </>
                );
              })}
          </div>
        </>
      )}

      <p className="text-primary mt-4 alert alert-secondary">Brands</p>
      <div className="row d-flex align-items-center filter-scroll mx-1">
        {brands?.map((b) => {
          const url = {
            pathname,
            query: {
              ...searchParams,
              brand: b,
              page: 1,
            },
          };

          const isActive = brand === b;

          return (
            <>
              <Link
                className={isActive ? activeButton : button}
                key={b}
                href={url}
                as={url}
              >
                {b}
              </Link>
              {isActive && (
                <FiX
                  className="pointer lead text-danger mb-1"
                  onClick={() => handleRemoveFilter("brand")}
                />
              )}
            </>
          );
        })}
      </div>
    </>
  );
}
```

## Product search (text based)

```js
// context/product

// text search
const [productSearchQuery, setProductSearchQuery] = useState("");
const [productSearchResults, setProductSearchResults] = useState([]);

const fetchProductSearchResults = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(
      `${process.env.API}/search/products?productSearchQuery=${productSearchQuery}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setProductSearchResults(data);
    // console.log("search results => ", data);
    router.push(`/search/products?productSearchQuery=${productSearchQuery}`);
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
};

// TopNav
const { productSearchQuery, setProductSearchQuery, fetchProductSearchResults } =
  useProduct();

<form
  className="d-flex mx-2"
  role="search"
  onSubmit={fetchProductSearchResults}
>
  <input
    className="form-control"
    type="search"
    placeholder="Search products"
    aria-label="Search"
    onChange={(e) => setProductSearchQuery(e.target.value)}
    value={productSearchQuery}
  />
  <button className="btn" type="submit" style={{ borderRadius: "20px" }}>
    &#128270;
  </button>
</form>;

// api/search/products/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import Category from "@/models/category"; // Import the Category model
import Tag from "@/models/tag"; // Import the Tag model
import queryString from "query-string";

export async function GET(req) {
  await dbConnect();

  const { productSearchQuery } = queryString.parseUrl(req.url).query;

  try {
    // Search for categories and tags based on the productSearchQuery
    const [categories, tags] = await Promise.all([
      Category.find({ name: { $regex: productSearchQuery, $options: "i" } }),
      Tag.find({ name: { $regex: productSearchQuery, $options: "i" } }),
    ]);

    const categoryIds = categories.map((category) => category._id);
    const tagIds = tags.map((tag) => tag._id);

    // Main product search query
    const products = await Product.find({
      $or: [
        { title: { $regex: productSearchQuery, $options: "i" } },
        { description: { $regex: productSearchQuery, $options: "i" } },
        { brand: { $regex: productSearchQuery, $options: "i" } },
        { category: { $in: categoryIds } }, // Search for products with matching category IDs
        { tags: { $in: tagIds } }, // Search for products with matching tag IDs
      ],
    })
      .populate("category", "name")
      .populate("tags", "name")
      .sort({ createdAt: -1 });

    return NextResponse.json(products);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}

// app/search/products/page
("use client");
import { useEffect } from "react";
import ProductList from "@/components/product/ProductList";
import { useSearchParams } from "next/navigation";
import { useProduct } from "@/context/product";

export default function ProductsSearchPage() {
  // context
  const {
    setProductSearchQuery,
    productSearchResults,
    setProductSearchResults,
  } = useProduct();
  // console.log("searchQuery in search page =====> ", searchQuery);

  const productSearchParams = useSearchParams();
  const query = productSearchParams.get("productSearchQuery");

  // to fetch results on page load based on query
  useEffect(() => {
    if (query) {
      console.log(
        "Got search params in search page => ",
        productSearchParams.get("productSearchQuery")
      );
      setProductSearchQuery(query);
      fetchProductResultsOnLoad(query);
    }
  }, [query]);

  const fetchProductResultsOnLoad = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/search/products?productSearchQuery=${query}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setProductSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p>Search result {productSearchResults?.length}</p>
          {/* <pre>{JSON.stringify(searchResults, null, 4)}</pre> */}
          {productSearchResults ? (
            <ProductList products={productSearchResults} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
```

## Show Reviews Comments

```js
// product/[slug]/page
<div className="row">
  <div className="col my-5">
    <UserReviews reviews={product?.ratings} />
  </div>
</div>

// components/product/UserReviews
import RatingDistribution from "@/components/product/RatingDistribution";
import Stars from "@/components/product/Stars";

export default function UserReviews({ reviews }) {
  return (
    <>
      {reviews?.length > 0 ? (
        <div>
          <RatingDistribution reviews={reviews} />

          {/* List of user reviews */}
          <ul className="list-group mt-4 bg-white">
            {reviews.map((review) => (
              <li
                className="list-group-item mb-1"
                key={review._id}
              >
                <div>
                  <p>
                    <strong>{review.postedBy.name}</strong>
                  </p>
                  <Stars rating={review.rating} />
                  {review?.comment && <p className="mt-3">{review.comment}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No reviews yet.</p>
      )}
    </>
  );
}

// components/product/RatingDistribution
import { FaStar, FaRegStar } from "react-icons/fa";
import { calculateAverageRating } from "@/utils/helpers";
import Stars from "@/components/product/Stars";

export default function RatingDistribution({ reviews }) {
  // Calculate rating distribution and total number of reviews
  const distribution = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };
  let totalReviews = 0;

  reviews.forEach((review) => {
    // distribution[index]: ++
    distribution[review.rating]++;
    totalReviews++;
  });

  // Calculate percentage and generate rating icons
  const ratingIcons = Object.keys(distribution).map((rating) => {
    const count = distribution[rating]; // how maany reviews
    let percentage = ((count / totalReviews) * 100).toFixed(2);
    percentage =
      parseFloat(percentage) === parseInt(percentage)
        ? parseInt(percentage)
        : percentage;

    const starIcons = Array.from({ length: parseInt(rating) }, (_, index) => (
      <FaStar key={index} className="text-danger" />
    ));
    const emptyStarIcons = Array.from(
      { length: 5 - parseInt(rating) },
      (_, index) => <FaRegStar key={index} />
    );

    return (
      <div
        key={rating}
        className="d-flex justify-content-between align-items-center"
      >
        <div className="progress col-6 p-0 m-0 mt-1" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-secondary"
            role="progressbar"
            style={{ width: `${percentage}%` }}
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <div className="col-6">
          {starIcons} {emptyStarIcons} {percentage}%
        </div>
      </div>
    );
  });

  return (
    <div className="row">
      <div className="col-3 d-flex align-items-center">
        <div className="text-center">
          <p className="display-2 mb-0">
            <strong>{calculateAverageRating(reviews)?.toFixed(1)}</strong>
          </p>
          <Stars rating={calculateAverageRating(reviews)} />
          <p>Product Rating</p>
        </div>
      </div>
      <div className="col-9">{ratingIcons.reverse()}</div>
    </div>
  );
}
```

## Products metadata

```js
// products page
export const metadata = {
  title: "Next Ecommerce",
  description: "Find the latest in fashion, electronics and more",
};

// products single view page
export async function generateMetadata({ params }) {
  const product = await getProduct(params.slug);
  return {
    title: product?.title,
    description: product?.description?.substr(0, 160),
  };
}
```

## Add to cart

```js
// context/cart
import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from local storage on component mount
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  // Save cart items to local storage whenever cartItems state changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity) => {
    const existingProduct = cartItems.find((item) => item._id === product._id);

    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const updateQuantity = (product, quantity) => {
    const updatedItems = cartItems.map((item) =>
      item._id === product._id ? { ...item, quantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item._id !== productId);
    setCartItems(updatedCartItems);

    // Update local storage
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    }
  };

  // Provide cart items and functions to the rest of the app
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);


// components/products/AddToCart
"use client";
import { useState, useEffect } from "react";
import { useCart } from "@/context/cart";
import Link from "next/link";

export default function AddToCart({ product }) {
  const { addToCart, updateQuantity, cartItems, removeFromCart } = useCart();

  // Find the product in cartItems, if it exists
  const existingProduct = cartItems.find((item) => item._id === product._id);
  const initialQuantity = existingProduct ? existingProduct.quantity : 1;

  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    // Update quantity state if the product's quantity changes in cartItems
    setQuantity(existingProduct ? existingProduct.quantity : 1);
  }, [existingProduct]);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(product, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(product, newQuantity);
    } else {
      // If quantity becomes 0, remove the item from the cart
      removeFromCart(product._id);
      setQuantity(1); // Reset quantity to 1 after removing from cart
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div>
      {cartItems.some((item) => item._id === product._id) ? (
        <>
          <div className="input-group quantity-input">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleDecrement}
              >
                -
              </button>
            </div>
            <input
              type="number"
              className="form-control no-spin-arrows mx-5 text-center"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>

          <Link
            className="btn btn-outline-danger btn-raised btn-block mt-2"
            href="/cart"
          >
            Review & Checkout
          </Link>
        </>
      ) : (
        <button
          className="btn btn-danger btn-raised btn-block"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}


// TopNav
<Link className="nav-link text-danger" href="/cart">
  <BsFillCartCheckFill size={25} /> {cartItems?.length}
</Link>


// cart page
// 3 step checkout
"use client";
import { useState } from "react";

export default function Cart() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && <Step1 onNextStep={handleNextStep} />}
      {step === 2 && (
        <Step2 onNextStep={handleNextStep} onPrevStep={handlePrevStep} />
      )}
      {step === 3 && <Step3 onPrevStep={handlePrevStep} />}
    </div>
  );
}

function Step1({ onNextStep }) {
  return (
    <div>
      Review cart
      <button onClick={onNextStep}>Next</button>
    </div>
  );
}

function Step2({ onNextStep, onPrevStep }) {
  return (
    <div>
      Contact details
      <button onClick={onPrevStep}>Previous</button>
      <button onClick={onNextStep}>Next</button>
    </div>
  );
}

function Step3({ onPrevStep }) {
  return (
    <div>
      Payment
      <button onClick={onPrevStep}>Previous</button>
      <button>Place Order</button>
    </div>
  );
}
```

## Cart page

```js
// app/cart/page
"use client";
import { useState } from "react";
import Link from "next/link";
import { GoCheckCircleFill } from "react-icons/go";
import Step1 from "@/components/product/cart/Step1";
import Step2 from "@/components/product/cart/Step2";
import Step3 from "@/components/product/cart/Step3";
import { useCart } from "@/context/cart";

export default function Cart() {
  // context
  const { cartItems } = useCart();

  // state
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const tickIcon = (stepNumber) => {
    return step === stepNumber ? (
      <GoCheckCircleFill className="mb-1 text-danger" />
    ) : null;
  };

  if (!cartItems?.length)
    return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <p className="lead">Your cart is empty!</p>
          <Link className="btn btn-lg btn-primary btn-raised" href="/products">
            Continue Shopping
          </Link>
        </div>
      </div>
    );

  return (
    <div>
      <div className="col-lg-6 offset-lg-3 my-5">
        <div className="d-flex justify-content-between lead">
          <div>{tickIcon(1)} Review Cart</div>
          <div>{tickIcon(2)} Contact Details</div>
          <div>{tickIcon(3)} Payment</div>
        </div>
      </div>

      {step === 1 && <Step1 onNextStep={handleNextStep} />}
      {step === 2 && (
        <Step2 onNextStep={handleNextStep} onPrevStep={handlePrevStep} />
      )}
      {step === 3 && <Step3 onPrevStep={handlePrevStep} />}
    </div>
  );
}

// components/product/cart/Step1
import { useCart } from "@/context/cart";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "@/components/product/AddToCart";
import OrderSummary from "@/components/product/cart/OrderSummary";

export default function Step1({ onNextStep }) {
  const { cartItems } = useCart();

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <p className="alert alert-primary">Review Cart / Adjust Quantity</p>

          {cartItems?.map((product) => (
            <div className="card mb-3" key={product._id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <Image
                      src={
                        product?.images?.[0]?.secure_url ||
                        "/images/new-wave.jpeg"
                      }
                      className="card-img-top"
                      width={500}
                      height={300}
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%",
                      }}
                      alt={product?.title}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link
                        href={`/product/${product?.slug}`}
                        as={`/product/${product?.slug}`}
                      >
                        {product.title} [{product?.images?.length} 📸]
                      </Link>
                    </h5>
                    <h4>${product?.price.toFixed(2)}</h4>
                    <div className="card-text">
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            product?.description?.length > 160
                              ? `${product?.description.substring(0, 160)}...`
                              : product?.description,
                        }}
                      />
                    </div>

                    <div className="mt-3">
                      <AddToCart product={product} reviewAndCheckout={false} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="d-flex justify-content-end my-4">
            <button
              className="btn btn-danger btn-raised col-6"
              onClick={onNextStep}
            >
              Next
            </button>
          </div>
        </div>

        <div className="col-lg-4">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

// components/product/cart/Step2
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import OrderSummary from "@/components/product/cart/OrderSummary";

// SKIP DELIVERY ADDRESS PART
// USE STRIPE CHECKOUT TO GRAB USER DELIVERY ADDRESS

export default function Step2({ onNextStep, onPrevStep }) {
  const { data, status, update } = useSession();
  // state
  const [deliveryAddress, setDeliveryAddress] = useState(
    data?.user?.deliveryAddress || ""
  );

  // update or confirm delivery address on next click
  const handleAddressThenNext = async () => {
    // update delivery address
    try {
      const response = await fetch(`${process.env.API}/user/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ deliveryAddress }),
      });

      if (!response.ok) {
        const data = await response.json();
        toast.error(data.err);
        return;
      } else {
        const data = await response.json();
        // console.log("address updated, update user session", data);
        update({ user: { ...data.user, deliveryAddress: data } });
        // take to next step
        onNextStep();
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("An error occurred. Please try again.");
    }
  };

  if (status !== "authenticated") {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="d-flex justify-content-end my-4">
              <button
                className="btn btn-outline-danger btn-raised col-6"
                onClick={onPrevStep}
              >
                Previous
              </button>

              <Link
                className="btn btn-primary btn-raised col-6"
                href={`/login?callbackUrl=${window.location.href}`}
              >
                Login to Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <p className="alert alert-primary">Contact Details / Login</p>

          <div>
            <input
              type="text"
              value={data?.user?.name}
              className="form-control mb-2 px-2"
              placeholder="Your name"
              disabled
            />
            <input
              type="email"
              value={data?.user?.email}
              className="form-control mb-2 px-2"
              placeholder="Your email"
              disabled
            />

            {/* delivery address */}
            <textarea
              maxLength="320"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              className="form-control mb-2 px-2 mt-4"
              placeholder="Enter your delivery address"
              rows="5"
            />

            {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
          </div>

          <div className="d-flex justify-content-end my-4">
            <button
              className="btn btn-outline-danger btn-raised col-6"
              onClick={onPrevStep}
            >
              Previous
            </button>

            <button
              className="btn btn-danger btn-raised col-6"
              onClick={handleAddressThenNext}
              disabled={!deliveryAddress.trim()}
            >
              Next
            </button>
          </div>
        </div>

        <div className="col-lg-4">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

// components/product/cart/Step3
import { useState } from "react";
import { useCart } from "@/context/cart";
import OrderSummary from "@/components/product/cart/OrderSummary";
import toast from "react-hot-toast";

export default function Step3({ onPrevStep }) {
  const { cartItems } = useCart();
  // state
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);

      const cartData = cartItems.map((item) => ({
        _id: item._id,
        quantity: item.quantity,
      }));

      const response = await fetch(`${process.env.API}/user/stripe/session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartItems: cartData,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // console.log("checkout session response data", data);
        window.location.href = data.url;
      } else {
        const errorData = await response.json();
        toast.error(errorData.err);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      toast.error("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <p className="alert alert-primary">Payment Method</p>

          <h2 className="text-center">🔒 💳</h2>

          <p className="alert alert-danger">
            Flat rate $5 shipping fee will apply for all orders Australia wide!
          </p>

          <p className="lead card p-5 bg-secondary text-light">
            Clicking 'Place Order' will securely redirect you to our trusted
            payment partner, Stripe to complete your checkout. Your payment
            information is fully protected and encrypted for your security.
          </p>

          <div className="d-flex justify-content-end my-4">
            <button
              className="btn btn-outline-danger btn-raised col-6"
              onClick={onPrevStep}
            >
              Previous
            </button>

            {/* trigger stripe payment on this button click */}
            <button
              className="btn btn-success btn-raised col-6"
              onClick={handleClick}
              disabled={loading}
            >
              {loading ? "Processing ..." : "Place Order"}
            </button>
          </div>
        </div>

        <div className="col-lg-4">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

// components/product/cart/OrderSummary
import React from "react";
import { useCart } from "@/context/cart";
import Image from "next/image";

export default function OrderSummary() {
  const { cartItems } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const itemOrItems = totalItems === 1 ? "item" : "items";

  return (
    <div>
      <p className="alert alert-primary">Order Summary</p>
      <ul className="list-unstyled">
        {cartItems?.map((product) => (
          <div className="card mb-3" key={product._id}>
            <div className="row g-0 d-flex align-items-center p-1">
              <div className="col-md-3">
                <div style={{ height: "66px", overflow: "hidden" }}>
                  <Image
                    src={
                      product?.images?.[0]?.secure_url ||
                      "/images/new-wave.jpeg"
                    }
                    className="card-img-top"
                    width={500}
                    height={300}
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                    alt={product?.title}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <p className="card-title text-secondary">{product.title}</p>
              </div>
              <div className="col-md-3">
                <p className="h6">${product?.price.toFixed(2)}</p>
                <p className="text-secondary">Qty: {product?.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </ul>
      <div className="d-flex justify-content-between p-1">
        <p>
          Total {totalItems} {itemOrItems}:
        </p>
        <p className="h4">${calculateTotal().toFixed(2)}</p>
      </div>
    </div>
  );
}

// Optional!
// update user profile/delivery address
// api/user/profile/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/user";
import { getToken } from "next-auth/jwt";

export async function PUT(req) {
  await dbConnect();

  const _req = await req.json();

  const { deliveryAddress } = _req;
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  try {
    const updated = await User.findByIdAndUpdate(
      token.user._id,
      { deliveryAddress },
      { new: true }
    );

    return NextResponse.json(updated);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}

// several updates need to adjust shipping, tax and coupons
// change based on product _id quantity and auto tax
// api/user/stripe/session/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import { getToken } from "next-auth/jwt";
import Product from "@/models/product";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// create checkout session
// https://stripe.com/docs/api/checkout/sessions/create?lang=node

export async function POST(req) {
  await dbConnect();
  const _req = await req.json();
  console.log("_req in stripe checkout session api", _req);

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  try {
    const lineItems = await Promise.all(
      _req.cartItems.map(async (item) => {
        const product = await Product.findById(item._id); // Fetch product details from the database
        const unitAmount = product.price * 100; // Stripe expects the amount in cents
        return {
          price_data: {
            currency: "aud",
            product_data: {
              name: product.title,
              images: [product.images[0].secure_url],
            },
            unit_amount: unitAmount,
          },
          tax_rates: [process.env.STRIPE_TAX_RATE],
          quantity: item.quantity,
        };
      })
    );

    const session = await stripe.checkout.sessions.create({
      success_url: `${process.env.DOMAIN}/dashboard/user/stripe/success`,
      client_reference_id: token?.user?._id,
      line_items: lineItems,
      mode: "payment",
      // https://stripe.com/docs/api/payment_methods/create
      payment_method_types: ["card"],
      // search tax in dashboard under "Pricing catalog"
      // https://dashboard.stripe.com/test/settings/tax
      payment_intent_data: {
        metadata: {
          cartItems: JSON.stringify(_req.cartItems), // Store cart items as metadata
          userId: token?.user?._id,
        },
      },
      shipping_options: [
        {
          shipping_rate: process.env.STRIPE_SHIPPING_RATE,
        },
      ],
      shipping_address_collection: {
        allowed_countries: ["AU"], // Only allow shipping to Australia
      },
      // fR6Qwywx
      discounts: [
        {
          coupon: _req.couponCode, // Replace with your coupon code
        },
      ],
      customer_email: token.user.email, // pre-populate customer email in checkout page
    });

    return NextResponse.json(session);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}

```

## Create Order with Stripe Webhook

Log in to your Stripe account.
Go to "Developers" > "Webhooks" in the left sidebar.

```
stripe login
stripe listen --forward-to localhost:3000/api/webhook
use the webhook secret in your code

```

Now try checkout, keep an eye on terminal

https://stripe.com/docs/payments/checkout/fulfill-orders

```js
// api/webhook/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Order from "@/models/order";
import Product from "@/models/product";

// https://github.com/shadcn-ui/taxonomy

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  await dbConnect();

  const _raw = await req.text();
  const sig = req.headers.get("stripe-signature");

  try {
    // Construct the event using the Stripe SDK
    const event = stripe.webhooks.constructEvent(
      _raw,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    // console.log("event => ", event);

    // Handle the event
    switch (event.type) {
      case "charge.succeeded":
        const chargeSucceeded = event.data.object;
        // console.log("chargeSucceeded => ", chargeSucceeded);

        const { id, ...rest } = chargeSucceeded;

        // decrement stock
        // const cartItems = JSON.parse(chargeSucceeded.metadata.cartItems);
        // for (const cartItem of cartItems) {
        //   const product = await Product.findById(cartItem._id);
        //   if (product) {
        //     product.stock -= cartItem.quantity;
        //     await product.save();
        //   }
        // }

        // await Order.create({
        //   ...rest,
        //   chargeId: id,
        //   userId: chargeSucceeded.metadata.userId,
        //   cartItems,
        // });
        // console.log("order created => ", order);

        // decrement stock and gather product IDs
        const cartItems = JSON.parse(chargeSucceeded.metadata.cartItems);
        const productIds = cartItems.map((cartItem) => cartItem._id);

        // Fetch all products in one query
        const products = await Product.find({ _id: { $in: productIds } });

        // Create an object to quickly map product details by ID
        const productMap = {};
        products.forEach((product) => {
          productMap[product._id.toString()] = {
            _id: product._id,
            title: product.title,
            slug: product.slug,
            price: product.price,
            image: product.images[0]?.secure_url || "",
          };
        });

        // Create cartItems with product details
        const cartItemsWithProductDetails = cartItems.map((cartItem) => ({
          ...productMap[cartItem._id],
          quantity: cartItem.quantity,
        }));

        // console.log(
        //   "cartItemsWithProductDetails =================***=> ",
        //   cartItemsWithProductDetails
        // );

        // Create order
        const orderData = {
          ...rest,
          chargeId: id,
          userId: chargeSucceeded.metadata.userId,
          cartItems: cartItemsWithProductDetails,
        };
        await Order.create(orderData);

        // Decrement product stock
        for (const cartItem of cartItems) {
          const product = await Product.findById(cartItem._id);
          if (product) {
            product.stock -= cartItem.quantity;
            await product.save();
          }
        }

        return NextResponse.json({ ok: true });

      // break;
      // ... handle other event types
      // default:
      //   console.log(`Unhandled event type ${event.type}`);
    }
  } catch (err) {
    console.log("*******err********", err);
    return NextResponse.json(`Webhook Error: ${err.message}`, { status: 400 });
  }
}

//   const {
//     id, // chargeId
//     payment_intent,
//     receipt_url,
//     refunded,
//     status,
//     amount_captured,
//     currency,
//     shipping,
//   } = event.data.object;
```

## Order model

```js
// models/order
import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // Reference to the Product model
  },
  title: String, // Add fields you need from the product
  slug: String,
  price: Number,
  image: String,
  quantity: Number,
});

const orderSchema = new mongoose.Schema({
  chargeId: String,
  payment_intent: String,
  receipt_url: String,
  refunded: Boolean,
  status: String,
  amount_captured: Number,
  currency: String,
  shipping: {
    address: {
      city: String,
      country: String,
      line1: String,
      line2: String,
      postal_code: String,
      state: String,
    },
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  cartItems: [cartItemSchema],
  delivery_status: {
    type: String,
    default: "Not Processed",
    enum: [
      "Not Processed",
      "processing",
      "Dispatched",
      "Refunded",
      "Cancelled",
      "Delivered",
    ],
  },
});

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
```

## Coupon

```js
// context/cart
const [couponCode, setCouponCode] = useState("");
const [percentOff, setPercentOff] = useState(0);
const [validCoupon, setValidCoupon] = useState(false);

const handleCoupon = async (coupon) => {
  // apply coupon
  try {
    const response = await fetch(`${process.env.API}/stripe/coupon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ couponCode: coupon }),
    });

    if (!response.ok) {
      // const data = await response.json();
      // toast.error("Invalid coupon code");
      setPercentOff(0);
      setValidCoupon(false);
      return;
    } else {
      const data = await response.json();
      setPercentOff(data.percent_off);
      setValidCoupon(true);
      console.log("coupon code applied => ", data);
      toast.success(`${data?.name} applied successfully`); // data.percent_off
      // if (cartItems?.length > 0) {
      //   toast.success(`${data?.name} applied successfully`); // data.percent_off
      // }
    }
  } catch (err) {
    console.log(err);
    setPercentOff(0);
    setValidCoupon(false);
    toast.error("An error occurred. Please try again.");
  }
};

// components/product/cart/Step2
const { couponCode, setCouponCode, handleCoupon } = useCart();

<button
  className="btn btn-success btn-raised"
  onClick={() => handleCoupon(couponCode)}
  disabled={!couponCode.trim()}
>
  Apply Coupon
</button>;
```

## Coupon code in product url

```js
// app/product/[slug]/page
// move price display to <CouponCode />
<CouponCode product={product} />;

// components/product/CouponCode
("use client");
import { useEffect } from "react";
import { useCart } from "@/context/cart";
import { useSearchParams } from "next/navigation";

export default function CouponCode({ product }) {
  const { handleCoupon, setCouponCode, percentOff, validCoupon } = useCart();

  const searchParams = useSearchParams();

  const code = searchParams.get("couponCode");

  // console.log("search params coupon => ", searchParams);
  useEffect(() => {
    if (code) {
      setCouponCode(code);
      handleCoupon(code);
    }
  }, [code]);

  return (
    <div className="d-flex justify-content-between align-items-center">
      {validCoupon ? (
        <del>
          <h4 className="text-danger">${product?.price?.toFixed(2)}</h4>
        </del>
      ) : (
        <h4>${product?.price?.toFixed(2)}</h4>
      )}
      {percentOff > 0 && (
        <h4 className="alert alert-danger">
          🔥 ${((product.price * (100 - percentOff)) / 100).toFixed(2)} (
          {percentOff}% discount coupon applied)
        </h4>
      )}

      {product?.previousPrice > product?.price && (
        <h4 className="text-danger">
          <del>${product?.previousPrice?.toFixed(2)}</del>
        </h4>
      )}
    </div>
  );
}

// components/product/cart/Step3
// send couponCode only if it's valid
const handleClick = async () => {
  // console.log("couponCode => ", couponCode, "validCoupon => ", validCoupon);
  // return;
  try {
    setLoading(true);

    let payload = {};

    const cartData = cartItems.map((item) => ({
      _id: item._id,
      quantity: item.quantity,
    }));

    payload.cartItems = cartData;
    if (validCoupon) {
      payload.couponCode = couponCode;
    }

    const response = await fetch(`${process.env.API}/user/stripe/session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data = await response.json();
      // console.log("checkout session response data", data);
      window.location.href = data.url;
    } else {
      const errorData = await response.json();
      toast.error(errorData.err);
      setLoading(false);
    }
  } catch (err) {
    console.log(err);
    toast.error("An error occurred. Please try again.");
    setLoading(false);
  }
};
```

## Sale price (previous price)

```js
// models/product
previousPrice: Number,

// components/product/admin/ProductCreate
{updatingProduct && (
  <div className="form-group">
    <input
      type="number"
      placeholder="Previous Price"
      min="1"
      name="previousPrice"
      className="form-control p-2 my-2"
      value={updatingProduct?.previousPrice}
      onChange={(e) => {
        setUpdatingProduct({
          ...updatingProduct,
          previousPrice: e.target.value,
        });
      }}
    />
  </div>
)}

// ProductCard
// app/product/[slug]/page
<div className="d-flex justify-content-between">
  <h4>${product?.price?.toFixed(2)}</h4>
  {product?.previousPrice > product?.price && (
    <h4 className="text-danger">
      <del>${product?.previousPrice?.toFixed(2)}</del>
    </h4>
  )}
</div>
```

## Orders for user

```js
// api/user/orders/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Order from "@/models/order";
import { currentUser } from "@/utils/currentUser";

export async function GET(req) {
  await dbConnect();

  try {
    const user = await currentUser(); // Get the current user asynchronously

    const orders = await Order.find({ userId: user._id }).sort({
      createdAt: -1,
    });

    return NextResponse.json(orders);
  } catch (err) {
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}


// app/dashboard/user/stripe/success/page
import Link from "next/link";

export default function UserStripeSuccess() {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <p>
            Thank your for your purchase. You can now check your order status in
            the dashboard
          </p>
          <hr />
          <Link
            className="btn btn-primary btn-raised"
            href="/dashboard/user/orders"
          >
            View Order Status
          </Link>
        </div>
      </div>
    </div>
  );
}

// app/dashboard/user/orders/page
// order info, total paid, receipt, cancle the order
"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function UserOrders() {
  const [orders, setOrders] = useState([]);

  const router = useRouter();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${process.env.API}/user/orders`, {
        method: "GET",
      });
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  const handleCancelOrder = async (orderId) => {
    try {
      const response = await fetch(
        `/api/user/orders/refund?orderId=${orderId}`,
        {
          method: "POST",
        }
      );
      const data = await response.json();

      fetchOrders();
      // router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <h4 className="text-center">Recent Orders</h4>

          {orders?.map((order) => (
            <div key={order?._id} className="mb-4 p-4 alert alert-secondary">
              <table className="table table-striped">
                <tbody>
                  {/* order info */}
                  <tr>
                    <th scope="row">Charge ID:</th>
                    <td>{order?.chargeId}</td>
                  </tr>
                  <tr>
                    <th scope="row">Created:</th>
                    <td>{new Date(order?.createdAt).toLocaleDateString()}</td>
                  </tr>
                  <tr>
                    <th scope="row">Payment Intent:</th>
                    <td>{order?.payment_intent}</td>
                  </tr>
                  <tr>
                    <th scope="row">Receipt:</th>
                    <td>
                      <a href={order?.receipt_url} target="_blank">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Refunded:</th>
                    <td>{order?.refunded ? "Yes" : "No"}</td>
                  </tr>
                  <tr>
                    <th scope="row">Status:</th>
                    <td>{order?.status}</td>
                  </tr>
                  <tr>
                    <th scope="row">Total Charged:</th>
                    <td>
                      ${(order?.amount_captured / 100)?.toFixed(2)}{" "}
                      {order?.currency}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Shipping Address:</th>
                    <td>
                      {order?.shipping?.address?.line1}
                      <br />
                      {order?.shipping?.address?.line2 &&
                        `${order?.shipping?.address?.line2}, `}
                      {order?.shipping?.address?.city},{" "}
                      {order?.shipping?.address?.state},{" "}
                      {order?.shipping?.address?.postal_code}
                      <br />
                      {order?.shipping?.address?.country}
                    </td>
                  </tr>
                  {/* products info */}
                  <tr>
                    <th scope="row" className="w-25">
                      Ordered Products:
                    </th>
                    <td className="w-75">
                      {order?.cartItems?.map((product) => (
                        <div
                          className="pointer text-primary"
                          key={product._id}
                          onClick={() =>
                            router.push(`/product/${product?.slug}`)
                          }
                        >
                          {product?.quantity} x {product?.title} $
                          {product?.price?.toFixed(2)} {order?.currency}
                        </div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Delivery Status:</th>
                    <td>
                      {order?.delivery_status}
                      {order?.delivery_status === "Not Processed" &&
                        !order.refunded && (
                          <>
                            <br />
                            <span
                              className="text-danger pointer"
                              onClick={() => handleCancelOrder(order?._id)}
                            >
                              Cancel the order
                            </span>
                          </>
                        )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// optional code refactoring
// components/cart/CartItem
// use this component in <Step1 /> component
import Image from "next/image";
import Link from "next/link";
import AddToCart from "@/components/product/AddToCart";

export default function CartItem({ product, addToCart = true, quantity }) {
  return (
    <>
      <div className="card mb-3" key={product._id}>
        <div className="row g-0">
          <div className="col-md-4">
            <div style={{ height: "200px", overflow: "hidden" }}>
              <Image
                src={
                  product?.images?.[0]?.secure_url || "/images/new-wave.jpeg"
                }
                className="card-img-top"
                width={500}
                height={300}
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
                alt={product?.title}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                <Link
                  href={`/product/${product?.slug}`}
                  as={`/product/${product?.slug}`}
                >
                  {product.title} {!addToCart && quantity && `x ${quantity}`}
                </Link>
              </h5>
              <h4>${product?.price.toFixed(2)}</h4>
              <div className="card-text">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      product?.description?.length > 160
                        ? `${product?.description.substring(0, 160)}...`
                        : product?.description,
                  }}
                />
              </div>

              {addToCart && (
                <div className="mt-3">
                  <AddToCart product={product} reviewAndCheckout={false} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
```

## On stripe success page, remove items from cart

```js
// cart context
const clearCart = () => {
  localStorage.removeItem("cartItems");
  setCartItems([]);
};

// stripe success page
// dashboard/user/stripe/success/page
("use client");
import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/cart";

export default function UserStripeSuccess() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <p>
            Thank your for your purchase. You can now check your order status in
            the dashboard
          </p>
          <hr />
          <Link
            className="btn btn-primary btn-raised"
            href="/dashboard/user/orders"
          >
            View Order Status
          </Link>
        </div>
      </div>
    </div>
  );
}
```

## When order is created decrement stock

```js
// webhook/route

// show low stock or out of stock
// utils/helpers
export const stockStatus = (stock) => {
  if (stock === 0) {
    return "Out of Stock";
  } else if (stock <= 10) {
    return "Low Stock";
  }
  return null;
};

// use in ProductCard and single product view
import { stockStatus } from "@/utils/helpers";

<div className="bg-warning text-center">{stockStatus(product?.stock)}</div>;
```

## User order refund/cancle api

```js
// if the order is still "Not Processed"
// also increment refunded products stock
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Order from "@/models/order";
import Product from "@/models/product";
import { currentUser } from "@/utils/currentUser";
import queryString from "query-string";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req, res) {
  await dbConnect();

  try {
    const user = await currentUser(); // Get the current user asynchronously

    // Get the order to refund
    const { orderId } = queryString.parseUrl(req.url).query;
    const order = await Order.findById(orderId);

    // Check if the order exists and belongs to the current user
    if (!order || order.userId.toString() !== user._id.toString()) {
      return NextResponse.json(
        { error: "Order not found or unauthorized" },
        { status: 404 }
      );
    }

    // Check if the order is still "Not Processed"
    if (order.delivery_status !== "Not Processed") {
      return NextResponse.json(
        { error: "Order cannot be refunded" },
        { status: 400 }
      );
    }

    // Make the refund request to Stripe
    const refund = await stripe.refunds.create({
      payment_intent: order.payment_intent, // Use the payment intent ID from your order
      reason: "requested_by_customer",
    });

    // Update the product quantities based on the refunded items
    for (const cartItem of order.cartItems) {
      const product = await Product.findById(cartItem._id);

      if (product) {
        product.stock += cartItem.quantity;
        await product.save();
      }
    }

    // Update the order in the database with refund details
    order.status = "Refunded";
    order.refunded = true;
    order.delivery_status = "Cancelled";
    order.refundId = refund.id; // Store the refund ID for reference
    await order.save();

    return NextResponse.json(
      { message: "Order refunded successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}
```

## Orders for admin

```js
// api/admin/orders/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Order from "@/models/order";
import queryString from "query-string";

export async function GET(req) {
  await dbConnect();

  const searchParams = queryString.parseUrl(req.url).query;
  console.log("searchParams in admin orders => ", searchParams.page);

  const { page } = searchParams || {};
  const pageSize = 3;

  try {
    const currentPage = Number(page) || 1;
    const skip = (currentPage - 1) * pageSize;
    const totalOrders = await Order.countDocuments({});

    const orders = await Order.find({})
      .populate("userId", "name")
      .skip(skip)
      .limit(pageSize)
      .sort({
        createdAt: -1,
      });

    return NextResponse.json(
      {
        orders,
        currentPage,
        totalPages: Math.ceil(totalOrders / pageSize),
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}

// api/admin/orders/[orderId]/page
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Order from "@/models/order";

export async function PUT(req, context) {
  await dbConnect();
  const body = await req.json();

  try {
    const order = await Order.findByIdAndUpdate(
      context.params.orderId,
      {
        delivery_status: body.delivery_status,
      },
      { new: true }
    );
    return NextResponse.json(order);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}

// dashboard/admin/orders/page
// with pagination
("use client");
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { usePathname, useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  console.log("current page => ", page);

  useEffect(() => {
    fetchOrders(page);
  }, [page]);

  const fetchOrders = async (page) => {
    try {
      const response = await fetch(
        `${process.env.API}/admin/orders?page=${page}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      // console.log("DATA in admin orders with pagination => ", data);
      setOrders(data.orders);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  const handleStatusChange = async (newStatus, orderId) => {
    try {
      const response = await fetch(
        `${process.env.API}/admin/orders/${orderId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ delivery_status: newStatus }),
        }
      );

      if (response.ok) {
        // Update the order's status locally if the request was successful
        setOrders((prevOrders) =>
          prevOrders.map((o) =>
            o._id === orderId ? { ...o, delivery_status: newStatus } : o
          )
        );
        toast.success("Order status updated successfully");
      } else {
        toast.error("Failed to update order status");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
      toast.error("An error occurred while updating order status");
    }
  };

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <h4 className="text-center">Recent Orders</h4>

          {orders?.map((order) => (
            <div key={order?._id} className="mb-4 p-4 alert alert-secondary">
              <table className="table table-striped">
                <tbody>
                  {/* order info */}
                  <tr>
                    <th scope="row">Customer Name:</th>
                    <td>{order?.userId?.name}</td>
                  </tr>
                  <tr>
                    <th scope="row">Charge ID:</th>
                    <td>{order?.chargeId}</td>
                  </tr>
                  <tr>
                    <th scope="row">Created:</th>
                    <td>{new Date(order?.createdAt).toLocaleDateString()}</td>
                  </tr>
                  <tr>
                    <th scope="row">Payment Intent:</th>
                    <td>{order?.payment_intent}</td>
                  </tr>
                  <tr>
                    <th scope="row">Receipt:</th>
                    <td>
                      <a href={order?.receipt_url} target="_blank">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Refunded:</th>
                    <td>{order?.refunded ? "Yes" : "No"}</td>
                  </tr>
                  <tr>
                    <th scope="row">Status:</th>
                    <td>{order?.status}</td>
                  </tr>
                  <tr>
                    <th scope="row">Total Charged:</th>
                    <td>
                      ${(order?.amount_captured / 100)?.toFixed(2)}{" "}
                      {order?.currency}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Shipping Address:</th>
                    <td>
                      {order?.shipping?.address?.line1}
                      <br />
                      {order?.shipping?.address?.line2 &&
                        `${order?.shipping?.address?.line2}, `}
                      {order?.shipping?.address?.city}, {
                        order?.shipping?.address?.state
                      }, {order?.shipping?.address?.postal_code}
                      <br />
                      {order?.shipping?.address?.country}
                    </td>
                  </tr>
                  {/* products info */}
                  <tr>
                    <th scope="row" className="w-25">
                      Ordered Products:
                    </th>
                    <td className="w-75">
                      {order?.cartItems?.map((product) => (
                        <div
                          className="pointer text-primary"
                          key={product._id}
                          onClick={() =>
                            router.push(`/product/${product?.slug}`)
                          }
                        >
                          {product?.quantity} x {product?.title} $
                          {product?.price?.toFixed(2)} {order?.currency}
                        </div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Delivery Status:</th>
                    <td>
                      <select
                        className="form-control"
                        onChange={(e) =>
                          handleStatusChange(e.target.value, order._id)
                        }
                        value={order?.delivery_status}
                        disabled={order?.refunded}
                      >
                        <option value="Not Processed">Not Processed</option>
                        <option value="processing">Processing</option>
                        <option value="Dispatched">Dispatched</option>
                        {order?.refunded && (
                          <option value="Cancelled">Cancelled</option>
                        )}
                        <option value="Delivered">Delivered</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pathname={pathname}
      />
    </div>
  );
}
```

Admin can manually issue refund or view receipt in stripe dashboard using payment intent [pi_xxx] id.

## Database Chart on Admin Dashboard

```js
// api/admin/chart/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import Category from "@/models/category";
import Tag from "@/models/tag";
import Order from "@/models/order";
import Blog from "@/models/blog";

export async function GET(req, context) {
  await dbConnect();

  try {
    const totalProducts = await Product.countDocuments();
    const totalOrders = await Order.countDocuments();
    const totalCategories = await Category.countDocuments();
    const totalTags = await Tag.countDocuments();
    const totalBlogs = await Blog.countDocuments();

    const data = [
      { label: "Products", count: totalProducts },
      { label: "Orders", count: totalOrders },
      { label: "Categories", count: totalCategories },
      { label: "Tags", count: totalTags },
      { label: "Blogs", count: totalBlogs },
    ];

    return NextResponse.json({ data });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}

// app/dashboard/admin/page
"use client";
import { useEffect, useState } from "react";
import AdminChart from "@/components/admin/AdminChart";

export default function AdminDashboard() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChartData();
  }, []);

  const fetchChartData = async () => {
    try {
      const response = await fetch(`${process.env.API}/admin/chart`);
      const data = await response.json();

      setChartData(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching chart data:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center text-danger vh-100 h1">
        LOADING...
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="lead text-center">Admin Dashboard</p>

          <AdminChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
}

// components/admin/AdminChart.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function AdminChart({ chartData }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ResponsiveContainer width="95%" height={400}>
            <BarChart width={1000} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="rgba(75, 192, 192, 0.6)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
```

## Only purchaser can leave rating

```js
// api/user/product/rating/route
// ...

// Check if the user has already rated the product
const existingRating = product.ratings.find(
  (rate) => rate.postedBy.toString() === token.user._id.toString()
);

// Check if the user has purchased the product
const userPurchased = await Order.findOne({
  userId: token.user._id,
  "cartItems._id": productId,
});

if (!userPurchased) {
  return NextResponse.json(
    {
      err: "You can only leave a review for products you've purchased.",
    },
    { status: 400 }
  );
}

if (existingRating) {
}
// ...

// components/product/ProductRating
const submitRating = async () => {
  if (status !== "authenticated") {
    toast.error("Please login to leave a rating");
    router.push(`/login?callbackUrl=${process.env.DOMAIN}${pathname}`);

    return;
  }
  try {
    const response = await fetch(`${process.env.API}/user/product/rating`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: product?._id,
        rating: currentRating,
        comment,
      }),
    });

    if (response.status === 200) {
      const data = await response.json();
      setProductRatings(data?.ratings);
      setShowRatingModal(false);
      console.log("product rating response => ", data);
      toast.success("You left a rating");
      router.refresh(); // only works in server components
    } else if (response.status === 400) {
      const errorData = await response.json();
      toast.error(errorData.err);
    } else {
      // Handle other error scenarios
      toast.error("An error occurred. Please try again later.");
    }
  } catch (err) {
    console.log(err);
    toast.error("Error leaving a rating");
  }
};
```

## Related products

```js
// api/product/[slug]/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";

export async function GET(req, context) {
  await dbConnect();

  try {
    const product = await Product.findOne({
      slug: context.params.slug,
    })
      .populate("category", "name")
      .populate("tags", "name")
      .populate({
        path: "ratings.postedBy",
        model: "User", // The User model name
        select: "name", // Select the fields you want to populate
      });

    // Fetch related products based on category or tags
    const relatedProducts = await Product.find({
      $or: [
        { category: product.category }, // Fetch products in the same category
        { tags: { $in: product.tags } }, // Fetch products with similar tags
      ],
      _id: { $ne: product._id }, // Exclude the current product
    }).limit(3); // Limit the number of related products

    return NextResponse.json({ product, relatedProducts });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}

// app/product/[slug]/page
// ...
const { product, relatedProducts } = await getProduct(params?.slug);

<div className="row">
  <div className="col-lg-10 offset-lg-1">
    <p className="lead text-center my-5">Other products you may like</p>
    <div className="row">
      {relatedProducts?.map((product) => (
        <div className="col-lg-4" key={product._id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  </div>
</div>;
```

## Shop page for products (without filters)

```js
// api/shop/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import queryString from "query-string";

export async function GET(req) {
  await dbConnect();

  const searchParams = queryString.parseUrl(req.url).query;

  const { page } = searchParams || {};
  const pageSize = 6;

  try {
    const currentPage = Number(page) || 1;
    const skip = (currentPage - 1) * pageSize;
    const totalProducts = await Product.countDocuments({});

    const products = await Product.find({})
      .skip(skip)
      .limit(pageSize)
      .sort({ createdAt: "-1" });

    return NextResponse.json(
      {
        products,
        currentPage,
        totalPages: Math.ceil(totalProducts / pageSize),
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}

// app/shop/page
import ProductList from "@/components/product/ProductList";
import Pagination from "@/components/Pagination";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Next Ecommerce",
  description: "Find the latest in fashion, electronics and more",
};

async function getProducts(searchParams) {
  const searchQuery = new URLSearchParams({
    page: searchParams?.page || 1,
  }).toString();

  try {
    const response = await fetch(`${process.env.API}/product?${searchQuery}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 1 },
      // next: { cache: "no-store" },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const data = await response.json();

    // Check if the response has products or is empty
    if (!data || !Array.isArray(data.products)) {
      throw new Error("No products returned.");
    }

    return data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    // Handle the error here, such as showing an error message to the user
    // or returning a default value
    return { products: [], currentPage: 1, totalPages: 1 };
  }
}

export default async function Prducts({ searchParams }) {
  // console.log("searchParams in products page => ", searchParams);
  const data = await getProducts(searchParams);

  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <p className="text-center lead fw-bold">Latest Products</p>
            <ProductList products={data?.products} />
          </div>
        </div>

        <Pagination
          currentPage={data?.currentPage}
          totalPages={data?.totalPages}
          pathname="/shop"
          searchParams={searchParams}
        />
      </div>
    </main>
  );
}
```

## Post deployment issues (fixed)

- Replace all NEXTAUTH_URL with DOMAIN
- Use production url webhook in stripe
- Get webhook signing secret from stripe for production
- Update .env

```js
// config
const DOMAIN =
  process.env.NODE_ENV === "production"
    ? "https://blog2-six-gilt.vercel.app"
    : "http://localhost:3000";

// [next-auth][warn][NEXTAUTH_URL]
const NEXTAUTH_URL =
  process.env.NODE_ENV === "production"
    ? "https://blog2-six-gilt.vercel.app"
    : "http://localhost:3000";

const STRIPE_WEBHOOK_SECRET =
  process.env.NODE_ENV === "production"
    ? "whsec_3VUXiLWiqKz3UqdSDo36oOTedT0PKScL"
    : "whsec_0c4638ee2cb64fdb508f5a42bf58b4391d19d6c1d23dfd4fc726b7c430ad5963";

// update stripe secret if using 'live' mode for real payments
// vercel --prod
```

## Post deployment updates

```js
// admin and user orders page
const [loading, setLoading] = useState(true);

const fetchOrders = async (page) => {
  try {
    // ...
    setLoading(false);
  } catch (error) {
    // ...
    setLoading(false);
  }
};

if (loading) {
  return (
    <div className="d-flex justify-content-center align-items-center text-danger vh-100 h1">
      LOADING...
    </div>
  );
}

if (!orders?.length) {
  return (
    <div className="d-flex justify-content-center align-items-center text-danger vh-100 h1">
      No Orders
    </div>
  );
}
```

## Show chart in user dashboard

```js
// api/user/chart/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import Order from "@/models/order";
import Blog from "@/models/blog";

import { currentUser } from "@/utils/currentUser";

export async function GET(req) {
  await dbConnect();

  const user = await currentUser();
  const userId = user._id;

  try {
    const totalLikedBlogs = await Blog.countDocuments({ likes: userId });
    const totalOrders = await Order.countDocuments({ userId });
    const totalReviews = await Product.countDocuments({
      "ratings.postedBy": userId,
    });
    const totalLikes = await Product.countDocuments({ likes: userId });

    const data = [
      {
        label: "Total Orders",
        url: "/dashboard/user/orders",
        count: totalOrders,
      },
      {
        label: "Liked Blogs",
        url: "/dashboard/user/liked/blogs",
        count: totalLikedBlogs,
      },
      {
        label: "Product Reviews",
        url: "/dashboard/user/product/reviews",
        count: totalReviews,
      },
      {
        label: "Product Likes",
        url: "/dashboard/user/liked/product",
        count: totalLikes,
      },
    ];

    return NextResponse.json({ data });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: err.message,
      },
      { status: 500 }
    );
  }
}

// check api response
// http://localhost:3000/api/user/chart

{
  "data": [
    {
      "label": "Total Orders",
      "url": "/dashboard/user/orders",
      "count": 1
    },
    {
      "label": "Liked Blogs",
      "url": "/dashboard/user/liked/blogs",
      "count": 2
    },
    {
      "label": "Product Reviews",
      "url": "/dashboard/user/product/reviews",
      "count": 1
    },
    {
      "label": "Product Likes",
      "url": "/dashboard/user/liked/products",
      "count": 1
    }
  ]
}

// app/dashboard/user/page
"use client";
import { useEffect, useState } from "react";
import UserChart from "@/components/user/UserChart";

export default function UserDashboard() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchChartData();
  }, []);

  const fetchChartData = async () => {
    try {
      const response = await fetch(`${process.env.API}/user/chart`);
      const data = await response.json();

      setChartData(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="lead text-center">User Dashboard</p>

          <UserChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
}

// components/user/UserChart
// non clickable
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function UserChart({ chartData }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ResponsiveContainer width="95%" height={400}>
            <BarChart width={1000} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="rgba(75, 192, 192, 0.6)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

// making label clickable
import React from "react";
import Link from "next/link";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function UserChart({ chartData }) {
  const CustomTick = ({ payload, x, y, dataPoint }) => (
    <Link href={dataPoint.url}>
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    </Link>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ResponsiveContainer width="95%" height={400}>
            <BarChart width={1000} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="label"
                height={60}
                tick={({ payload, x, y }) => (
                  <CustomTick
                    payload={payload}
                    x={x}
                    y={y}
                    dataPoint={chartData.find(
                      (item) => item.label === payload.value
                    )}
                  />
                )}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="rgba(75, 192, 192, 0.6)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
```

## User reviewed products

```js
// api/user/product/reviews/route
// without pagination
// with pagination
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import { currentUser } from "@/utils/currentUser";
import queryString from "query-string";

export async function GET(req) {
  await dbConnect();

  const user = await currentUser();
  const searchParams = queryString.parseUrl(req.url).query;
  const { page } = searchParams || {};
  const pageSize = 6; // Number of ratings per page

  try {
    const currentPage = Number(page) || 1;
    const skip = (currentPage - 1) * pageSize;

    const reviews = await Product.aggregate([
      {
        $match: {
          "ratings.postedBy": user._id,
        },
      },
      {
        $lookup: {
          from: "products", // The collection name
          localField: "_id",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $unwind: "$product", // Unwind the product array
      },
      {
        $project: {
          _id: 0,
          product: {
            title: 1,
            slug: 1,
            price: 1,
           image: { $arrayElemAt: ["$product.images.secure_url", 0] },the first image from the array
          },
          ratings: {
            $arrayElemAt: ["$ratings", 0], // Extract the first rating from the array
          },
        },
      },
      {
        $skip: skip,
      },
      {
        $limit: pageSize,
      },
    ]);

    const totalRatings = await Product.aggregate([
      {
        $match: {
          "ratings.postedBy": user._id,
        },
      },
      {
        $group: {
          _id: null,
          totalRatings: { $sum: { $size: "$ratings" } },
        },
      },
    ]);

    const totalUserRatings =
      totalRatings.length > 0 ? totalRatings[0].totalRatings : 0;

    return NextResponse.json(
      {
        reviews,
        currentPage,
        totalPages: Math.ceil(totalUserRatings / pageSize),
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}

```

## All reviews API

```js
// api/admin/product/reviews/route
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import queryString from "query-string";

export async function GET(req) {
  await dbConnect();

  const searchParams = queryString.parseUrl(req.url).query;
  const { page } = searchParams || {};
  const pageSize = 6; // Number of reviews per page

  try {
    const currentPage = Number(page) || 1;
    const skip = (currentPage - 1) * pageSize;

    // Count all ratings, not just documents
    const allRatings = await Product.aggregate([
      {
        $unwind: "$ratings",
      },
    ]);
    const totalReviews = allRatings.length;

    const reviews = await Product.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $unwind: "$ratings",
      },
      {
        $project: {
          _id: 0,
          product: {
            title: 1,
            slug: 1,
            images: { $arrayElemAt: ["$images", 0] },
          },
          rating: "$ratings.rating",
          comment: "$ratings.comment",
          postedBy: "$ratings.postedBy",
        },
      },
    ])
      .skip(skip)
      .limit(pageSize);

    return NextResponse.json(
      {
        reviews,
        currentPage,
        totalPages: Math.ceil(totalReviews / pageSize),
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}
```

## User reviews

```js
// app/dashboard/user/product/reviews/page
"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import ProductReviews from "@/components/product/ProductReviews";
import Pagination from "@/components/Pagination";

export default function UserProductReviewsPage() {
  const [reviews, setReviews] = useState([]);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  console.log("current page => ", page);

  const router = useRouter();

  useEffect(() => {
    fetchReviews(page);
  }, [page]);

  const fetchReviews = async (page) => {
    try {
      const response = await fetch(
        `${process.env.API}/user/product/reviews?page=${page}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      // console.log("DATA in admin orders with pagination => ", data);
      setReviews(data.reviews);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center text-danger vh-100 h1">
        LOADING...
      </div>
    );
  }

  if (!reviews?.length) {
    return (
      <div className="d-flex justify-content-center align-items-center text-danger vh-100 h1">
        No Orders
      </div>
    );
  }

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <p className="lead mb-4 text-center">Product Reviews</p>
          <ProductReviews reviews={reviews} />
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pathname={pathname}
      />
    </div>
  );
}
```

## All reviews for admin

```js
// app/dashboard/admin/product/reviews/page
"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import ProductReviews from "@/components/product/ProductReviews";
import Pagination from "@/components/Pagination";

export default function AdminProductReviewsPage() {
  const [reviews, setReviews] = useState([]);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  console.log("current page => ", page);

  const router = useRouter();

  useEffect(() => {
    fetchReviews(page);
  }, [page]);

  const fetchReviews = async (page) => {
    try {
      const response = await fetch(
        `${process.env.API}/admin/product/reviews?page=${page}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      // console.log("DATA in admin orders with pagination => ", data);
      setReviews(data.reviews);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center text-danger vh-100 h1">
        LOADING...
      </div>
    );
  }

  if (!reviews?.length) {
    return (
      <div className="d-flex justify-content-center align-items-center text-danger vh-100 h1">
        No Orders
      </div>
    );
  }

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <p className="lead mb-4 text-center">Product Reviews</p>
          <ProductReviews reviews={reviews} />
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pathname={pathname}
      />
    </div>
  );
}
```

## Product Reviews component

## Product reviews delete

## Order delete

## Forgot password

## Categories list in menu

## Single category view (with products)

```js

```

```js
// Delete orders more than 3 months old (bonus)

// To delete orders from a MongoDB collection that are 3 months older, you can follow these steps:

// const threeMonthsAgo = new Date();
// threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

// Order.deleteMany({ createdAt: { $lt: threeMonthsAgo } }, (err, result) => {
//   if (err) {
//     console.error("Error deleting orders:", err);
//   } else {
//     console.log("Deleted orders:", result);
//   }
//   mongoose.connection.close();
// });
```
