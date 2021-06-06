import React, { FC, Fragment } from 'react';
import Title from '../../components/title/Title';
import { useSelector } from 'react-redux';
import Frames from '../common/Frames';

interface Props {}

const PopularFrames: FC<Props> = (props: Props) => {
  //useSelector
  const loading = useSelector((state: any) => state.Home.framesLoading);
  const popularFrames = useSelector((state: any) => state.Home.popularFrames);

  const onClick = (id: string) => {
    alert(`load details of ${id}`);
  };

  return (
    <Fragment>
      <Title value={'Popular Frames'} />
      <Frames loading={loading} frames={popularFrames} onClick={onClick} />
    </Fragment>
  );
};

export default PopularFrames;
