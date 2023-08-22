"use client"
import { useSession, signIn } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const RegisterPage = () => {
    const {data, status} = useSession()
    const router = useRouter();

    console.log(data)
    console.log(status)
    
    // if(status === "loading"){
    //    return <h1>...loding</h1>
    // }
    // if(status === "authenticated"){
    //     router.push("/")
    //  }

  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* BOX */}
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full 2xl:w-2/3">
        {/* IMAGE CONTAINER */}
        <div className="h-1/3 w-full md:h-full md:w-1/2">
            <form className="flex flex-col items-center justify-center">
                <input value="test" className="p-4 ring-1 ring-orange-100 rounded-md my-4"/>
                
                <input value="test" className="p-4 ring-1 ring-orange-100 rounded-md my-4"/>
                
                <input value="test" className="p-4 ring-1 ring-orange-100 rounded-md my-4"/>
                
                <input value="test" className="p-4 ring-1 ring-orange-100 rounded-md my-4"/>
            </form>
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-4 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button
            className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md mt-6"
            onClick={() => signIn("google")}
          >
            Create your account
          </button>
          <h5 className="text-center">or</h5>
          <button
            className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md"
            onClick={() => signIn("google", { callbackUrl: '/blog' })}
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
  )
}

export default RegisterPage