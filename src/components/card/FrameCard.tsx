import { CardImg } from 'reactstrap';
interface Props {
  frame: any;
  onClick: any;
}

const FrameCard = (props: Props) => {
  const frame = props.frame;
  return (
    <div className='frame-card-wrapper' onClick={() => props.onClick(frame.id)}>
      <div className='frame-card'>
        <CardImg width='100%' src={frame.src} alt='Image not available' />
        {frame.title && <p className='font-frame-card-title'>{frame.title}</p>}
        {frame.description && (
          <p className='font-wt-500'>{frame.description}</p>
        )}
      </div>
    </div>
  );
};

export default FrameCard;
