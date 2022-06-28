module.exports = {
  siteMetadata: {
    title: `WWW.JADEN.KIM`,
    siteUrl: `https://www.jaden.kim`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/images"
    },
    __key: "images"
  }]
};