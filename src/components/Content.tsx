import { articleProps } from "@/model/seekAndShare.model";
import Image from "next/image";
import Link from "next/link";
import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");

const Content = ({
  _id,
  title,
  content,
  profileImage,
  created_by,
  user_name,
  createdAt,
  updatedAt,
  borderBottom,
}: articleProps) => {
  return (
    <article className="flex flex-col gap-2">
      <Link href={`/profile/${user_name}`} className="flex items-center gap-2">
        <Image
          src={`${profileImage}`}
          alt="image"
          className="rounded-full"
          width={24}
          height={24}
        />
        <h1 className="text-sm hover:underline">{created_by}</h1>
        <span>-</span>
        <h1 className="text-sm text-gray-500">
          {timeAgo.format(new Date(updatedAt))}
        </h1>
      </Link>
      <Link href={`/blog/${_id}`} className="mt-2">
        <h1 className="mb-3 text-xl font-bold md:text-2xl">{title}</h1>
        <div
          className="line-clamp-4 text-sm md:text-base"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>
      </Link>
      <div className={`mt-4 h-0.5 w-full ${borderBottom}`}></div>
    </article>
  );
};

export default Content;
