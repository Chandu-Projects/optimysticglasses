import { FC, useState } from 'react';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';

interface Props {
  items: any;
  onClick: any;
}

const CarouselCard: FC<Props> = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const slides = items.map((item: any) => {
    return (
      <CarouselItem
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
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
        {slides}
        <CarouselControl
          direction='prev'
          directionText='Previous'
          onClickHandler={previous}
        />
        <CarouselControl
          direction='next'
          directionText='Next'
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default CarouselCard;
