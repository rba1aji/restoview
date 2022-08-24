import { Carousel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { carouselImages } from '../../reducers/constants';

export default function Carousel1() {
  // console.log(carouselImages);
  return (
    <Carousel
      variant="dark"
      indicators=""
      interval="2000"
      style={{ objectFit: 'cover', zIndex: '0' }}
    >
      {carouselImages.map((item, index) => {
        return (
          <Carousel.Item style={{ zIndex: '0' }}>
            <Link to={item.navlink}>
              <img
                key={index}
                className="d-block w-100"
                // src={`${item.img}&bg=e5e5e5`}
                src={item.img}
                alt={item.alt}
                style={{ borderRadius: '5px', zIndex: '0', objectFit: 'cover' }}
              />
            </Link>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
