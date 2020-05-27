import React, {useEffect, useRef, useState} from "react";
import "./App.scss";

function App() {
  const [lightMode, setLightMode] = useState(true);
  const downloadBtn = useRef(null);
  const urlInput = useRef(null);

  useEffect(()=>{
    /*

    const sendUrl =(url)=>{

    }
    downloadBtn.addEventListener("click", ()=>{
      console.log(`URL: ${urlInput.value}`);
      sendURL(urlInput.value);
    });

    const sendURL=(URL)=> {
      window.location.href = `http://localhost:4000/download?URL=${URL}`;
    }
    */
  }, []);


  return (
    <React.Fragment>
      <div className="entirePage">
        <h1>Twitter Downloader</h1>
        <input ref={urlInput}
          placeholder="Video URL e.g. https://www.youtube.com/watch?v=MtN1YnoL46Q"/>
        <button ref={downloadBtn}>Convert</button>
      </div>
    </React.Fragment>
  );
}

export default App;
