import React, { FC } from 'react';
import CarouselLoader from '../../components/loader/CarouselLoader';

interface Props {
  loading?: boolean;
  src: string;
}

const ImageFrame: FC<Props> = (props: Props) => {
  //useSelector
  const loading = props.loading;
  const src = props.src;

  if (loading) {
    return <CarouselLoader />;
  }

  return (
    <div className='full-width-carousel' key={'main-frame'}>
      <img
        src={src}
        alt={'main-frame'}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default ImageFrame;
