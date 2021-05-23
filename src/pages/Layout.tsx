import React, { FC, Fragment } from 'react';
import Body from '../components/body/Body';
import Topbar from '../components/topbar/Topbar';
import $ from 'jquery';

interface Props {}

const Layout: FC<Props> = (props) => {
  window.addEventListener('scroll', (event: any) => {
    // scroll event detected
    if (event?.currentTarget?.scrollY > 300) {
      $('.navbar').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
    }
  });

  //Close hamburger on click
  window.addEventListener('click', (event: any) => {
    // click event detected
    const isMenuOpen = $('.navbar-collapse').hasClass('show');
    const target = $(event.target);
    if (isMenuOpen && !target.hasClass('navbar-toggler')) {
      $('.navbar-toggler').click();
    }
  });

  return (
    <Fragment>
      <Topbar />
      <Body></Body>
    </Fragment>
  );
};

export default Layout;
