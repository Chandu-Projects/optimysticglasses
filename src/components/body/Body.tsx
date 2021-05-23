import React, { FC } from 'react';
import Contact from '../../pages/contact/Contact';
import Home from '../../pages/home/Home';
import Team from '../../pages/team/Team';

interface Props {}

const Body: FC<Props> = (props) => {
  return (
    <div id='body' data-spy='scroll' data-target='#navbarResponsive'>
      <Home />
      <Team />
      <Contact />
    </div>
  );
};

export default Body;
