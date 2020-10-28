module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
        head: false,
        defer: true,
        cookieDomain: "easiersave.com"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `EasierSave`,
        short_name: `EasierSave`,
        start_url: `/`,
        description: `Download videos from Youtube, Twitter, Instagram, Facebook, TikTok and many other websites to your device (iPhone, iPads etc).Twitter, Youtube and other social media sites video downloader.`,
        lang: `en`,
        icon: `src/images/icon.png`,
        cache_busting_mode: `none`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
         workboxConfig: {
          globPatterns: ['**/*']
         }
      }
   }
  ]
}
