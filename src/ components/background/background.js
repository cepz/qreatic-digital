import React from 'react'
import BackgroundSlideShow from 'react-background-slideshow'

import image1 from './image/1.jpg'
import image2 from './image/2.jpg'
import image3 from './image/3.jpg'
import image4 from './image/4.jpg'

function background(props) {
    return (
        <div>
            <BackgroundSlideShow
            images={
                [image1, image2, image3, image4]} 
            />
        </div>
    )
}

export default background
