import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import UpdatePageClient from "./client";

import { nextAuthOptions } from "@/libs/next-auth-options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const UpdatePage = async () => {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <UpdatePageClient session={session} />
    </>
  );
};

export default UpdatePage;
