import React, { useState } from 'react'
import cities from './cityImages.js'
import { Gallery, GalleryImage } from "react-gesture-gallery"

const Carousel = () => {

    const [index, setIndex] = useState(0)

    return (
        <div className="row h-100">
            <Gallery 
                index={index}
                onRequestChange={i => {
                    setIndex(i);
                }}>
                {cities.map(images => (
                    <div className="col-12">
                        <div className="row h-100 justify-content-center">
                            {images.map(image => (
                                <div className="col-6"><div className="position-absolute bg-white cityName"><h4>{image.name}</h4></div><GalleryImage style={{}} src={image.url}/></div>
                            ))}
                        </div>
                    </div>
                ))}
            </Gallery>

        </div>
    )
}

export default Carousel