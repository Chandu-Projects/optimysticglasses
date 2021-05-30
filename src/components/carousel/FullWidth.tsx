import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';

interface Props {
  items: any;
  onClick: any;
}

const FullWidth = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [animating, setAnimating] = useState(false);

  const items = props.items;

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item: any) => {
    return (
      <CarouselItem
        className='custom-tag'
        tag='div'
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        // onEnter={() => {
        //   alert('clicked');
        // }}
        slide={true}
      >
        <img
          src={item.src}
          alt={item.altText}
          style={{
            width: '100%',
            height: '100%',
          }}
          onClick={() => props.onClick(item.id)}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 75vh;
            //   background: black;
            }`}
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        autoPlay={true}
        keyboard={true}
        ride='carousel'
        pause='hover'
        interval={4000}
        slide={true}
        enableTouch={true}
      >
        <CarouselIndicators
          key={'indicators'}
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
      </Carousel>
    </div>
  );
};

export default FullWidth;
