import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { Layout } from "../../components/Layout";
import { ContentContainer } from "../../components/ContentContainer";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { SEO } from "../../components/seo";
import { Footer } from "../../components/Footer";

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}: PageProps<Queries.MeetupPageQuery>) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark || {};
  return (
    <>
      {frontmatter && html && (
        <>
          <Layout>
            <Breadcrumbs
              crumbs={{ name: "Meetups", path: "/meetups" }}
              name={frontmatter?.date || ""}
            />
            <ContentContainer>
              <div className="dark:bg-slate-800 mb-6 dark:rounded-md p-4 dark:text-slate-100 text-slate-500">
                <h1 className="dark:text-emerald-500 text-san-juan-800 font-bold">
                  <span className="dark:text-emerald-400 inline text-san-juan-400 font-light">
                    #{frontmatter?.meetupNumber} -&nbsp;
                  </span>
                  {frontmatter.title}
                </h1>
                <h2 className="block py-2 text-sm italic text-slate-400">
                  {frontmatter.date}
                </h2>
                <p className="dark:text-slate-100 text-slate-500">
                  {frontmatter.description}
                </p>
                <hr className="h-px my-6 bg-san-juan-300 border-0 dark:bg-slate-500" />
                <div
                  className="prose dark:prose-dark mb-6"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <Link
                  to={frontmatter.meetupLink || ""}
                  className="bg-rose-500 text-white active:bg-rose-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-2 inline-block ease-linear transition-all duration-150"
                  type="button"
                >
                  RSVP on Meetup
                </Link>
              </div>
            </ContentContainer>
          </Layout>
          <Footer />
        </>
      )}
    </>
  );
}

export const Head = ({
  data, // this prop will be injected by the GraphQL query below.
}: PageProps<Queries.MeetupPageQuery>) => {
  const { markdownRemark } = data;
  return (
    <SEO
      title={`DevMemphis - Meetups - ${markdownRemark?.frontmatter?.title}`}
    />
  );
};

export const pageQuery = graphql`
  query MeetupPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        meetupLink
        meetupNumber
      }
    }
  }
`;
