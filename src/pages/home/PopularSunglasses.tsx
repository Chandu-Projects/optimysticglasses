import { FC } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { sunglasses } from './jsons/sunglasses';
import SunglassCard from '../../components/card/SunglassCard';
import Title from '../../components/title/Title';

interface Props {}

const PopularSunglasses: FC<Props> = (props: Props) => {
  const onClick = (id: string) => {
    alert(`load details of ${id}`);
  };
  return (
    <Container fluid={true}>
      <Title value={'Chose your Sunglasses'} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Row>
          {sunglasses.map((frame: any) => (
            <Col lg='6' md='6' sm='12' xs='12' className='mb-4 text-center'>
              <SunglassCard frame={frame} onClick={onClick} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default PopularSunglasses;
