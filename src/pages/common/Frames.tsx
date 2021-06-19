import React, { FC } from 'react';
import { Col, Container, Row } from 'reactstrap';
import FrameCard from '../../components/card/FrameCard';
import GrowSpinner from '../../components/loader/GrowSpinner';

interface Props {
  frames: Array<any>;
  onClick: any;
  loading?: boolean;
}

const Frames: FC<Props> = (props: Props) => {
  const loading = props.loading;
  const frames = props.frames;

  const getFrames = () => {
    if (loading) {
      return (
        <GrowSpinner
          style={{
            right: '45%',
            position: 'absolute',
            top: '80%',
            transform: 'translate(0%, -80%)',
          }}
        />
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
