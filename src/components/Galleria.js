import React from 'react'
import Gallery from 'react-photo-gallery'
import { photos } from './photos'

const Galleria = () => {
  return (
    <Gallery margin={4} photos={photos} />
  )
}

export default Galleria