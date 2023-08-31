import Image from "next/image";
import { notFound } from "next/navigation";
import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";
import Link from "next/link";

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.content,
  };
}

const Blog = async ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  const data = await getData(params.id);

  return (
    <div className="mx-auto mt-20 max-w-3xl px-4 pb-4">
      <h1 className="text-4xl font-extrabold md:text-5xl">{data.title}</h1>
      <Link
        href={`/profile/${data.user_name}`}
        className="my-8 flex items-center gap-2"
      >
        <Image
          src={`${data.profileImage}`}
          alt="image"
          className="h-8 w-8 rounded-full md:h-10 md:w-10"
          width={40}
          height={40}
        />
        <h1 className="text-sm hover:underline md:text-base">
          {data.created_by}
        </h1>
        <h1 className="text-sm text-gray-500 md:text-base">{`- ${timeAgo.format(
          new Date(data.createdAt),
        )}`}</h1>
      </Link>
      <div className="flex flex-col gap-14">
        {/* <p className=" text-xl leading-8 tracking-tight">{data.content}</p> */}
        <div
          className="text-lg leading-7 tracking-tight md:text-xl md:leading-8"
          dangerouslySetInnerHTML={{
            __html: data.content,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Blog;
