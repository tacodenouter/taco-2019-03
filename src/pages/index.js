import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`Product Design`, `UI Design`, `UX Design`, `Branding`, `Illustration`, `Digital Design`, `Taco den Outer`, `Taco`, `Hi Mum Said Dad`, `Kindeo`, `Dash Audio`, `Dave's Lab`, `iOS Design`, `App Design`, `Interaction Design`, `Digital Strategy`, `Usability`, `User Experience`, `User Interface Design`]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          {/* <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2> */}
          <h1>PURPOSEFUL PROTOTYPING</h1>
          <p>👋 Hi, I design apps and websites for companies large and small</p>
          <p>↓</p>
        </header>
      )}
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
