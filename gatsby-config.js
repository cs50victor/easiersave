module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Sans`,
            variants: [`400`,`700`]
          }
        ],
      },
    },
  ]
}
