import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import Dropdown from '../../../components/dropdown/Dropdown';
import Input from '../../../components/input/Input';
import { loadListFrames, sortList } from '../../../redux/root_actions';

interface Props {}

const Header: FC<Props> = (props: Props) => {
  //useDispatch
  const dispatch = useDispatch();

  //useSelector
  const selected = useSelector((state: any) => state.List.selected);

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadListFrames());
    }, 1000);
  }, []);

  const onSelect = (value: number) => {
    const selected = options.find((item: any) => item.value === value);
    dispatch(sortList(value, selected));
  };

  const options = [
    { label: 'Sort By', value: 0 },
    { label: 'New Arrivals', value: 1 },
    { label: 'Best Seller', value: 2 },
    { label: 'Price Low To High', value: 3 },
    { label: 'Price Hight To Low', value: 4 },
  ];

  return (
    <Container fluid={true}>
      <Row className='mb-4'>
        <Col lg='9' md='9' sm='9' xs='9' className='mb-1'>
          <Input
            placeholder='What are you looking for?'
            value={''}
            id='listSearch'
            onChange={() => {}}
          />
        </Col>
        <Col
          lg='3'
          md='3'
          sm='3'
          xs='3'
          className='px-0'
          style={{ marginTop: '-8px', marginLeft: '0px' }}
        >
          <Dropdown
            options={options}
            onSelect={onSelect}
            selected={selected}
            // className='d-flex justify-content-end'
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
