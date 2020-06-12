module.exports = {
  siteMetadata: { title: "Josep Bria Portfolio", author: "Josep Bria" },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      //Look for files in the filesistem, but we can add options.
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        //Busca en la carpeta blog para sources
        path: `${__dirname}/blog/`,
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
  ],
}
