import React, {useState} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

export function NewsSlider() {
  const items: Array<{caption: string; src: string; altText: string}> = [
    {
      caption: 'Sample Caption One',
      src: 'https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png',
      altText: 'Slide One',
    },
    {
      caption: 'Sample Caption Two',
      src: 'https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png',
      altText: 'Slide Two',
    },
  ];

  const [animating, setAnimating] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const itemLength = items.length - 1;

  const changeSlide = (newSlide: number) => {
    if (animating) return;
    setActiveSlide(newSlide);
  };

  const previousButton = () => {
    if (animating) return;
    setActiveSlide(activeSlide === 0 ? itemLength : activeSlide - 1);
  };
  const nextButton = () => {
    if (animating) return;
    setActiveSlide(activeSlide === itemLength ? 0 : activeSlide + 1);
  };

  return (
    <Carousel
      previous={previousButton}
      next={nextButton}
      activeIndex={activeSlide}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeSlide}
        onClickHandler={changeSlide}
      />
      {items.map(item => {
        return (
          <CarouselItem
            key={item.src}
            onExited={() => setAnimating(false)}
            onExiting={() => setAnimating(true)}
          >
            <img className="w-100 h-100" src={item.src} alt={item.altText} />
          </CarouselItem>
        );
      })}
      <CarouselControl
        directionText="Prev"
        direction="prev"
        onClickHandler={previousButton}
      />
      <CarouselControl
        directionText="Next"
        direction="next"
        onClickHandler={nextButton}
      />
    </Carousel>
  );
}
