import Editor from "@/components/Editor";
import { notFound } from "next/navigation";
import React from "react";

async function getData(id: string) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const Edit = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);

  return (
    <Editor initTitle={data.title} initContent={data.content} id={params.id} />
  );
};

export default Edit;
