import ContentLoader from 'react-content-loader';

const CardLoader = () => (
  <ContentLoader
    width={'100%'}
    height={260}
    viewBox='0 0 160 90'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='0' y='0' width='100%' height='100%' />
  </ContentLoader>
);

export default CardLoader;
