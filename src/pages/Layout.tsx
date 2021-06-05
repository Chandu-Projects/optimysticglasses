import React, { FC, Fragment } from 'react';
import $ from 'jquery';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

interface Props {
  children: any;
}

const Layout: FC<Props> = (props: Props) => {
  window.addEventListener('scroll', (event: any) => {
    // scroll event detected
    if (event?.currentTarget?.scrollY > 300) {
      $('.fixed-top').addClass('solid');
    } else {
      $('.fixed-top').removeClass('solid');
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
      <Navbar />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
