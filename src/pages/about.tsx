import React from "react";
import { Layout } from "../components/Layout";
import { ContentContainer } from "../components/ContentContainer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Footer } from "../components/Footer";
import { SEO } from "../components/seo";
import VacoLogo from "../../assets/vaco-logo-horizontal-color.svg";
import memtechLogo from "../images/memtech.png";
import codeCrewLogo from "../images/codecrew.png";
import tech901Logo from "../images/TECH901-logo.png";
import codeConnectorLogo from "../images/code-connector.png";
const About = () => {
  return (
    <>
      <Layout>
        <Breadcrumbs name={"About"} />
        <div className="dark:bg-gradient-to-t from-slate-950 to-slate-900">
          <ContentContainer>
            <div className="prose dark:prose-dark mb-6 p-4 ">
              <h2>What&apos;s DevMemphis?</h2>
              <p>
                DevMemphis is a general purpose programming user-group founded
                in 2018 <i>by</i> software developers <i>for</i> software
                developers to accommodate a variety of topics and formats.
              </p>
              <p>
                DevMemphis meets on the first Wednesday of each month at the{" "}
                <a href="https://www.umrfresearchpark.org/">
                  UMRF Research Park
                </a>{" "}
                located at 460 S Highland and is free and open to anyone
                interested in attending.
              </p>
            </div>
          </ContentContainer>
          <div className="dark:bg-san-juan-900 ">
            <ContentContainer>
              <div className="dark:border-none border-y border-san-juan-200">
                <div className="prose dark:prose-dark p-4 my-4 ">
                  <h2>Speak at DevMemphis</h2>
                  <p>
                    Interested in speaking at devMemphis? Let us know! We are
                    open to presentations, lightning talks, and panel
                    discussions.
                  </p>

                  <button
                    className="dark:text-emerald-500 text-san-juan-900 border dark:border-emerald-500 border-san-juan-900 dark:hover:bg-emerald-500 hover:bg-san-juan-900 dark:hover:text-white hover:text-white dark:active:bg-emerald-600 active:bg-san-juan-800 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Submit a Talk
                  </button>
                </div>
              </div>
            </ContentContainer>
          </div>

          <div className="dark:bg-san-juan-950">
            <ContentContainer>
              <div className="prose dark:prose-dark dark:rounded-md p-4 ">
                <h2>Join the Memphis Tech Community</h2>
                <div className="flex gap-8">
                  <div className="basis-3/4 ">
                    <p>
                      To learn more about the amazing tech community in Memphis
                      and find out about other events like DevMemphis, visit{" "}
                      <a href="https://MemphisTechnology.org/">
                        MemphisTechnology.org
                      </a>{" "}
                      , follow{" "}
                      <a href="https://twitter.com/memtech">@memtech</a> on
                      twitter, and check out{" "}
                      <a href="https://www.meetup.com/memphis-technology-user-groups/">
                        {" "}
                        Memphis Technology User Groups{" "}
                      </a>{" "}
                      on meetup.com.
                    </p>
                  </div>
                  <div className="basis-1/4">
                    <img
                      src={memtechLogo}
                      alt="Memtech Logo"
                      className="rounded-md dark:border-blue-500 dark:border opacity-80"
                    />
                  </div>
                </div>
                <p className="m-0">Check out our friends:</p>
                <div className="flex gap-4 items-start">
                  <div className="basis-1/4">
                    <img
                      src={codeCrewLogo}
                      alt="Memtech Logo"
                      className="rounded-md dark:border-blue-500 dark:border opacity-80"
                    />
                  </div>
                  <div className="basis-1/2">
                    <img
                      src={tech901Logo}
                      alt="Memtech Logo"
                      className="p-2 bg-white rounded-md dark:border-blue-500 dark:border opacity-80"
                    />
                  </div>
                  <div className="basis-1/4">
                    <img
                      src={codeConnectorLogo}
                      alt="Memtech Logo"
                      className="rounded-md dark:border-blue-500 dark:border opacity-80"
                    />
                  </div>
                </div>
              </div>
              <div className="prose dark:prose-dark dark:bg-slate-900 mb-8 rounded-md p-4 border-slate-300 border dark:border-none">
                <h2>Contribute to this site</h2>
                <p>
                  See something wrong? Want to make something prettier? This
                  site is built with{" "}
                  <a href="https://www.gatsbyjs.org/">Gatsby</a> and hosted on{" "}
                  <a href="http://github.com/devmemphis/website">Github</a>. We
                  accept pull requests.
                </p>
              </div>
            </ContentContainer>
          </div>
        </div>
        <div className="dark:bg-slate-950 bg-slate-100 pt-4">
          <ContentContainer>
            <div className="p-4 prose dark:prose-dark">
              <h2>Our Sponsors</h2>
              <div className="flex gap-4 items-center">
                <div className="basis-1/3 ">
                  <VacoLogo />
                </div>
                <div className="basis-2/3">
                  <p>
                    DevMemphis is sponsored by{" "}
                    <a href="https://twitter.com/VacoMemphis">Vaco Memphis</a>.
                    Looking for a job in the Memphis Area? Visit&nbsp;
                    <a href="https://www.vaco.com/recruiting-office-locations/memphis-tennessee-recruiting/">
                      vaco.com
                    </a>{" "}
                    or email bob@vaco.com
                  </p>
                </div>
              </div>
            </div>
          </ContentContainer>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export const Head = () => <SEO title={`DevMemphis - About`} />;
export default About;
