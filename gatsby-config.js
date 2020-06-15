module.exports = {
  siteMetadata: { title: "Josep Bria Portfolio", author: "Josep Bria" },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-styled-components",
    {
      //Look for blog in the filesistem, but we can add options.
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        //Busca en la carpeta blog para sources
        path: `${__dirname}/static/blog/`,
      },
    },
    {
      //Look for images in the filesistem.
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        //Busca en la carpeta images para sources
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      //Look for categories in the filesistem.
      resolve: "gatsby-source-filesystem",
      options: {
        name: "categories",
        path: `${__dirname}/static/categories/`,
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
        fonts: ["Work Sans", "Roboto Mono"],
        display: "swap",
      },
    },
  ],
}
