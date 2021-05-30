import React from 'react';
import { Label as Label1 } from 'reactstrap';

interface Props {
  value: string;
  icon?: any;
  rightAlign?: boolean;
  style?: any;
}

const Label = (props: Props) => {
  return (
    <Label1 className='label-css' style={{ ...props.style }}>
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
