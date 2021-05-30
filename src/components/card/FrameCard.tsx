import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
interface Props {
  frame: any;
  onClick: any;
}

const FrameCard = (props: Props) => {
  const frame = props.frame;
  return (
    <div className='frame-card-div' onClick={() => props.onClick(frame.id)}>
      <Card className='frame-card'>
        <CardImg
          top
          width='100%'
          src={frame.src}
          alt='Image not available'
          className='frame-card-image'
        />
        <CardBody className='frame-card-body'>
          <CardTitle className='frame-card-title'>{frame.title}</CardTitle>
          <CardText className='frame-card-description'>
            {frame.description}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default FrameCard;
