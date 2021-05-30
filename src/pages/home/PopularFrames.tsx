import React, { FC } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { frames } from './jsons/frames';
import FrameCard from '../../components/card/FrameCard';

interface Props {}

const PopularFrames: FC<Props> = (props: Props) => {
  const onClick = (id: string) => {
    alert(`load details of ${id}`);
  };
  return (
    <Container fluid={true}>
      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        Popular Frames
      </div>
      <Row>
        {frames.map((frame: any) => (
          <Col lg='4' md='4' sm='12' xs='12'>
            <FrameCard frame={frame} onClick={onClick} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularFrames;
