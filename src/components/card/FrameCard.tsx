import { useState } from 'react';
import { Badge, CardImg } from 'reactstrap';
interface Props {
  frame: any;
  onClick: any;
}

const FrameCard = (props: Props) => {
  const frame = props.frame;
  const variants = frame.variants || [{ price: '011' }];

  const getSelectedColor = (index: number) => {
    return variants.map((item: any, idx: number) => {
      if (idx === index) {
        return { color: item.code, selected: true };
      }
      return { color: item.code, selected: false };
    });
  };

  const getSelectedImage = (idx: number) => {
    return variants[idx].src;
  };
  const getSelectedPrice = (idx: number) => {
    return variants[idx].price;
  };

  const [images, setImages] = useState(getSelectedImage(0));
  const [colors, setColors] = useState(getSelectedColor(0));
  const [price, setPrice] = useState(getSelectedPrice(0));

  const changeImage = (idx: number) => {
    setColors(getSelectedColor(idx));
    setImages(getSelectedImage(idx));
    setPrice(getSelectedPrice(idx));
  };

  return (
    <div className='frame-card-wrapper'>
      <div className='frame-card'>
        <CardImg
          width='100%'
          src={images[0]}
          alt='Image not available'
          onClick={() => props.onClick(frame.id)}
          className='cursor-pointer'
        />

        <p className='font-frame-card-title mt-2'>
          {frame.brand} {frame.description}
        </p>
        {frame.rating && <Badge color='info'>rating</Badge>}
        <div className='d-flex justify-content-between'>
          <div>
            <div>{price}</div>
            <div>{frame.size}</div>
          </div>
          <div className='d-flex '>
            {colors.map((item: any, idx: number) => {
              return (
                <button
                  style={{
                    backgroundColor: item.color,
                    height: '12px',
                    width: '12px',
                    padding: '2px',
                    borderRadius: '50%',
                    marginRight: '4px',
                    border: item.selected
                      ? `2px solid ${item.color}`
                      : '1px solid blue',
                    borderColor: item.selected ? 'blue' : item.color,
                    cursor: 'pointer',
                    pointerEvents: 'auto',
                  }}
                  onClick={() => changeImage(idx)}
                ></button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameCard;
