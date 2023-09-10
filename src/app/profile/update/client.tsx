"use client";
import { Session } from "next-auth";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  image: string;
};

type Props = {
  session: Session | null;
};

const UpdatePageClient: React.FC<Props> = ({ session }) => {
  session?.user?.email;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="md:w-1/2 mx-auto px-3 flex flex-col items-center">
      <h2 className="text-2xl font-semibold my-5 text-center">
        Update Profile
      </h2>
      <form
        className="md:w-3/4 border-2 px-3 py-5 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" readOnly defaultValue={session?.user?.email!} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <label htmlFor="email">Email</label>
        </div>
        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdatePageClient;
