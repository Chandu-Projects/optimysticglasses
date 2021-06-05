import React, { FC } from 'react';
import { Col, Container, Row } from 'reactstrap';
// import { frames } from './jsons/frames';
import FrameCard from '../../components/card/FrameCard';
import Title from '../../components/title/Title';

interface Props {}

const PopularFrames: FC<Props> = (props: Props) => {
  const onClick = (id: string) => {
    alert(`load details of ${id}`);
  };
  const frames: any = [];
  return (
    <Container>
      <Title value={'Popular Frames'} />
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
