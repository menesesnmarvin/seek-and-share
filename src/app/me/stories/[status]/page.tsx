import Link from "next/link";
import { notFound } from "next/navigation";
import { getAuthSession } from "@/service/auth";
import { articleProps } from "@/model/seekAndShare.model";
import ContentActions from "@/components/ContentActions";
import extractUsernameFromEmail from "@/lib/extractUsernameFromEmail";
import YourStrories from "@/components/YourStories";

async function getContent(username: string | null | undefined, status: string) {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/profile/user-content/${username}/${status}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata() {
  return {
    title: "Your stories",
  };
}

const Drafts = async ({ params }: { params: { status: string } }) => {
  const session = await getAuthSession();
  const data = await getContent(
    extractUsernameFromEmail(session?.user?.email),
    params.status,
  );

  console.log(data);
  return (
    <div className="mx-auto mt-20 max-w-3xl px-4">
      <h1 className="mb-8 text-center text-4xl font-semibold md:text-5xl">
        Your Stories
      </h1>
      <div className="border-b-2 border-gray-100 text-center text-sm font-medium text-gray-500">
        <ul className="-mb-px flex flex-wrap">
          <li className="mr-2">
            <Link
              href="/me/stories/draft"
              className={`inline-block rounded-t-lg p-4 ${
                params.status === "draft"
                  ? "border-b-2 border-black"
                  : "border-b-2 border-transparent hover:border-gray-300 hover:text-gray-600"
              } `}
            >
              Drafts
            </Link>
          </li>
          <li className="mr-2">
            <Link
              href="/me/stories/published"
              className={`inline-block  p-4  ${
                params.status === "published"
                  ? "border-b-2 border-black"
                  : "border-b-2 border-transparent hover:border-gray-300 hover:text-gray-600"
              }`}
            >
              Published
            </Link>
          </li>
        </ul>
      </div>
      {data.length === 0 ? (
        <h1 className="mt-32 text-center text-sm">
          {params.status === "published"
            ? "You haven't published any stories yet."
            : "You have no drafts."}
        </h1>
      ) : (
        <div className="my-12 flex flex-col gap-12">
          {data.map((item: articleProps) => (
            <div key={item._id}>
              <YourStrories
                _id={item._id}
                title={item.title}
                content={item.content}
                createdAt={item?.createdAt}
                updatedAt={item?.updatedAt}
                status={params.status}
                borderBottom="bg-gray-100"
              />
              <ContentActions
                id={item._id}
                username={item.user_name}
                status={params.status}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Drafts;
