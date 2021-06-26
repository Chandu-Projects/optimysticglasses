import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import Checkbox from '../../../components/checkbox/Checkbox';
import Collapsible from '../../../components/collapsible/Collapsible';
import SmallImage from '../../../components/image/SmallImage';
import { loadListFrames } from '../../../redux/root_actions';

interface Props {}

const Filter: FC<Props> = (props: Props) => {
  //useDispatch
  const dispatch = useDispatch();

  //useSelector
  const filterAttr = useSelector((state: any) => state.List.filterAttr);

  const frameType = filterAttr.frameType || [];
  const frameShape = filterAttr.shape || [];
  const frameColor = filterAttr.color || [];
  const frameBrand = filterAttr.brand || [];
  const priceRange = filterAttr.priceRange || [];
  const gender = filterAttr.gender || [];
  const frameSize = filterAttr.size || [];
  const frameWidth = filterAttr.width || [];

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
          {frameType.map((type: any) => {
            return (
              <Col lg='4' md='4' sm='6' xs='6' className='px-1 mb-2'>
                <SmallImage frame={type} onClick={() => {}} />
              </Col>
            );
          })}
        </Row>
      </Collapsible>
      <Collapsible title='Frame Shape' isOpen={false}>
        <Row className='mb-4'>
          {frameShape.map((type: any) => {
            return (
              <Col lg='4' md='4' sm='6' xs='6' className='px-1 mb-2'>
                <SmallImage frame={type} onClick={() => {}} />
              </Col>
            );
          })}
        </Row>
      </Collapsible>
      <Collapsible title='Frame Color'>
        <Row className='mb-4'>
          {frameColor.map((item: any) => {
            return (
              <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
                <Checkbox
                  title={item.title}
                  onClick={() => {}}
                  checked={item.selected}
                />
              </Col>
            );
          })}
        </Row>
      </Collapsible>
      <Collapsible title='Brand'>
        <Row className='mb-4'>
          {frameBrand.map((item: any) => {
            return (
              <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
                <Checkbox
                  title={item.title}
                  onClick={() => {}}
                  checked={item.selected}
                />
              </Col>
            );
          })}
        </Row>
      </Collapsible>
      <Collapsible title='Price Range'>
        <Row className='mb-4'>
          {priceRange.map((item: any) => {
            return (
              <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
                <Checkbox
                  title={item.title}
                  onClick={() => {}}
                  checked={item.selected}
                />
              </Col>
            );
          })}
        </Row>
      </Collapsible>
      <Collapsible title='Gender'>
        <Row className='mb-4'>
          {gender.map((item: any) => {
            return (
              <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
                <Checkbox
                  title={item.title}
                  onClick={() => {}}
                  checked={item.selected}
                />
              </Col>
            );
          })}
        </Row>
      </Collapsible>
      <Collapsible title='Frame Size'>
        <Row className='mb-4'>
          {frameSize.map((item: any) => {
            return (
              <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
                <Checkbox
                  title={item.title}
                  onClick={() => {}}
                  checked={item.selected}
                />
              </Col>
            );
          })}
        </Row>
      </Collapsible>
      <Collapsible title='Frame Width'>
        <Row className='mb-4'>
          {frameWidth.map((item: any) => {
            return (
              <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
                <Checkbox
                  title={item.title + ' ' + item.unit}
                  onClick={() => {}}
                  checked={item.selected}
                />
              </Col>
            );
          })}
        </Row>
      </Collapsible>
    </Container>
  );
};

export default Filter;
