import React, { FC } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadListFrames } from '../../../redux/root_actions';
import Frames from '../../common/Frames';
import ImageFrame from '../../common/ImageFrame';

interface Props {
  onClick: any;
}

const List: FC<Props> = (props: Props) => {
  // useSelector
  const loading = useSelector((state: any) => state.List.loading);
  const image = useSelector((state: any) => state.List.image);
  const frames = useSelector((state: any) => state.List.frames);

  //useDispatch
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadListFrames());
    }, 1000);
  }, []);

  return (
    <div>
      <ImageFrame src={image} loading={loading} />
      <Frames onClick={props.onClick} frames={frames} loading={loading} />
    </div>
  );
};

export default List;
