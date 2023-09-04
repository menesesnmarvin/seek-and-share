"use client";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const { data, status } = useSession();
  const router = useRouter();

  // if(status === "loading"){
  //    return <h1>...loding</h1>
  // }
  // if(status === "authenticated"){
  //     router.push("/")
  //  }

  return (
    <div className="flex h-[calc(100vh-6rem)] items-center justify-center p-4 md:h-[calc(100vh-9rem)]">
      {/* BOX */}
      <div className=" flex h-full flex-col rounded-md shadow-2xl md:h-[70%] md:w-full md:flex-row 2xl:w-2/3">
        {/* IMAGE CONTAINER */}
        <div className="h-1/3 w-full md:h-full md:w-1/2">
          <form className="flex flex-col items-center justify-center">
            <input
              value="test"
              className="my-4 rounded-md p-4 ring-1 ring-orange-100"
            />

            <input
              value="test"
              className="my-4 rounded-md p-4 ring-1 ring-orange-100"
            />

            <input
              value="test"
              className="my-4 rounded-md p-4 ring-1 ring-orange-100"
            />

            <input
              value="test"
              className="my-4 rounded-md p-4 ring-1 ring-orange-100"
            />
          </form>
        </div>
        {/* FORM CONTAINER */}
        <div className="flex flex-col gap-4 p-10 md:w-1/2">
          <h1 className="text-xl font-bold xl:text-3xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button
            className="mt-6 flex gap-4 rounded-md p-4 ring-1 ring-orange-100"
            onClick={() => signIn("google")}
          >
            Create your account
          </button>
          <h5 className="text-center">or</h5>
          <button
            className="flex gap-4 rounded-md p-4 ring-1 ring-orange-100"
            onClick={() => signIn("google", { callbackUrl: "/blog" })}
          >
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
