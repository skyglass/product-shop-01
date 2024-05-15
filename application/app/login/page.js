"use client";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Login() {

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";


  return (
    <main>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center vh-100">
          <div className="col-lg-5 shadow bg-light p-5">
            <h2 className="mb-4 text-center">Login</h2>

            <button
              className="btn btn-danger btn-raised mb-4"
              onClick={() => signIn("google", { callbackUrl })}
            >
              Sign In with Google
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
