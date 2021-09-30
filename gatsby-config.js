module.exports = {
  siteMetadata:  {
    title: `Remigo`,
    description: `Reimaging the way Agents, Buyers, and Sellers to communicate about and share Real-Estate`,
    author: `tobias@remigo.com`,
    siteUrl: `https://www.google.com/`,
    keywords: ','
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Remigo Website`,
        short_name: `Remigo`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/IconLogo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
