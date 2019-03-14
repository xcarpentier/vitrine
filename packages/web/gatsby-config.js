module.exports = {
  siteMetadata: {
    title: `Senior Freelance React-Native Developer Remote`,
    description: `Need to quickly develop a high-end mobile app?`,
    author: `@xcapetir`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans:400,600'],
        },
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-native-web`,
  ],
}
