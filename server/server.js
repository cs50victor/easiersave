const express = require("express");
const cors = require("cors");
const youtubedl = require("youtube-dl");
const contentDisposition = require('content-disposition');
const app = express();

app.use(cors());
const PORT = process.env.PORT || 4000;


/*app.use(express.static(__dirname + "/public"));

app.get("/", (req, res)=>{
    res.render("index");
})*/

/*app.get("/", (req, res, next) => {
    throw new Error("Something went wrong!");
    res.send("Welcome to main route!");
  });
  
app.get("/about", (req, res, next) => {
    res.send("This is the about route!");
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

*/
// https://twitter.com/BlocboyShinra/status/1270934942948691970?s=20
app.get("/downloader", (req, res, next)=>{
    const URL = String(req.query.URL);
    //.finally(()=> this.setState({loadingResult: false}))

    //! use callback function .on to get errors
        const video = youtubedl(URL);
    
        video.on('error', (err)=> {
            res.json({message: "Invalid Link or unsupported website."}) 
        })
        
        video.on("info", (info)=>{
            console.log("Download Started");
            console.log("filename: " + info.title);
            console.log("thumbnail: " + info.thumbnail)
            console.log("url: " + info.url)
            res.json({url: info.url, thumbnail: info.thumbnail, title:info.title })
            //const fileHeaderName = `${info.title}.mp4`;
            res.header({
                "Connection": "keep-alive",
                //"Content-Disposition":contentDisposition(fileHeaderName)
            });

            //youtubedl(URL).pipe(res);
        });
});

//error handler middleware

/* app.use((error, req, res, next) => {
    console.error(error); // log an error
    res.render(‘errorPage’) // Renders an error page to user!
    
    res.status(error.status || 500).send({
      error: {
        status: error.status || 500,
        message: error.message || 'Internal Server Error',
      },
    });
}); 
*/


app.listen(PORT, ()=>{
    console.log(`Server is working at port ${PORT} !!`)
});


