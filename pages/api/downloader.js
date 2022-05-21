const ytdl = require("ytdl-core")
const urlChecker = new RegExp("^(http|https)://")

// http://localhost:8000/api/downloader?videoUrl=https://www.youtube.com/watch?v=JGwWNGJdvx8

export default async function downloader(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET")
    return res.status(405).json({ error: "Method Not Allowed" })
  }

  const { videoUrl } = req.query

  if (urlChecker.test(videoUrl)) {
    try {
      let info = await ytdl.getInfo(videoUrl)

      const url = info.formats
        .filter((video) => video.hasVideo && video.hasAudio)
        .sort((a, b) => a.width > b.width)
        .pop().url
      const thumbnail = info.videoDetails.thumbnails
        .sort((a, b) => a.width > b.width)
        .pop().url
      const title = info.videoDetails.title

      return res.status(200).json({ url, thumbnail, title })
    } catch (error) {
      console.log(error)
      return res.status(404).json({
        error: "Unable to download video. Please try a different Youtube URL.",
      })
    }
  } else {
    return res.status(400).json({
      error: "Invalid Url. Make sure your link starts with 'http:// or https://'",
    })
  }
}
