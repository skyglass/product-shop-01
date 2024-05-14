"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

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
      router.push(callbackUrl);
    }
  };

  return (
    <main>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center vh-100">
          <div className="col-lg-5 bg-light p-5 shadow">
            <h2 className="mb-3">Login</h2>

            <div className="d-flex justify-content-between">
              <button
                className="btn btn-danger btn-raised mb-4"
                onClick={() => signIn("google", { callbackUrl })}
              >
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
