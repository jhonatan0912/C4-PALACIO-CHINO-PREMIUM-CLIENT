import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <Carousel
    className='my-10'
      infiniteLoop={true}
      showThumbs={false}
    >
      <div>
        <img src="/slider1.jpg" />
      </div>
      <div>
        <img src="/slider2.jpg" />
      </div>
      <div>
        <img src="/slider3.jpg" />
      </div>
    </Carousel>
  )
}

export default Slider