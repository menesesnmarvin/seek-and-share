import { articleProps } from "@/model/seekAndShare.model";
import Image from "next/image";
import Link from "next/link";
import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");

const ArticleTemplate = ({
  _id,
  title,
  content,
  profileImage,
  created_by,
  user_name,
  createdAt,
}: articleProps) => {
  return (
    <article className="flex flex-col gap-2 border-b-2 border-gray-100 pb-4">
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
          {timeAgo.format(new Date(createdAt))}
        </h1>
      </Link>
      <Link href={`/blog/${_id}`} className="mt-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div
          className="line-clamp-3 text-base"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>
      </Link>
    </article>
  );
};

export default ArticleTemplate;
