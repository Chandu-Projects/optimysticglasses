import React, { FC } from 'react';
import { Col, Container, Row } from 'reactstrap';
import FrameCard from '../../components/card/FrameCard';
import Title from '../../components/title/Title';
import { useSelector } from 'react-redux';
import GrowSpinner from '../../components/loader/GrowSpinner';

interface Props {}

const PopularFrames: FC<Props> = (props: Props) => {
  //useSelector
  const loading = useSelector((state: any) => state.Home.framesLoading);
  const popularFrames = useSelector((state: any) => state.Home.popularFrames);

  const onClick = (id: string) => {
    alert(`load details of ${id}`);
  };

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
          {popularFrames.map((frame: any) => (
            <Col lg='4' md='4' sm='12' xs='12'>
              <FrameCard frame={frame} onClick={onClick} />
            </Col>
          ))}
        </Row>
      );
    }
  };

  return (
    <Container
      style={{
        position: 'relative',
        minHeight: '160px',
      }}
    >
      <Title value={'Popular Frames'} />
      {getFrames()}
    </Container>
  );
};

export default PopularFrames;
