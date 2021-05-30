import React, { FC } from 'react';

interface Props {}

const Body: FC<Props> = (props) => {
  return (
    <div id='body' data-spy='scroll' data-target='#navbarResponsive'>
      {props.children}
    </div>
  );
};

export default Body;
