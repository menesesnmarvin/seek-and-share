"use client";
import React, { useState } from "react";
import MediumEditorComponent from "@/components/MediumEditorComponent";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import extractUsernameFromEmail from "@/lib/extractUsernameFromEmail";

const EditorPage: React.FC = () => {
  const [content, setContent] = useState<string | null>("");
  const [title, setTitle] = useState<string | null>("");

  const isButtonDisabled = title === "" || content === "";

  const { data } = useSession();
  const router = useRouter();

  const handleTitle = (title: string | null) => {
    console.log(title);
    setTitle(title);
  };

  const handleContent = (newContent: string | null) => {
    console.log(newContent);
    setContent(newContent);
  };

  const handleGetContent = async () => {
    console.log(content);

    router.push(`/profile/${extractUsernameFromEmail(data?.user?.email)}`);
    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          content,
          profileImage: data?.user?.image,
          created_by: data?.user?.name,
          user_name: extractUsernameFromEmail(data?.user?.email),
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <article className="mx-auto mt-20 flex max-w-2xl flex-col gap-8">
      <div className="flex justify-end">
        <button
          className="mb-4 rounded bg-gray-500 px-4 py-2 text-white disabled:opacity-40"
          onClick={handleGetContent}
          disabled={isButtonDisabled}
        >
          Publish
        </button>
      </div>
      <MediumEditorComponent
        style="text-5xl font-extrabold"
        placeholder="Title"
        onChange={handleTitle}
      />
      <MediumEditorComponent
        style="text-xl"
        placeholder="Tell your story..."
        onChange={handleContent}
      />
    </article>
  );
};

export default EditorPage;
