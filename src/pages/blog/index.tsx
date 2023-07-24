import React from "react";
import { PostLink } from "../../components/PostLink";
import { graphql, PageProps } from "gatsby";
import { Layout } from "../../components/Layout";
import { ContentContainer } from "../../components/ContentContainer";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/seo";

const IndexPage = ({ data }: PageProps<Queries.BlogQuery>) => {
  const Posts = data.allMarkdownRemark["edges"]
    .filter((edge) => !!edge.node.frontmatter?.date) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <>
      <Layout>
        <Breadcrumbs name={"Blog"} />
        <ContentContainer>
          <div>{Posts}</div>
        </ContentContainer>
      </Layout>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <SEO title={`DevMemphis - Blog`} />;

export const pageQuery = graphql`
  query Blog {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fileAbsolutePath: { regex: "/(blog)/" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            description
          }
        }
      }
    }
  }
`;
