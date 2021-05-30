import React, { FC } from 'react';
import FullWidth from '../../components/carousel/FullWidth';
import { carousel } from './jsons/carousel';
import PopularFrames from './PopularFrames';

interface Props {}

const Home: FC<Props> = (props) => {
  const onImageClick = (id: string) => {
    alert(`load details of ${id}`);
  };
  return (
    <div id='home' className='offset'>
      {/* <h1 style={{ color: 'white', marginTop: '4rem' }}></h1> */}
      <FullWidth items={carousel} onClick={onImageClick} />
      <div style={{ margin: '2rem auto' }}>
        <PopularFrames />
        <PopularFrames />
        <PopularFrames />
      </div>
    </div>
  );
};

export default Home;
