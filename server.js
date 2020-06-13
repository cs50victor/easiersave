const express = require("express");
const cors = require("cors");
const youtubedl = require("youtube-dl");
const contentDisposition = require('content-disposition');
const app = express();

app.use(cors());
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log("Server is working at port 4000 !!")
});


// https://twitter.com/BlocboyShinra/status/1270934942948691970?s=20
app.get("/downloader", (req, res)=>{
    
    const URL = String(req.query.URL);

    const video = youtubedl(URL);

    video.on("info", function(info){
        console.log("Download Started");
        console.log("filename: " + info.title);
        const fileHeaderName = `${info.title}.mp4`;

        res.header(
            "Content-Disposition",
                    contentDisposition(fileHeaderName)
        );
        
        youtubedl(URL).pipe(res)
    })
    
    /*video.on("end", ()=>{
        resolve()
    })*/

    video.on("end", function () {
        console.log("finished");
      });
});
