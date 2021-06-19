import { FC } from 'react';

interface Props {
  frame: any;
  onClick: any;
  isSelected: boolean;
}

const SmallImage: FC<Props> = (props: Props) => {
  const frame = props.frame;
  let classname = 'filter-frame-type-wrapper font-filter-text';
  if (props.isSelected) {
    classname += ' selected-frame';
  }
  return (
    <div
      className={classname}
      onClick={() => props.onClick(frame.id)}
      tabIndex={0}
    >
      <img src={frame.src} width='50px' alt='' />
      <p className='filter-frame-type-desc'>{frame.description}</p>
    </div>
  );
};

export default SmallImage;
