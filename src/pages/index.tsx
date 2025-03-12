import React from "react";
import { PostLink } from "../components/PostLink";
import { MeetupLink } from "../components/MeetupLink";
import { graphql, Link, PageProps } from "gatsby";
import { Layout } from "../components/Layout";
import { ContentContainer } from "../components/ContentContainer";
import { Footer } from "../components/Footer";
import { SEO } from "../components/seo";
import { FutureMeetupLink } from "../components/FutureMeetupLink";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

const IndexPage = ({ data }: PageProps<Queries.HomePageQuery>) => {
  const Posts = data.posts["edges"]
    .filter((edge) => !!edge.node.frontmatter?.date) // You can filter your posts based on some criteria
    .map((edge) => (
      <div key={edge.node.id} className="flex-1">
        <PostLink post={edge.node} />
      </div>
    ));

  const Meetups = data.pastMeetups["edges"]
    .filter((edge) => !!edge.node.frontmatter?.date) // You can filter your posts based on some criteria
    .map((edge) => <MeetupLink key={edge.node.id} meetup={edge.node} />);

  const UpcomingMeetups = data.upcomingMeetups["edges"]
    .filter((edge) => !!edge.node.frontmatter?.date) // You can filter your posts based on some criteria
    .map((edge) => <FutureMeetupLink key={edge.node.id} meetup={edge.node} />);

  return (
    <>
      <Layout>
        <div className="dark:bg-san-juan-900 pt-8 bg-san-juan-100">
          <ContentContainer>
            <div className="flex justify-center mb-4">
              <div className="display-contents w-60 ">
                <div className="bg-contain bg-no-repeat display-contents w-60 h-60 dark:bg-[url(/dm-logo.svg)] bg-[url(/dm-logo-light.svg)]" />
              </div>
            </div>

            <h2 className="text-center dark:text-white text-san-juan-900 text-5xl  mb-2">
              <span className="font-bold">Dev</span>
              <span className="font-extralight">Memphis</span>
            </h2>
            <h2 className="text-center dark:text-emerald-500 text-san-juan-800 text-xl font-light mb-6">
              A Meetup For Memphis Software Developers
            </h2>
          </ContentContainer>
        </div>

        <div className="dark:bg-san-juan-950 ">
          <ContentContainer>
            {!!UpcomingMeetups.length && (
              <h2 className="dark:text-emerald-500 text-san-juan-800 text-xl pt-6 mb-6">
                Upcoming Meetups
              </h2>
            )}

            {UpcomingMeetups}
          </ContentContainer>
        </div>

        <div className="dark:bg-gradient-to-t from-slate-950 to-san-juan-950 ">
          <ContentContainer>
            <h2 className="dark:text-emerald-500 text-san-juan-800 text-xl py-6">
              Past Meetups
            </h2>
            {Meetups}
            <div>
              <Link
                className="dark:text-emerald-500 text-san-juan-900 border dark:border-emerald-500 border-san-juan-900 dark:hover:bg-emerald-500 hover:bg-san-juan-900 dark:hover:text-white hover:text-white dark:active:bg-emerald-600 active:bg-san-juan-800 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                to="/meetups"
              >
                All Meetups <ArrowSmallRightIcon className="h-4 w-4 inline" />
              </Link>
            </div>
          </ContentContainer>
        </div>

        <div className="mb-4 pb-6 dark:bg-slate-950">
          <ContentContainer>
            <div className="prose dark:prose-dark p-4 mb-4 mt-8 bg-san-juan-100 dark:bg-san-juan-950 dark:border-none border border-san-juan-200 rounded-md">
              <h2>Speak at DevMemphis</h2>
              <p>
                Interested in speaking at devMemphis? Let us know! We are open
                to presentations, lightning talks, and panel discussions.
              </p>

              <button
                className="dark:text-emerald-500 text-san-juan-800 border dark:border-emerald-500 border-san-juan-800 dark:hover:bg-emerald-500 hover:bg-san-juan-800 dark:hover:text-white hover:text-white dark:active:bg-emerald-600 active:bg-san-juan-700 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Submit a Talk
              </button>
            </div>
          </ContentContainer>
        </div>

        <div className="pb-6">
          <ContentContainer>
            <h2 className="dark:text-emerald-500 text-san-juan-900 text-xl pb-4">
              Recent Updates
            </h2>
            <div className="flex gap-6">{Posts}</div>
            <div>
              <div>
                <Link
                  className="dark:text-emerald-500 text-san-juan-900 border dark:border-emerald-500 border-san-juan-900 dark:hover:bg-emerald-500 hover:bg-san-juan-900 dark:hover:text-white hover:text-white dark:active:bg-emerald-600 active:bg-san-juan-800 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  to="/blog"
                >
                  Blog <ArrowSmallRightIcon className="h-4 w-4 inline" />
                </Link>
              </div>
            </div>
          </ContentContainer>
        </div>

        <div className="dark:bg-slate-950 bg-slate-100 pt-4">
          <ContentContainer>
            <div className="p-4 prose dark:prose-dark">
              <h2>Our Sponsors</h2>
              <p className="pb-8">
                DevMemphis is sponsored by{" "}
                <a href="https://twitter.com/VacoMemphis">Vaco Memphis</a>.
                Looking for a job in the Memphis Area? Visit&nbsp;
                <a href="https://www.vaco.com/recruiting-office-locations/memphis-tennessee-recruiting/">
                  vaco.com
                </a>{" "}
                or email bob@vaco.com
              </p>
            </div>
          </ContentContainer>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <SEO title={`DevMemphis`} />;

export const pageQuery = graphql`
  query HomePage($currentDate: Date!) {
    posts: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { date: { lt: $currentDate } }
        fileAbsolutePath: { regex: "/(blog)/" }
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
  }
`;
