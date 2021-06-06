import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import List from '../common/List';

interface Props {}

const Sunglasses: FC<Props> = (props: Props) => {
  //useDispatch
  const dispatch = useDispatch();

  const onClick = (id: string) => {
    alert(`load details of ${id}`);
  };

  return <List onClick={onClick} />;
};

export default Sunglasses;
