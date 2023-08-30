"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "public/SASnoslogan.jpg";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";
import extractUsernameFromEmail from "@/lib/extractUsernameFromEmail";

const Navbar = () => {
  const { data, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex flex-row justify-between">
      <Link href="/" className="w-72">
        <Image src={Logo} alt="seek&share" />
      </Link>
      <div className="flex items-center gap-12">
        <Link href="/write" className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
            <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
          </svg>
          <span>Write</span>
        </Link>
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Login</Link>
        )}
        {status === "authenticated" && (
          // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          //     <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
          // </svg>
          // <div>
          //     {/* <h1>{data?.user?.name}</h1> */}
          //     <Image
          //         src={`${data?.user?.image}`}
          //         width={32}
          //         height={32}
          //         className='rounded-full'
          //         alt="Picture of the author"
          //     />
          //     {/* <Image src={data?.user?.image} width={"32"} height={"32"} alt='image'/> */}
          // </div>

          // <Link href="/api/auth/signout" onClick={()=> signOut({ callbackUrl: '/login' })}>
          //     Log Out
          // </Link>
          <div className="relative" ref={dropdownRef}>
            {data?.user?.image ? (
              <button
                className="flex items-center space-x-2"
                onClick={toggleDropdown}
              >
                <Image
                  src={`${data?.user?.image}`}
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-gray-700">{data?.user?.name}</span>
              </button>
            ) : null}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-md">
                <ul className="py-2">
                  <Link
                    href={`/profile/${extractUsernameFromEmail(
                      data?.user?.email,
                    )}`}
                    onClick={toggleDropdown}
                  >
                    <li className="px-4 py-2 hover:bg-gray-100">Profile</li>
                  </Link>

                  <Link
                    href="/api/auth/signout"
                    onClick={() => signOut({ callbackUrl: "/" })}
                  >
                    <li className="px-4 py-2 hover:bg-gray-100">Log Out</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
