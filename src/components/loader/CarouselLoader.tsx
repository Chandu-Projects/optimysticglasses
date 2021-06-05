import ContentLoader from 'react-content-loader';
import { Container } from 'reactstrap';

const CarouselLoader = () => (
  <Container fluid={true} style={{ padding: '0px' }}>
    <ContentLoader
      viewBox='0 0 100% 650'
      height={'75vh'}
      width={'100wh'}
      color='#000'
      backgroundColor='#000'
      backgroundOpacity={0.3}
      speed={3}
    >
      <rect x='0' y='0' rx='0' ry='0' width='100%' height='75vh' />
    </ContentLoader>
  </Container>
);

export default CarouselLoader;
