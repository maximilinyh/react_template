import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./MainSlider.scss";

const MainSlider = () => {
  //use state
  const [index, setIndex] = useState(0);

  function handleSelect(selectedIndex, e) {
    setIndex(selectedIndex);
  }

  //slide content
  const sliderItems = [
    {
      id: 1,
      topText: "Creative Template",
      title: "Welcome to MoGo",
      buttonText: "Learn more",
      href: "/"
    },

    {
      id: 2,
      topText: "Creative Template",
      title: "Our works",
      buttonText: "Read more",
      href: "/"
    },

    {
      id: 3,
      topText: "Creative Template",
      title: "About us",
      buttonText: "Read more",
      href: "/"
    },

    {
      id: 4,
      topText: "Creative Template",
      title: "Contact us",
      buttonText: "Contact",
      href: "/"
    }
  ];

  const sliderItem = sliderItems.map(item => {
    return (
      <Carousel.Item key={item.id} className="text-center">
        <p className="carousel__top-text">{item.topText}</p>
        <h3 className="carousel__title decorate-border decorate-border--white mb-5">
          {item.title}
        </h3>
        <a href={item.href} className="carousel__button btn btn-border">
          {item.buttonText}
        </a>
      </Carousel.Item>
    );
  });

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      controls={false}
      interval={null}
    >
      {sliderItem}
    </Carousel>
  );
};

export default MainSlider;
