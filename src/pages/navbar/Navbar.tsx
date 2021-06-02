import { useState, FC } from 'react';
import {
  Navbar,
  Container,
  NavbarBrand,
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
        <NavbarBrand href='#'>
          <img src={logo} alt='logo' />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar id='navbarResponsive'>
          <Nav className='ms-auto' navbar>
            <NavItem>
              <NavLink href='#home'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#home'>Eye Glassess</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#home'>Sun Glasses</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#home'>Contact Lens</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#home'>Home Eye Test</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#contactus'>Contact us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
