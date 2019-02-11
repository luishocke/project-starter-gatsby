module.exports = {
  siteMetadata: {
    title: `Starter`,
    description: `My personal project starter`,
    author: `Luis Hocke`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-styled-components`
  ]
};
