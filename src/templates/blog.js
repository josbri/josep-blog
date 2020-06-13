import React from "react"
import { graphql } from "gatsby"
import Head from "../components/head"

const Blog = props => {
  return (
    <div>
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      html
    }
  }
`
export default Blog
