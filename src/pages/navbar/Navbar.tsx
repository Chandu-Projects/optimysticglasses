import React, { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Container,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import logo from '../../assets/images/topbar/logo.png';

interface Props {}

const Topbar: FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color='dark' dark expand='lg' fixed={'top'}>
      <Container fluid={true}>
        <Link to='/' className='navbar-image'>
          <img src={logo} alt='logo' />
        </Link>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar id='navbarResponsive'>
          <Nav className='ms-auto' navbar>
            <NavItem>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/eyeglasses' className='nav-link'>
                Eye Glassess
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/sunglasses' className='nav-link'>
                Sun Glasses
              </Link>
            </NavItem>
            <NavItem>
              <Link to='lense' className='nav-link'>
                Contact Lens
              </Link>
            </NavItem>
            <NavItem>
              <Link to='eyetest' className='nav-link'>
                Home Eye Test
              </Link>
            </NavItem>
            <NavItem>
              <NavLink href='#contactus' className='nav-link'>
                Contact us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
