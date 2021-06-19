import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import Checkbox from '../../../components/checkbox/Checkbox';
import Collapsible from '../../../components/collapsible/Collapsible';
import SmallImage from '../../../components/image/SmallImage';
import { loadListFrames } from '../../../redux/root_actions';
import {
  aviator,
  cateye,
  fullrim,
  halfrim,
  rectangle,
  rimless,
  round,
  square,
  wayfarer,
} from './jsons/frames';

interface Props {}

const Filter: FC<Props> = (props: Props) => {
  //useDispatch
  const dispatch = useDispatch();

  //useSelector
  const selected = useSelector((state: any) => state.List.selected);

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadListFrames());
    }, 1000);
  }, []);

  return (
    <Container fluid={true}>
      <p className='font-filter-title' style={{ marginLeft: '-8px' }}>
        Filter Records By
      </p>
      <Collapsible title='Frame Type' isOpen={true}>
        <Row className='mb-4'>
          <Col lg='4' md='4' sm='6' xs='6' className='px-1 mb-2'>
            <SmallImage frame={fullrim} onClick={() => {}} isSelected={false} />
          </Col>
          <Col lg='4' md='4' sm='6' xs='6' className='px-1 mb-2'>
            <SmallImage frame={rimless} onClick={() => {}} isSelected={true} />
          </Col>
          <Col lg='4' md='4' sm='6' xs='6' className='px-1 mb-2'>
            <SmallImage frame={halfrim} onClick={() => {}} isSelected={true} />
          </Col>
        </Row>
      </Collapsible>
      <Collapsible title='Frame Shape' isOpen={true}>
        <Row className='mb-4'>
          <Col lg='4' md='4' sm='6' xs='6' className='px-1 mb-2'>
            <SmallImage
              frame={rectangle}
              onClick={() => {}}
              isSelected={false}
            />
          </Col>
          <Col lg='4' md='4' sm='6' xs='6' className='px-1 mb-2'>
            <SmallImage frame={round} onClick={() => {}} isSelected={true} />
          </Col>
          <Col lg='4' md='4' sm='6' xs='6' className='px-1 mb-2'>
            <SmallImage frame={cateye} onClick={() => {}} isSelected={true} />
          </Col>

          <Col lg='4' md='4' sm='6' xs='6' className='px-1 mb-2'>
            <SmallImage
              frame={wayfarer}
              onClick={() => {}}
              isSelected={false}
            />
          </Col>
          <Col lg='4' md='4' sm='6' xs='6' className='px-1 mb-2'>
            <SmallImage frame={aviator} onClick={() => {}} isSelected={true} />
          </Col>
          <Col lg='4' md='4' sm='6' xs='6' className='px-1 mb-2'>
            <SmallImage frame={square} onClick={() => {}} isSelected={true} />
          </Col>
        </Row>
      </Collapsible>
      <Collapsible title='Frame Color'>
        <Row className='mb-4'>
          <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
            <Checkbox title='Black' onClick={() => {}} />
          </Col>
          <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
            <Checkbox title='Brown' onClick={() => {}} />
          </Col>
          <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
            <Checkbox title='Blue' onClick={() => {}} />
          </Col>
          <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
            <Checkbox title='Grey' onClick={() => {}} />
          </Col>
          <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
            <Checkbox title='Golden' onClick={() => {}} />
          </Col>
          <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
            <Checkbox title='Green' onClick={() => {}} />
          </Col>
        </Row>
      </Collapsible>
      <Collapsible title='Brand'>
        <Row className='mb-4'>
          <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
            <Checkbox title='Titan' onClick={() => {}} />
          </Col>
          <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
            <Checkbox title='Rayban' onClick={() => {}} />
          </Col>
        </Row>
      </Collapsible>
      <Collapsible title='Price Range'>
        <Row className='mb-4'>
          <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
            <Checkbox title='499-999' onClick={() => {}} />
          </Col>
          <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
            <Checkbox title='999-1999' onClick={() => {}} />
          </Col>
          <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
            <Checkbox title='1999-2999' onClick={() => {}} />
          </Col>
        </Row>
      </Collapsible>
      <Collapsible title='Gender'>
        <Row className='mb-4'>
          <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
            <Checkbox title='Men' onClick={() => {}} />
          </Col>
          <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
            <Checkbox title='Women' onClick={() => {}} />
          </Col>
        </Row>
      </Collapsible>
      <Collapsible title='Frame Size'>
        <Row className='mb-4'>
          <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
            <Checkbox title='Small' onClick={() => {}} />
          </Col>
          <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
            <Checkbox title='Medium' onClick={() => {}} />
          </Col>
          <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
            <Checkbox title='Wide' onClick={() => {}} />
          </Col>
          <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
            <Checkbox title='Extra Wide' onClick={() => {}} />
          </Col>
        </Row>
      </Collapsible>
      <Collapsible title='Frame Width'>
        <Row className='mb-4'>
          <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
            <Checkbox title='128 MM' onClick={() => {}} />
          </Col>
          <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
            <Checkbox title='129 MM' onClick={() => {}} />
          </Col>
        </Row>
      </Collapsible>
    </Container>
  );
};

export default Filter;
