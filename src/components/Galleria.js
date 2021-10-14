import React from 'react'
import Gallery from 'react-photo-gallery'
import { photos } from './photos'

const BasicRows = () =>{
    return(
      < Gallery margin={4} photos={photos} />  
    )
} 

export default BasicRows