/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gadgets 4 Guys",
    titleTemplate: "%s · Budget Gifts",
    description:
      "This is a site where you will find gifts for men for any occassion. We focus on gadgets for men however there are lots of different products to discover.",
    
    image: "/images/logo9.png",
    
  },

  plugins: [
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Gadgets For Guys",
        short_name: "G4G",
        start_url: "/",
        background_color: "#1E213A",
        theme_color: "#2A2E52",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/logo15.png", 
        crossOrigin: `use-credentials`,  //optional CORS dependence
      }
    },
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: process.env.GOOGLE_TRACKING_ID,
        }
    },
  ],
}
