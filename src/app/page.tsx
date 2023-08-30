import ArticleTemplate from "@/components/ArticleTemplate";
import { articleProps } from "@/model/seekAndShare.model";

const blogs = [
  {
    id: "tZ4mvZX7MAZ8FsrcOi1lq1",
    title:
      "Ut exercitation veniam voluptate enim reprehenderit qui consequat irure elit",
    content:
      "Ut exercitation veniam voluptate enim reprehenderit qui consequat irure elit. Elit irure aliquip minim do. Ex quis magna culpa elit sunt. Aute non ea reprehenderit in voluptate velit fugiat elit ex. Labore enim nostrud occaecat exercitation aute nostrud duis elit dolore consectetur incididunt officia sunt elit.",
    profileImage:
      "https://lh3.googleusercontent.com/a/AAcHTtfhD6iRNNO0Us2ZFfS0u8m9APlEpEQ4IctxRLyB2PLi=s96-c",
    created_by: "Marvin Meneses",
    created_timestamp: "Aug 20",
  },
  {
    id: "tZ4mvZX7MAZ8FsrcOi1lq2",
    title:
      "Ut exercitation veniam voluptate enim reprehenderit qui consequat irure elit",
    content:
      "Ad tempor anim nostrud occaecat et incididunt occaecat nisi proident do. Nulla magna sit commodo nostrud cillum irure eu commodo cillum dolore cupidatat. Eiusmod qui quis magna amet id ipsum sit sint nostrud minim aliqua elit. Aliquip adipisicing fugiat non proident veniam minim quis exercitation sit dolor. Aliqua fugiat consequat consectetur nulla irure anim ullamco irure consectetur id eiusmod reprehenderit. Exercitation aliqua eu ea cillum veniam et nostrud tempor esse irure incididunt aliqua magna.",
    profileImage:
      "https://lh3.googleusercontent.com/a/AAcHTtfhD6iRNNO0Us2ZFfS0u8m9APlEpEQ4IctxRLyB2PLi=s96-c",
    created_by: "Marvin Meneses",
    created_timestamp: "Aug 20",
  },
  {
    id: "tZ4mvZX7MAZ8FsrcOi1lq3",
    title:
      "Ut exercitation veniam voluptate enim reprehenderit qui consequat irure elit",
    content:
      "Ut exercitation veniam voluptate enim reprehenderit qui consequat irure elit. Elit irure aliquip minim do. Ex quis magna culpa elit sunt. Aute non ea reprehenderit in voluptate velit fugiat elit ex. Labore enim nostrud occaecat exercitation aute nostrud duis elit dolore consectetur incididunt officia sunt elit.",
    profileImage:
      "https://lh3.googleusercontent.com/a/AAcHTtfhD6iRNNO0Us2ZFfS0u8m9APlEpEQ4IctxRLyB2PLi=s96-c",
    created_by: "Marvin Meneses",
    created_timestamp: "Aug 20",
  },
  {
    id: "tZ4mvZX7MAZ8FsrcOi1lq4",
    title:
      "Ut exercitation veniam voluptate enim reprehenderit qui consequat irure elit",
    content:
      "Ut exercitation veniam voluptate enim reprehenderit qui consequat irure elit. Elit irure aliquip minim do. Ex quis magna culpa elit sunt. Aute non ea reprehenderit in voluptate velit fugiat elit ex. Labore enim nostrud occaecat exercitation aute nostrud duis elit dolore consectetur incididunt officia sunt elit.",
    profileImage:
      "https://lh3.googleusercontent.com/a/AAcHTtfhD6iRNNO0Us2ZFfS0u8m9APlEpEQ4IctxRLyB2PLi=s96-c",
    created_by: "Marvin Meneses",
    created_timestamp: "Aug 20",
  },
  {
    id: "tZ4mvZX7MAZ8FsrcOi1lq5",
    title:
      "Ut exercitation veniam voluptate enim reprehenderit qui consequat irure elit",
    content:
      "Ut exercitation veniam voluptate enim reprehenderit qui consequat irure elit. Elit irure aliquip minim do. Ex quis magna culpa elit sunt. Aute non ea reprehenderit in voluptate velit fugiat elit ex. Labore enim nostrud occaecat exercitation aute nostrud duis elit dolore consectetur incididunt officia sunt elit.",
    profileImage:
      "https://lh3.googleusercontent.com/a/AAcHTtfhD6iRNNO0Us2ZFfS0u8m9APlEpEQ4IctxRLyB2PLi=s96-c",
    created_by: "Marvin Meneses",
    created_timestamp: "Aug 20",
  },
];

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
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
    <main className="mx-auto mt-20 flex max-w-3xl flex-col gap-12">
      {data.map((item: articleProps) => (
        <ArticleTemplate
          key={item._id}
          _id={item._id}
          title={item.title}
          content={item.content}
          profileImage={item.profileImage}
          created_by={item.created_by}
          user_name={item.user_name}
          createdAt={item?.createdAt}
        />
      ))}
    </main>
  );
}
