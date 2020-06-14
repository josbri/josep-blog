module.exports = {
  siteMetadata: { title: "Josep Bria Portfolio", author: "Josep Bria" },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-styled-components",
    {
      //Look for files in the filesistem, but we can add options.
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        //Busca en la carpeta blog para sources
        path: `${__dirname}/static/blog/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["work sans"],
        display: "swap",
      },
    },
  ],
}
