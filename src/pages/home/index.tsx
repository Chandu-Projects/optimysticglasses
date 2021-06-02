import React, { FC, Fragment } from 'react';
import FullWidth from '../../components/carousel/FullWidth';
import { carousel } from './jsons/carousel';
import PopularFrames from './PopularFrames';
import PopularSunglasses from './PopularSunglasses';

interface Props {}

const Home: FC<Props> = (props: Props) => {
  const onImageClick = (id: string) => {
    alert(`load details of ${id}`);
  };
  return (
    <div id='home' className='offset'>
      {/* <h1 style={{ color: 'white', marginTop: '4rem' }}></h1> */}
      <FullWidth items={carousel} onClick={onImageClick} />
      <Fragment>
        <PopularFrames />
        <PopularSunglasses />
      </Fragment>
    </div>
  );
};

export default Home;
