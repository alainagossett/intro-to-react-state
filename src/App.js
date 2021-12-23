// IMPORT useState
import { useState } from "react";
import React from "react";
import "./styles.css";
import imagesArr from "./imageData";
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr

export default function App() {
  // console.log(imagesArr[0].img);
  const [bigImage, setBigImage] = useState(imagesArr[0].img);
  // USE useState TO CREATE  [bigImage, setBigImage]
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY

  const handleClick = (url) => {
    // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
    // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
    setBigImage(url);
  };

  const images = imagesArr.map((image, index) => {
    // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
    return (
      <img
        className="thumb"
        src={image.img}
        alt={image.city}
        key={index}
        onClick={() => handleClick(image.img)}
      />
    );
  });
  // console.log(images);

  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        <img
          id="bigimage"
          src={bigImage}
          alt={bigImage}
          handleClick={handleClick}
        />
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        {/* <img src="" id="bigimage" alt='bigImage'/> */}
      </div>
    </div>
  );
}
