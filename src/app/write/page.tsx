"use client";
import React, { useState } from "react";
import MediumEditorComponent from "@/components/MediumEditorComponent";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import extractUsernameFromEmail from "@/lib/extractUsernameFromEmail";
import LoadingScreen from "@/components/Loading";

const EditorPage = () => {
  const [content, setContent] = useState<string | null>("");
  const [title, setTitle] = useState<string | null>("");
  const [isLoading, setisLoading] = useState<boolean>(false);

  const isButtonDisabled = title === "" || content === "";

  const { data } = useSession();
  const router = useRouter();

  const handleTitle = (title: string | null) => {
    setTitle(title);
  };

  const handleContent = (newContent: string | null) => {
    setContent(newContent);
  };

  const handlePublish = async (status: string) => {
    setisLoading(true);

    try {
      await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({
          title,
          content,
          profileImage: data?.user?.image,
          created_by: data?.user?.name,
          user_name: extractUsernameFromEmail(data?.user?.email),
          status: status,
        }),
      });

      router.push(`/me/stories/${status}`);
      router.refresh();
    } catch (err) {}
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      <article className="mx-auto mt-20 flex max-w-3xl flex-col gap-8 px-4">
        <div className="flex justify-end gap-2">
          <button
            onClick={() => handlePublish("published")}
            disabled={isButtonDisabled}
            type="button"
            className="mb-4 rounded-full bg-black px-4 py-2 text-sm text-white  disabled:opacity-40 "
          >
            Publish
          </button>
          <button
            onClick={() => handlePublish("draft")}
            disabled={isButtonDisabled}
            type="button"
            className="mb-4 rounded-full border-[1px] border-black bg-white px-2 text-sm text-black disabled:opacity-40"
          >
            Save Draft
          </button>
        </div>
        <MediumEditorComponent
          style="text-4xl md:text-5xl font-extrabold"
          placeholder="Title"
          onChange={handleTitle}
          text={title}
        />
        <MediumEditorComponent
          style="text-lg md:text-xl"
          placeholder="Tell your story..."
          onChange={handleContent}
          text={content}
        />
      </article>
    </>
  );
};

export default EditorPage;
