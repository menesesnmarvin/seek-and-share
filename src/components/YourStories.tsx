import { articleProps, storiesProps } from "@/model/seekAndShare.model";
import Link from "next/link";
import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");

const YourStrories = ({
  _id,
  title,
  content,
  createdAt,
  updatedAt,
  borderBottom,
  status,
}: storiesProps) => {
  return (
    <article className="flex flex-col gap-2">
      <Link href={status === "draft" ? "" : `/blog/${_id}`} className="mt-2">
        <h1 className="mb-3 text-xl font-bold md:text-2xl">{title}</h1>
        <div
          className="line-clamp-4 text-sm md:text-base"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>
      </Link>
      <h1 className="text-sm text-gray-500">
        {status === "draft" ? "Last Edited - " : "- "}
        {timeAgo.format(new Date(updatedAt))}
      </h1>
      <div className={`mt-4 h-0.5 w-full ${borderBottom}`}></div>
    </article>
  );
};

export default YourStrories;
