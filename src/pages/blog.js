import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <h1>Blogs</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li>
              <Link to={`/blog/${edge.node.frontmatter.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default BlogPage
