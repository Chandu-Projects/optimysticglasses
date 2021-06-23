import React, { FC } from 'react';
import { Col, Container, Row } from 'reactstrap';
import FrameCard from '../../components/card/FrameCard';
import CardLoader from '../../components/loader/CardLoader';

interface Props {
  frames: Array<any>;
  onClick: any;
  loading: boolean;
  steps: number;
}

const Frames: FC<Props> = (props: Props) => {
  const loading = props.loading;
  const frames = props.frames;
  const steps = props.steps;

  const getFrames = () => {
    if (loading) {
      return (
        <Row>
          {Array.from({ length: steps }).map(() => (
            <Col lg='4' md='4' sm='12' xs='12' className='mb-4'>
              <CardLoader />
            </Col>
          ))}
        </Row>
      );
    } else {
      return (
        <Row>
          {frames.map((frame: any) => (
            <Col lg='4' md='4' sm='12' xs='12' className='mb-4'>
              <FrameCard
                frame={frame}
                onClick={() => props.onClick(frame.id)}
              />
            </Col>
          ))}
        </Row>
      );
    }
  };

  return <Container fluid={true}>{getFrames()}</Container>;
};

export default Frames;
