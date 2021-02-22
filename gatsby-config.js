require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    FAST_DEV: false,
    FAST_REFRESH: true,
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Smesco Live`,
    description: `Live Shopping - Product Herbal & Spa Lokal Unggulan Smesco`,
    author: `@mhmmr`,
    siteUrl: "https://github.com/mhmmr",
    image: "src/images/cover.jpg"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/smesco-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-postcss",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: '@prismicio/gatsby-source-prismic-graphql',
      options: {
        repositoryName: "smesco", // required
        defaultLang: 'en-us', // optional, but recommended
        prismiCRef: "YDFPiBIAAHbPgGFS",
        accessToken: "MC5ZREZXeUJJQUFDRUFnSUZi.77-9HzM-Qy3vv70QI0bvv73vv73vv70ILE3vv70ERAxmRyhT77-977-9HH4-77-9DT8", // optional
        path: '/preview', // optional, default: /preview
        previews: true, // optional, default: false
        sharpKeys: [
          /image|photo|picture/, // (default)
          'profilepic',
        ],
      }
    }
  ],
}
