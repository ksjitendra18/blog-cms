"use client";
import { signIn } from "next-auth/react";
import React, { useRef, useState } from "react";

import { email, maxLength, minLength, object, parse, string } from "valibot";

const EmailSchema = object({
  email: string("Your email must be a string.", [
    minLength(5, "Email should be minimum 5 length."),
    maxLength(50, "Email should be shorter than 50 characters"),
    email("Please enter a valid email"),
  ]),
});

const LoginComp = () => {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");

  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  const userEmailRef = useRef<HTMLInputElement>(null);

  async function loginWithGoogle() {
    setLoading(true);
    try {
      await signIn("google", { callbackUrl: "/projects" });
    } catch (error) {
      // display error message
      // toast.error("Something went wrong!!");
    } finally {
      setLoading(false);
    }
  }
  async function loginWithEmail(
    e: React.MouseEvent<HTMLFormElement, MouseEvent>
  ) {
    e.preventDefault();

    setLoading(true);
    try {
      const { email } = parse(EmailSchema, {
        email: userEmailRef.current?.value,
      });

      await signIn("email", { email });
    } catch (error) {
      console.log("error email", error);
      // display error message
      // toast.error("Something went wrong!!");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className=" md:w-1/2 h-fit  mx-auto mt-20 rounded-md flex items-center flex-col ">
      <h2 className="text-4xl font-semibold">Login</h2>

      <div className="mt-10 flex gap-5  items-center justify-center flex-col">
        <button
          onClick={loginWithGoogle}
          className=" px-5 border-2 flex items-center justify-center border-black py-2 rounded-md w-full md:w-3/4"
        >
          <svg
            className="mr-2 h-4 w-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="github"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
            <path d="M1 1h22v22H1z" fill="none" />
          </svg>
          Log in with Google
        </button>
        <div className="my-3 w-full md:w-[380px] flex items-center justify-center">
          <div className="before-or w-[100%] h-[2px] bg-gray-300 mr-2"></div>{" "}
          <p className="text-gray-500 or">OR</p>{" "}
          <div className="after-or w-[100%] h-[2px] bg-gray-300 ml-2"></div>
        </div>

        <div>
          <form onSubmit={loginWithEmail} className="w-full md:w-3/4 mx-auto">
            {/* <div className="flex flex-col items-center gap-3 w-full"> */}

            <input
              className="w-full px-2 py-3 bg-transparent border-2 border-black rounded-md"
              type="email"
              name="email"
              id="email"
              required
              minLength={5}
              maxLength={50}
              ref={userEmailRef}
              placeholder="mail@example.com"
            />
            <button className="mt-3 bg-blue-500 px-7 text-white py-2 rounded-md w-full">
              Login with Magic Link
            </button>
            {/* </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
