import ArticleFooter from "@/components/ArticleFooter";
import ArticleTemplate from "@/components/ArticleTemplate";
import { articleProps } from "@/model/seekAndShare.model";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(username: string) {
  const res = await fetch(`http://localhost:3000/api/profile/${username}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}) {
  const post = await getData(params.username);
  return {
    title: `${post[0]?.created_by} - Seek&Share`,
    // description: post[0]?.content,
  };
}

const Profile = async ({ params }: { params: { username: string } }) => {
  const data = await getData(params.username);

  return (
    <div className="mx-auto mt-20 max-w-3xl px-4">
      <div className="flex flex-col items-center gap-4 border-b-2 border-gray-100 pb-6 md:gap-6 md:pb-8">
        <Image
          src={`${data[0]?.profileImage}`}
          alt="image"
          className="h-20 w-20 rounded-full md:h-24 md:w-24"
          width={100}
          height={100}
        />
        <h1 className="text-4xl font-semibold md:text-5xl">
          {data[0]?.created_by}
        </h1>
      </div>
      <div className="my-14 flex flex-col gap-12 md:my-20">
        {data.map((item: articleProps) => (
          <div key={item._id}>
            <ArticleTemplate
              _id={item._id}
              title={item.title}
              content={item.content}
              profileImage={item.profileImage}
              created_by={item.created_by}
              user_name={item.user_name}
              createdAt={item?.createdAt}
              borderBottom="bg-gray-100"
            />
            <ArticleFooter id={item._id} username={item.user_name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
