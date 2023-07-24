import React from "react";
import { MeetupLink } from "../../components/MeetupLink";
import { graphql, PageProps } from "gatsby";
import { Layout } from "../../components/Layout";
import { ContentContainer } from "../../components/ContentContainer";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/seo";
import { FutureMeetupLink } from "../../components/FutureMeetupLink";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

const IndexPage = ({ data }: PageProps<Queries.HomePageQuery>) => {
  const Meetups = data.pastMeetups["edges"]
    .filter((edge) => !!edge.node.frontmatter?.date) // You can filter your posts based on some criteria
    .map((edge) => <MeetupLink key={edge.node.id} meetup={edge.node} />);

  const UpcomingMeetups = data.upcomingMeetups["edges"]
    .filter((edge) => !!edge.node.frontmatter?.date) // You can filter your posts based on some criteria
    .map((edge) => <FutureMeetupLink key={edge.node.id} meetup={edge.node} />);

  return (
    <>
      <Layout>
        <Breadcrumbs name={"Meetups"} />
        <ContentContainer>
          {!!UpcomingMeetups.length && (
            <h2 className="dark:text-emerald-500 text-san-juan-800 text-xl pt-6 mb-6">
              Upcoming Meetups
            </h2>
          )}

          {UpcomingMeetups}
        </ContentContainer>

        <ContentContainer>
          <h2 className="dark:text-emerald-500 text-san-juan-800 text-xl py-6">
            Past Meetups
          </h2>
          {Meetups}
        </ContentContainer>
      </Layout>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <SEO title={`DevMemphis - Meetups`} />;

export const pageQuery = graphql`
  query MeetupsPage($currentDate: Date!) {
    upcomingMeetups: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { date: { gte: $currentDate } }
        fileAbsolutePath: { regex: "/(meetups)/" }
      }
      limit: 2
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
            meetupLink
            meetupNumber
          }
        }
      }
    }
    pastMeetups: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { date: { lt: $currentDate } }
        fileAbsolutePath: { regex: "/(meetups)/" }
      }
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
            meetupLink
            meetupNumber
          }
        }
      }
    }
  }
`;
