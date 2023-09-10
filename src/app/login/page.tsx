import type { Metadata } from "next";
import LoginComp from "./login";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/libs/next-auth-options";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to get started",
};

const Login = async () => {
  const session = await getServerSession(nextAuthOptions);

  if (session) {
    redirect("/projects");
  }
  return <LoginComp />;
};

export default Login;
