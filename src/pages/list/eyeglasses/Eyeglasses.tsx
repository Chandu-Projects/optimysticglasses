import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../common/List';
import Filter from './Filter';

interface Props {}

const Eyeglasses: FC<Props> = (props: Props) => {
  //useDispatch
  const dispatch = useDispatch();

  //useSelector
  const filterAttr = useSelector((state: any) => state.List.filterAttr);

  const onClick = (id: string) => {
    alert(`load details of ${id}`);
  };

  return <List onClick={onClick} filter={<Filter filterAttr={filterAttr} />} />;
};

export default Eyeglasses;
