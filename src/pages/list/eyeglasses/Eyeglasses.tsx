import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../common/List';
import Filter from '../common/Filter';

interface Props {}

const Eyeglasses: FC<Props> = (props: Props) => {
  //useDispatch
  const dispatch = useDispatch();

  const onClick = (id: string) => {
    alert(`load details of ${id}`);
  };

  return <List onClick={onClick} filter={<Filter />} />;
};

export default Eyeglasses;
