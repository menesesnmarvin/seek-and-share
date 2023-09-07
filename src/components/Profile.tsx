"use client";
import extractUsernameFromEmail from "@/lib/extractUsernameFromEmail";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { userSession } from "@/model/seekAndShare.model";

const Profile = ({ userDetails }: userSession) => {
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
    <div className="relative flex-none" ref={dropdownRef}>
      {userDetails?.image ? (
        <button
          className="flex items-center space-x-2"
          onClick={toggleDropdown}
        >
          <Image
            src={`${userDetails?.image}`}
            alt="User Avatar"
            width={40}
            height={40}
            className="h-8 w-8 rounded-full md:h-10 md:w-10"
          />
          <span className="hidden text-gray-700 md:inline">
            {userDetails?.name}
          </span>
        </button>
      ) : null}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-lg border border-gray-200 bg-white shadow-md md:w-48">
          <ul className="py-2">
            <Link
              href={`/profile/${extractUsernameFromEmail(userDetails?.email)}`}
              onClick={toggleDropdown}
            >
              <li className="px-4 py-2 hover:bg-gray-100">Profile</li>
            </Link>

            <Link href="/api/auth/signout">
              <li className="px-4 py-2 hover:bg-gray-100">Sign Out</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
