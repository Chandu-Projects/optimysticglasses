import { FC } from 'react';
import { Label as Label1 } from 'reactstrap';

interface Props {
  value: string;
  icon?: any;
  rightAlign?: boolean;
  style?: any;
}

const Label: FC<Props> = (props: Props) => {
  return (
    <Label1 className='font-label' style={{ ...props.style }}>
      {!props.rightAlign && props.icon && (
        <span className='label-icon-left'>{props.icon}</span>
      )}
      {props.value}
      {props.rightAlign && props.icon && (
        <span className='label-icon-right'>{props.icon}</span>
      )}
    </Label1>
  );
};

export default Label;
