import React from 'react'
import Gallery from 'react-photo-gallery'
import { photos } from './photos'

const GalleriaKuvat = () => {

  function testing(e) {
    //console.log(e.target.alt)
    e.target.children.innerHTML = e.target.alt;
    e.target.imageText =e.target.alt;
    //console.log(e.target.children.innerHTML)
    //console.log(e.target.imageText)
    // e.target.alt.style.visibility = 'visible';
  }

  function testingTwo(e) {
    //console.log('hei')
    //e.target.alt.style.visibility = 'hidden';
  }

  return (
    <div onMouseOver={testing}>
      <Gallery className="gallery" onMouseOut={testingTwo} margin={4} targetRowHeight={600} photos={photos}>
        <p className="imageText"></p>
      </Gallery>
    </div>
  )
}

export default GalleriaKuvat