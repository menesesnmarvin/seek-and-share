import ContentActions from "@/components/ContentActions";
import Content from "@/components/Content";
import { articleProps } from "@/model/seekAndShare.model";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getContent(username: string) {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/profile/user-content/${username}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

async function getUser(email: string) {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/profile/user-details/${email}`,
    {
      cache: "no-store",
    },
  );

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
  const user = await getUser(`${params.username}@gmail.com`);
  return {
    title: `${user?.name} - Seek&Share`,
    // description: post[0]?.content,
  };
}

const Profile = async ({ params }: { params: { username: string } }) => {
  const data = await getContent(params.username);
  const user = await getUser(`${params.username}@gmail.com`);

  return (
    <div className="mx-auto mt-20 max-w-3xl px-4">
      <div className="flex flex-col items-center gap-4 border-b-2 border-gray-100 pb-6 md:gap-6 md:pb-8">
        <Image
          src={`${user?.image}`}
          alt="image"
          className="h-20 w-20 rounded-full md:h-24 md:w-24"
          width={100}
          height={100}
        />
        <h1 className="text-4xl font-semibold md:text-5xl">{user?.name}</h1>
      </div>
      <div className="my-14 flex flex-col gap-12 md:my-20">
        {data.map((item: articleProps) => (
          <div key={item._id}>
            <Content
              _id={item._id}
              title={item.title}
              content={item.content}
              profileImage={item.profileImage}
              created_by={item.created_by}
              user_name={item.user_name}
              createdAt={item?.createdAt}
              borderBottom="bg-gray-100"
            />
            <ContentActions id={item._id} username={item.user_name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
