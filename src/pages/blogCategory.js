import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import MainLayout from "../templates/mainLayout"

const BlogCategory = ({ category }) => {
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
              tags
            }
          }
        }
      }
    }
  `)

  return (
    <MainLayout title="Blogs">
      <h1>Blogs</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li>
              <Link to={`/blog/${edge.node.frontmatter.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
                <ol>
                  {edge.node.frontmatter.tags.map(tag => {
                    return <p>{tag}</p>
                  })}
                </ol>
              </Link>
            </li>
          )
        })}
      </ol>
    </MainLayout>
  )
}

export default BlogCategory
