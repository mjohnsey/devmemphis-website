import React from "react";
import { graphql, PageProps } from "gatsby";
import { Layout } from "../../components/Layout";
import { ContentContainer } from "../../components/ContentContainer";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { SEO } from "../../components/seo";
import { Footer } from "../../components/Footer";

export default function BlogPostTemplate({
  data,
}: PageProps<Queries.MeetupPageQuery>) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark || {};
  return (
    <>
      {frontmatter && html && (
        <>
          <Layout>
            <Breadcrumbs
              crumbs={{ name: "Blog", path: "/blog" }}
              name={frontmatter?.title || ""}
            />
            <ContentContainer>
              <div className="dark:bg-slate-800 mb-6 dark:rounded-md p-4">
                <h1 className="dark:text-emerald-500 text-san-juan-800 font-bold">
                  {frontmatter.title}
                </h1>
                <h2 className="block py-2 text-sm italic text-slate-400">
                  {frontmatter.date}
                </h2>
                <p className="dark:text-slate-100 text-slate-500">
                  {frontmatter.description}
                </p>
                <hr className="h-px my-6 bg-san-juan-300 border-0 dark:bg-slate-500" />
                <h2>{frontmatter.meetupLink}</h2>
                <div
                  className="prose dark:prose-dark"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
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
    <SEO title={`DevMemphis - Blog - ${markdownRemark?.frontmatter?.title}`} />
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
