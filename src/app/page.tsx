import Content from "@/components/Content";
import LandingPage from "@/components/LandingPage";
import { articleProps } from "@/model/seekAndShare.model";

async function getData() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <LandingPage />
      <div className="-mt-14 h-screen bg-[#F1F1F1] px-4">
        <main className="mx-auto flex max-w-3xl flex-col gap-12 pt-64 md:pt-80">
          {data.map((item: articleProps) => (
            <Content
              key={item._id}
              _id={item._id}
              title={item.title}
              content={item.content}
              profileImage={item.profileImage}
              created_by={item.created_by}
              user_name={item.user_name}
              createdAt={item?.createdAt}
              borderBottom="bg-white"
            />
          ))}
        </main>
      </div>
    </>
  );
}
