module.exports = {
  siteMetadata: {
    title: `Evan Szymkowicz Starter`,
    description: `Barebones Gatsby project to get some more experience with the framework.`,
    author: `@evanszymkowicz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0055A2`,
        theme_color: `#0055A2`,
        display: `minimal-ui`,
        icon: `src/images/dev-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
