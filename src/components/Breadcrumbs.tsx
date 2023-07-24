import React from "react";
import { ContentContainer } from "./ContentContainer";
import { Link } from "gatsby";

type BreadcrumbsProps = {
  name: string;
  crumbs?: { name: string; path: string };
};

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { name, crumbs } = props;

  return (
    <div className="bg-san-juan-100 dark:bg-none dark:bg-transparent ">
      <ContentContainer>
        <div className="my-6 ">
          <Link
            to={`/`}
            className="font-light dark:text-slate-400 text-san-juan-500 dark:hover:text-emerald-400 hover:text-san-juan-400 visited:text-san-juan-600 hover:font-normal"
          >
            DevMemphis
          </Link>{" "}
          <span className="text-slate-400">/</span>{" "}
          {!!crumbs && (
            <>
              <Link
                to={crumbs?.path}
                className="font-light dark:text-slate-400 text-san-juan-500 dark:hover:text-emerald-400 hover:text-san-juan-400 visited:text-san-juan-600 hover:font-normal"
              >
                {crumbs?.name}
              </Link>{" "}
              <span className="text-slate-400">/</span>{" "}
            </>
          )}
          <span className="font-bold dark:text-emerald-500 text-san-juan-800 cursor-default">
            {name}
          </span>
        </div>
      </ContentContainer>
    </div>
  );
};
