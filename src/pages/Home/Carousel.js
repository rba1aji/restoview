import { Carousel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { carouselImages } from '../../reducers/constants';

export default function Carousel() {
  // console.log(carouselImages);
  return (
    <Carousel variant="dark" indicators="">
      {carouselImages.map((item) => {
        return (
          <Carousel.Item>
            <Link to={item.navlink}>
              <img
                className="d-block w-100"
                // src={`${item.img}&bg=e5e5e5`}
                src={item.img}
                alt={item.alt}
                style={{ borderRadius: '5px' }}
              />
            </Link>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}