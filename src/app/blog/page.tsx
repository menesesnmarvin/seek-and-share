import Image from "next/image";

const Blog = ({ searchParams }: any) => {
  console.log(searchParams);
  return (
    <div className="mx-auto mt-20 max-w-2xl">
      <h1 className="text-5xl font-extrabold">{searchParams.title}</h1>
      <div className="my-10 flex items-center gap-2">
        <Image
          src={`${"https://lh3.googleusercontent.com/a/AAcHTtfhD6iRNNO0Us2ZFfS0u8m9APlEpEQ4IctxRLyB2PLi=s96-c"}`}
          alt="image"
          className="rounded-full"
          width={40}
          height={40}
        />
        <h1 className="text-sm">{"Marvin Meneses"}</h1>
        <h1 className="text-sm text-gray-500">{`- ${"Aug 22"}`}</h1>
      </div>
      <div className="flex flex-col gap-14">
        <p className=" text-xl leading-8 tracking-tight">
          Dolor excepteur non commodo do duis irure id consequat quis commodo.
          Exercitation enim adipisicing minim deserunt. Est Lorem consequat est
          commodo elit esse pariatur. Aute ea in dolore consequat aute excepteur
          duis. Esse ex minim mollit officia duis. Do ad minim irure aliqua quis
          laborum velit ea deserunt eiusmod quis. Magna amet est ut pariatur ad
          aute. Laborum ullamco quis voluptate culpa consectetur proident culpa
          Lorem. Quis duis consectetur elit cillum ex ad pariatur minim
          exercitation laboris excepteur id. Eiusmod culpa exercitation aliquip
          consectetur ad dolore. Reprehenderit dolore in nostrud laboris amet.
        </p>
        <p className="text-xl leading-8 tracking-tight">
          Aliqua pariatur nisi Lorem proident deserunt cupidatat do ea. Nisi
          nostrud sit elit mollit cillum quis culpa dolore qui nulla. Quis qui
          dolor quis mollit sunt voluptate enim pariatur enim quis enim eiusmod
          proident exercitation. Do id occaecat duis tempor velit ea ex ut
          officia aliqua eiusmod ut ad sint. Excepteur fugiat sint ad dolor
          aliquip. Nisi amet velit tempor consequat consequat tempor laboris.
          Cupidatat minim duis qui commodo reprehenderit aute nulla veniam ut
          sint sit amet minim. Aliquip cillum esse consequat nisi veniam
          consectetur. Magna consequat eu non exercitation ipsum elit in non
          reprehenderit dolor. Eu veniam aute reprehenderit pariatur veniam
          cupidatat adipisicing. Non Lorem cupidatat nulla veniam pariatur magna
          elit amet eiusmod qui amet do. Cupidatat laboris aute consequat
          ullamco fugiat Lorem aliquip.
        </p>
      </div>
    </div>
  );
};

export default Blog;
