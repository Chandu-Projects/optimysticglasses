import React, { FC, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FullWidth from '../../components/carousel/FullWidth';
import PopularFrames from './PopularFrames';
import PopularSunglasses from './PopularSunglasses';
import { homeCarousel, homePoupularFrames } from './redux/actions';

interface Props {}

const Home: FC<Props> = (props: Props) => {
  //useDispatch
  const dispatch = useDispatch();

  //useSelector
  const carouselLoading = useSelector(
    (state: any) => state.Home.carouselLoading
  );
  const carouselFrames = useSelector((state: any) => state.Home.carouselFrames);

  useEffect(() => {
    setTimeout(() => {
      dispatch(homeCarousel());
      dispatch(homePoupularFrames());
    }, 1000);
  }, []);

  const onImageClick = (id: string) => {
    alert(`load details of ${id}`);
  };
  return (
    <div id='home' className='offset'>
      {/* <h1 style={{ color: 'white', marginTop: '4rem' }}></h1> */}
      <FullWidth
        items={carouselFrames}
        onClick={onImageClick}
        loading={carouselLoading}
      />
      <Fragment>
        <PopularFrames />
        <PopularSunglasses />
      </Fragment>
    </div>
  );
};

export default Home;
