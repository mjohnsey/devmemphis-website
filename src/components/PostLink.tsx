import React from "react";
import { Link } from "gatsby";
import { CalendarIcon } from "@heroicons/react/24/solid";

type PostProps = {
  post: Queries.BlogQuery["allMarkdownRemark"]["edges"][0]["node"];
};

export const PostLink = ({ post }: PostProps) => (
  // <div className="dark:bg-slate-800 mb-6 dark:rounded-md p-4 dark:border-none border-b border-b-san-juan-200">
  <div className="dark:bg-slate-800 mb-6 dark:rounded-md p-4 dark:border-none border-b border-b-san-juan-200">
    <Link
      to={`/blog/${post?.frontmatter?.slug}`}
      className="dark:text-emerald-600 text-san-juan-500 dark:hover:text-emerald-400 hover:text-san-juan-400 dark:visited:text-emerald-500 visited:text-san-juan-600 font-bold"
    >
      {post?.frontmatter?.title}
    </Link>
    <div className="flex-1 pb-4">
      <div className={"block py-2 text-sm italic text-slate-400"}>
        <CalendarIcon className={"h-4 w-4 inline"} /> {post?.frontmatter?.date}
      </div>
      <div className="dark:text-slate-100 text-slate-500">
        {post?.frontmatter?.description}
      </div>
    </div>
  </div>
);
