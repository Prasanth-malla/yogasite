import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";

function ImageUrl(props) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const getImageUrl = async () => {
      const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";
      const response = await fetch(corsProxyUrl + props.url);
      const html = await response.text();
      const parsedHtml = ReactHtmlParser(html);
      const imgTag = parsedHtml.find((element) => element.type === "img");
      const imgSrc = imgTag.props.src;
      setImageUrl(imgSrc);
    };
    getImageUrl();
  }, [props.url]);

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="First Image" />}
      <p>{props.url}</p>
    </div>
  );
}

export default ImageUrl;
