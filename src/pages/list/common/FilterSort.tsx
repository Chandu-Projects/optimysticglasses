import React, { FC, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadListFrames } from '../../../redux/root_actions';

interface Props {}

const FilterSort: FC<Props> = (props: Props) => {
  //useDispatch
  const dispatch = useDispatch();

  //useSelector
  const loading = useSelector((state: any) => state.List.loading);
  const image = useSelector((state: any) => state.List.image);
  const frames = useSelector((state: any) => state.List.frames);

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadListFrames());
    }, 1000);
  }, []);

  return (
    <div className='full-width-carousel' key={'main-frame'}>
      <img
        src={image}
        alt={'main-frame'}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default FilterSort;
