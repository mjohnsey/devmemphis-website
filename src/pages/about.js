import React from "react"

import SEO from "../components/seo"

class About extends React.Component {
  
  render() {

    return (
      <div>
        <SEO title="DevMemphis - What is DevMemphis" />

        <h2>What's DevMemphis?</h2>

        <p>DevMemphis is a general purpose programming usergroup founded in 2018 <i>by</i> Memphis software developers <i>for</i> Memphis software developers.</p>

        <p>While many user groups focus on a narrow topic like a development tool or a programming language, DevMemphis aims
            to accomodate a variety of topics and formats.
        </p>

        <p>DevMemphis meets on the first Tuesday of each month at the Fedex Institute of Technology (FIT) 
            on the university of Memphis Campus and is free and open to anyone interested in attending.
        </p>

        <p>To learn more about the amazing tech community in Memphis and find out about other events like DevMemphis,
            visit MemphisTechnology.org, follow @memtech on twitter, and check out Memphis Technology User Groups on meetup.com.
        </p>

      </div>
    )
  }
}

export default About
