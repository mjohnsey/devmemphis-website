import React from "react"

import SEO from "../components/seo"

class About extends React.Component {
  
  render() {

    return (
      <div>
        <SEO title="DevMemphis - What is DevMemphis" />

        <h2>What's DevMemphis?</h2>

        <p>DevMemphis is a general purpose programming usergroup founded in 2018 <i>by</i> Memphis software developers <i>for</i> Memphis software developers.</p>

        <p>While many user groups focus on a narrow topic like a development tool or a programming language, DevMemphis aims to accomodate a variety of topics and formats.
        </p>

        <p>DevMemphis meets on the first Tuesday of each month at the <a href="https://www.memphis.edu/fedex/">Fedex Institute of Technology (FIT)</a> on the university of Memphis Campus and is free and open to anyone interested in attending.
        </p>


        <h2>Join the Memphis Tech Community</h2>
        <p>To learn more about the amazing tech community in Memphis and find out about other events like DevMemphis, visit <a href="https://MemphisTechnology.org/">MemphisTechnology.org</a>, follow <a href="https://twitter.com/memtech">@memtech</a> on twitter, and check out <a href="https://www.gatsbyjs.org/">Memphis Technology User Groups</a> on meetup.com.
        </p>

        <p>
          Also check out <a href="http://tech901.org/">Tech 901</a>, <a href="https://codeconnector.io//">Code Connector</a>, and <a href="https://www.code-crew.org/">Code Crew</a>
        </p>

        <h2>Contribute to this site</h2>
        <p>See something wrong? Want to make something prettier? This site is built with <a href="https://www.gatsbyjs.org/">Gatsby</a> and hosted on <a href="http://github.com/devmemphis/website">Github</a>. We accept pull requests.</p>

      </div>
    )
  }
}

export default About
