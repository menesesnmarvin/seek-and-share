import ArticleTemplate from "@/components/ArticleTemplate";

const blogs = [
  {
    id: 1,
    title: "How to use the new React Context API",
    description:
      "Ut exercitation veniam voluptate enim reprehenderit qui consequat irure elit. Elit irure aliquip minim do. Ex quis magna culpa elit sunt. Aute non ea reprehenderit in voluptate velit fugiat elit ex. Labore enim nostrud occaecat exercitation aute nostrud duis elit dolore consectetur incididunt officia sunt elit.",
    profileImage:
      "https://lh3.googleusercontent.com/a/AAcHTtfhD6iRNNO0Us2ZFfS0u8m9APlEpEQ4IctxRLyB2PLi=s96-c",
    created_by: "Marvin Meneses",
    created_timestamp: "Aug 20",
  },
  {
    id: 2,
    title: "What is the purpose of Life?",
    description:
      "Ad tempor anim nostrud occaecat et incididunt occaecat nisi proident do. Nulla magna sit commodo nostrud cillum irure eu commodo cillum dolore cupidatat. Eiusmod qui quis magna amet id ipsum sit sint nostrud minim aliqua elit. Aliquip adipisicing fugiat non proident veniam minim quis exercitation sit dolor. Aliqua fugiat consequat consectetur nulla irure anim ullamco irure consectetur id eiusmod reprehenderit. Exercitation aliqua eu ea cillum veniam et nostrud tempor esse irure incididunt aliqua magna.",
    profileImage:
      "https://lh3.googleusercontent.com/a/AAcHTtfhD6iRNNO0Us2ZFfS0u8m9APlEpEQ4IctxRLyB2PLi=s96-c",
    created_by: "Marvin Meneses",
    created_timestamp: "Aug 20",
  },
  {
    id: 3,
    title: "How to use the new React Context API",
    description:
      "Ut exercitation veniam voluptate enim reprehenderit qui consequat irure elit. Elit irure aliquip minim do. Ex quis magna culpa elit sunt. Aute non ea reprehenderit in voluptate velit fugiat elit ex. Labore enim nostrud occaecat exercitation aute nostrud duis elit dolore consectetur incididunt officia sunt elit.",
    profileImage:
      "https://lh3.googleusercontent.com/a/AAcHTtfhD6iRNNO0Us2ZFfS0u8m9APlEpEQ4IctxRLyB2PLi=s96-c",
    created_by: "Marvin Meneses",
    created_timestamp: "Aug 20",
  },
  {
    id: 4,
    title: "How to use the new React Context API",
    description:
      "Ut exercitation veniam voluptate enim reprehenderit qui consequat irure elit. Elit irure aliquip minim do. Ex quis magna culpa elit sunt. Aute non ea reprehenderit in voluptate velit fugiat elit ex. Labore enim nostrud occaecat exercitation aute nostrud duis elit dolore consectetur incididunt officia sunt elit.",
    profileImage:
      "https://lh3.googleusercontent.com/a/AAcHTtfhD6iRNNO0Us2ZFfS0u8m9APlEpEQ4IctxRLyB2PLi=s96-c",
    created_by: "Marvin Meneses",
    created_timestamp: "Aug 20",
  },
  {
    id: 5,
    title: "How to use the new React Context API",
    description:
      "Ut exercitation veniam voluptate enim reprehenderit qui consequat irure elit. Elit irure aliquip minim do. Ex quis magna culpa elit sunt. Aute non ea reprehenderit in voluptate velit fugiat elit ex. Labore enim nostrud occaecat exercitation aute nostrud duis elit dolore consectetur incididunt officia sunt elit.",
    profileImage:
      "https://lh3.googleusercontent.com/a/AAcHTtfhD6iRNNO0Us2ZFfS0u8m9APlEpEQ4IctxRLyB2PLi=s96-c",
    created_by: "Marvin Meneses",
    created_timestamp: "Aug 20",
  },
];

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto mt-20 flex flex-col gap-12">
      {blogs.map((item) => (
        <ArticleTemplate
          key={item.id}
          title={item.title}
          description={item.description}
          profileImage={item.profileImage}
          created_by={item.created_by}
          created_timestamp={item.created_timestamp}
        />
      ))}
    </main>
  );
}
