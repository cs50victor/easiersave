const youtubedl = require("youtube-dl-exec")
const urlChecker = new RegExp("^(http|https)://")

export default async function downloader(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET")
    return res.status(405).json({ error: "Method Not Allowed" })
  }

  const { videoUrl } = req.query

  if (urlChecker.test(videoUrl)) {
    try {
      const { url, title, thumbnail, formats } = await youtubedl(videoUrl, {
        dumpSingleJson: true,
        noWarnings: true,
        noCallHome: true,
        noCheckCertificate: true,
        preferFreeFormats: true,
        youtubeSkipDashManifest: true,
        referer: videoUrl,
        socketTimeout: 10,
      })

      const fileUrl =
        url ||
        formats
          .filter((format) => format.vcodec !== "none" && format.acodec !== "none")
          .sort()
          .pop().url

      console.log(`file url:\t${fileUrl}]\ntitle:\t${title}\nthumbnail:\t${thumbnail}`)

      return res.status(200).json({ fileUrl, thumbnail, title })
    } catch (error) {
      console.log(error)
      return res
        .status(400)
        .json({ error: "Unable to download video. Please try a different url or try again later." })
    }
  } else {
    return res.status(400).json({
      error: "Invalid Url. Make sure your link starts with 'http:// or https://'",
    })
  }
}
