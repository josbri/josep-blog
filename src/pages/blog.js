import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import MainLayout from "../templates/mainLayout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "category" } } }
        sort: { order: DESC, fields: [frontmatter___name] }
      ) {
        edges {
          node {
            frontmatter {
              name
              logo {
                publicURL
              }
            }
          }
        }
      }
    }
  `)

  return (
    <MainLayout title="Blogs">
      <li>
        <h1>Notes</h1>
        <p>A place to keep notes as I learn.</p>
        <ol>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <Link
                to={`/blogCategory`}
                state={{ category: edge.node.frontmatter.name }}
              >
                <p>{edge.node.frontmatter.name}</p>
                <img
                  src={edge.node.frontmatter.logo.publicURL}
                  alt={edge.node.frontmatter.name}
                  width="200"
                ></img>
              </Link>
            )
          })}
        </ol>
      </li>
    </MainLayout>
  )
}

export default BlogPage
