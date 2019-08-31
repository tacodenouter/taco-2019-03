import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`Product Design`, `UI Design`, `UX Design`, `Branding`, `Illustration`, `Digital Design`, `Taco den Outer`, `Taco`, `Hi Mum Said Dad`, `Kindeo`, `Dash Audio`, `Dave's Lab`, `iOS Design`, `App Design`, `Interaction Design`, `Digital Strategy`, `Usability`, `User Experience`, `User Interface Design`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="">
            Hello!
          </h2>
          <p>
            I'm a Digital Product Designer with experience leading talented teams in London and Hong Kong. I work with ambitious startups, forward-thinking brands and bright agencies.
          </p>
          <p>
            I'm excited by clear user journeys in a beautiful UI. I like to get to a high fidelity prototype quickly, so my go-to tool right now is Framer X, but I also use Sketch and straight HTML+CSS.
          </p>
          <p>
            I have led design teams in London and Hong Kong, mainly client-side, but also at agencies. I like to think of myself as in between strategists and developers.
          </p>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>UI and UX design is my game, but I like illustration too</figcaption>
          </figure>
          <h3 id="dynamic-styles">Dynamic styles</h3>
          <p>
            London comes with photo-centric main layout best suited to
            photography, graphics portfolios and other image-heavy uses.
          </p>
          <p>
            Both post and page templates are light and minimal, with all the
            focus on the content while the design of the theme gets out of the
            way. Beneath the hood, London enjoys the full power of the{" "}
            <a href="https://docs.ghost.org/api/handlebars-themes/">
              Ghost Handlebars Theme API
            </a>{" "}
            to provide limitless customisation options and dynamic styles.
          </p>
          <p>
            Don't forget to check out the{" "}
            <a href="https://docs.ghost.org/integrations/">
              Ghost Integrations Directory
            </a>{" "}
            for more ways to integrate Ghost with your favourite services.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "Figuring_Out_A_UI-wide.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
