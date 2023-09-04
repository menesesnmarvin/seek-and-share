"use client";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();

  // if(status === "loading"){
  //    return <h1>...loding</h1>
  // }
  // if(status === "authenticated"){
  //     router.push("/")
  //  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="mt-8 flex h-[calc(100vh-6rem)] items-center justify-center p-4 md:h-[calc(100vh-9rem)]">
      {/* BOX */}
      <div className="flex flex-col rounded-md sm:shadow-2xl 2xl:w-1/2">
        {/* FORM CONTAINER */}
        <div className="flex flex-col gap-4 p-4 text-center md:p-24">
          <h1 className="text-xl font-bold xl:text-3xl">
            Log in to your account
          </h1>
          {/* <p>Log in to your account </p> */}
          <h1 className="text-base font-bold xl:text-lg">
            {"Don't have an account?  "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </h1>
          <h6 className="text-left">Email Address:</h6>
          <input
            value=""
            className="w-full rounded-md p-4 ring-1 ring-orange-100"
            onChange={() => {}}
          />
          <h6 className="text-left">Password:</h6>
          <input
            value=""
            className="rounded-md p-4 ring-1 ring-orange-100"
            onChange={() => {}}
          />
          <button className="mt-6 flex justify-center gap-4 rounded-md p-4 ring-1 ring-orange-100 ">
            Login
          </button>
          {/* <h5 className="text-center">or</h5> */}
          <button
            className="flex justify-center gap-4 rounded-md p-4 ring-1 ring-orange-100"
            onClick={() => signIn("google", { callbackUrl: "/" })}
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

export default LoginPage;
