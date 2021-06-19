import React, { FC } from 'react';
import CarouselLoader from '../loader/CarouselLoader';

interface Props {
  loading?: boolean;
  src: string;
}

const FullwidthImage: FC<Props> = (props: Props) => {
  //useSelector
  const loading = props.loading;
  const src = props.src;

  if (loading) {
    return <CarouselLoader />;
  }

  return (
    <div className='full-width-carousel'>
      <img
        src={src}
        alt=''
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default FullwidthImage;
