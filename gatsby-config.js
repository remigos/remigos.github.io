module.exports = {
  siteMetadata: {
    siteUrl: "https://www.remigo.com/",
    title: "Remigo-website",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        start_url:'/',
        display:'minimal-ui',
        icon:`src/images/iconLogo.png`
      }
    },
  ],
};
