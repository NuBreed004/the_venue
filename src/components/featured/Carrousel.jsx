import React from 'react';
import Slider from 'react-slick';
import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';



const Carrousel = () => {

  const slides = [slide_one, slide_two, slide_three]

  const getImage = (images) => (
    images.map((image, index) =>
    <div
    key={index}
    style={{
      background: `url(${image})`,
      height: `${window.innerHeight}px`,
      backgroundSize: 'cover'
    }}></div>)
  )

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };

    return (
      <div
        style={{
          height: `${window.innerHeight}px`,
          overflow: 'hidden',
          background: 'red'
        }}
        className="carrousel_wrapper">
        <Slider {...settings}>


          <div className="carrousel_image">
              {getImage(slides)}
          </div>


        </Slider>
      </div>
    )
}

export default Carrousel;
