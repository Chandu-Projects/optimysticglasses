import { FC } from 'react';

interface Props {
  title: string;
  onClick: any;
  checked?: boolean;
}

const Checkbox: FC<Props> = (props: Props) => {
  return (
    <div className='form-check'>
      <input
        type='checkbox'
        className='form-check-input'
        id='checbox'
        onClick={props.onClick}
        checked={props.checked}
      />
      <label className='font-checkbox'>{props.title}</label>
    </div>
  );
};

export default Checkbox;
