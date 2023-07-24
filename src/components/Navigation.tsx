import React from "react";
import { Link, StaticQuery, graphql, PageProps } from "gatsby";
import { Location } from "@reach/router";
import { ThemeToggle } from "./ThemeToggle";

interface NavProps {
  location: PageProps["location"];
  site: Queries.NavigationQuery["site"];
}
const Nav = (props: NavProps) => {
  const { menuLinks } = props.site?.siteMetadata || {};
  const { pathname } = props?.location || {};

  return (
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-san-juan-950">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div className="flex items-center lg:flex-1">
          <div className="bg-contain bg-no-repeat display-contents w-10 h-10 mr-4 dark:bg-[url(/dm-icon-dark.svg)] bg-[url(/dm-icon-light.svg)]" />
          <Link
            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-san-juan-900"
            to="/"
          >
            <span className="font-bold">Dev</span>
            <span className="font-extralight">Memphis</span>
          </Link>
        </div>

        <div className="flex items-center lg:order-2 lg:flex-1 lg:justify-end">
          <ThemeToggle />
        </div>

        <div
          className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1 lg:flex-1 lg:justify-center"
          id="mobile-menu-2"
        >
          {!!menuLinks && (
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {menuLinks.map((page) => (
                <>
                  {page ? (
                    <li key={page.name}>
                      <Link
                        to={page.link || ""}
                        partiallyActive={true}
                        className="block py-2 pr-4 pl-3 text-gray-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-san-juan-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                        activeClassName={
                          page.link === "/" && pathname !== "/"
                            ? ""
                            : "text-san-juan-500 dark:text-white"
                        }
                      >
                        {page.name}
                      </Link>
                    </li>
                  ) : (
                    <li />
                  )}
                </>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export const Navigation = () => (
  <Location>
    {(locationProps) => (
      <StaticQuery
        query={graphql`
          query Navigation {
            site {
              siteMetadata {
                menuLinks {
                  name
                  link
                }
              }
            }
          }
        `}
        render={(data) => <Nav {...locationProps} site={data.site} />}
      />
    )}
  </Location>
);
