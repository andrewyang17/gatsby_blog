import React from "react"
import { graphql } from "gatsby"

import Post from "../components/Post"
import PrimaryLayout from "../layout/PrimaryLayout"

export default ({ data }) => {
  return (
    <PrimaryLayout col="col-xs-6">
      {data.allWordpressPost.nodes.map(node => (
        <Post
          alt={node.featured_media.slug}
          image={node.featured_media.source_url}
          title={node.title}
          excerpt={node.excerpt}
          readMore={node.slug}
        />
      ))}
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allWordpressPost {
      nodes {
        slug
        title
        excerpt
        featured_media {
          source_url
          slug
        }
      }
    }
  }
`

// export const query = graphql`
//   {
//     allMarkdownRemark {
//       nodes {
//         frontmatter {
//           id
//           title
//           date
//           keyword
//           image
//         }
//         excerpt
//         html
//         fields {
//             slug
//         }
//       }
//     }
//   }
// `
