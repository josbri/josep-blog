const path = require("path")

//Creating a new page for each blogpost
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //Path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")
  //Get all the slugs
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (res.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.frontmatter.slug}`,
      context: {
        slug: edge.node.frontmatter.slug,
      },
    })
  })
}

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   //Only the ones labeled as MarkdownRemark
//   if (node.internal.type === "MarkdownRemark") {
//     //We get the slugs for the markdown pages, and remove the .md so we can use it for the url.
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }
