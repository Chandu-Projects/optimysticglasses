import React, { FC } from 'react';

interface Props {
  children?: any;
}

const Body: FC<Props> = (props: Props) => {
  return (
    <div id='body' data-spy='scroll' data-target='#navbarResponsive'>
      {props.children}
    </div>
  );
};

export default Body;
