"use client";
import React, { useState } from "react";
import MediumEditorComponent from "@/components/MediumEditorComponent";

const EditorPage: React.FC = () => {
  const [content, setContent] = useState<string>(""); // Store the editor content here

  const handleEditorChange = (newContent: string) => {
    console.log(newContent);
    setContent(newContent);
  };

  return (
    <article className="mx-auto mt-20 flex max-w-2xl flex-col gap-8">
      <MediumEditorComponent
        style="text-5xl font-extrabold"
        placeholder="Title"
      />
      <MediumEditorComponent style="text-xl" placeholder="Tell your story..." />
    </article>
  );
};

export default EditorPage;
