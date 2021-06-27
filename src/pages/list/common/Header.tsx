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
    { label: 'Best Seller', value: 0 },
    { label: 'New Arrivals', value: 1 },
    { label: 'Price Low To High', value: 2 },
    { label: 'Price Hight To Low', value: 3 },
  ];

  return (
    <Container fluid={true}>
      <Row className='mb-4'>
        <Col lg='8' md='8' sm='8' xs='8' className='mb-1 '>
          <div className='custom-card'>
            <Input
              placeholder='What are you looking for?'
              value={''}
              id='listSearch'
              onChange={() => {}}
              className='border border-white'
              autoFocus={true}
            />
          </div>
        </Col>
        <Col lg='4' md='4' sm='4' xs='4'>
          <div className='d-flex p-2'>
            <div className='font-label'>Sort by: </div>
            <div style={{ marginTop: '-8px' }}>
              <Dropdown
                options={options}
                onSelect={onSelect}
                selected={selected}
                className='font-label'
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
