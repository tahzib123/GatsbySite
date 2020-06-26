/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */


module.exports = {
  /* Your site config here */

  plugins: [
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'b8k2bnxfeu30',
        accessToken: 'F68uiduIFxHYAEjrh489noC0HiBds555l2gjgHXQEgc',
      },
    },
  ],
}
