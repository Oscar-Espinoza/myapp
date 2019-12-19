import React, { useState } from 'react'
import cities from './cityImages.js'
import { Gallery } from "react-gesture-gallery"

const Carousel = () => {

  const [index, setIndex] = useState(0)

  return (
    <div className="row pt-5">
      <div className="col-12">
        <Gallery
          index={index}
          onRequestChange={i => {
            setIndex(i);
          }}>
          {cities.map(images => (
            <div className="row justify-content-around">
              {images.map(image => (
                <div className="col-5 pl-0 pr-0" style={{ height: "150px" }} key = {image.name}>
                  <h4 className="position-absolute bg-white cityName" key = {image.name}>{image.name}</h4>
                  <img src={image.url} style={{ height: "120px", maxWidth: "100%" }} alt={image.name + "image city"}></img>
                </div>
              ))}
            </div>
          ))}
        </Gallery>

      </div>
    </div>
  )
}

export default Carousel

//