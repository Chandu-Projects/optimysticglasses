import { FC, Fragment } from 'react';
import Body from '../components/body/Body';
import $ from 'jquery';
import Home from './home/index';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

interface Props {}

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
      <Body>
        <Home />
      </Body>
      <Footer />
    </Fragment>
  );
};

export default Layout;
