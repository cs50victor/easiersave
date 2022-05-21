const youtubedl = require("youtube-dl")
const urlChecker = new RegExp("^(http|https)://")

// http://localhost:8000/api/downloader?videoUrl=https://www.youtube.com/watch?v=JGwWNGJdvx8

export default async function downloader(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET")
    return res.status(405).json({ error: "Method Not Allowed" })
  }

  const { videoUrl } = req.query

  if (urlChecker.test(videoUrl)) {
      
      await youtubedl.getInfo(videoUrl, (error, info)=>{
        if (error){
          return res.status(404).json({
            error: "Unable to download video. Please try a different url or try again later.",
          })
        } 
        return res.status(200).json({
          url: info.url,
          thumbnail: info.thumbnail,
          title: info.title
        })
      })

  } else {
    return res.status(400).json({
      error: "Invalid Url. Make sure your link starts with 'http:// or https://'",
    })
  }
}
