module.exports = {
  siteMetadata: {
    title: `client1`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components","gatsby-plugin-material-ui", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/IconLogo.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        'material icons',
        'roboto:300,400,500,700',
      ],
    }
  },
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-P7ZFGK3",

      includeInDevelopment: false,

    },
  },
]
};