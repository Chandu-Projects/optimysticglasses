import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'react-feather';
import { Container, Row, Col, Navbar } from 'reactstrap';
import Label from '../../components/label/Label';
import Link from '../../components/link/Link';

interface Props {}

const Footer = (props: Props) => {
  return (
    <Navbar color='dark' dark expand='lg' fixed={'bottom'}>
      <Container fluid={true}>
        <Row style={{ width: '100%' }}>
          <Col lg='3' md='3' sm='12' xs='12' className='col-footer'>
            <Label
              value='Contact us today'
              style={{
                fontWeight: 600,
                color: '#fff',
                textTransform: 'uppercase',
              }}
              rightAlign
            />
          </Col>
          <Col lg='3' md='3' sm='12' xs='12' className='col-footer'>
            <Label
              value='+91-916-414-1804'
              icon={<Phone size={16} />}
              style={{
                color: '#fff',
              }}
            />
          </Col>
          <Col lg='4' md='4' sm='12' xs='12' className='col-footer'>
            <Label
              value='optimisticglasses@gmail.com'
              icon={<Mail size={16} />}
              style={{
                color: '#fff',
                textTransform: 'lowercase',
              }}
            />
          </Col>

          <Col lg='1' md='1' sm='12' xs='12' className='col-footer ms-auto'>
            <Link
              icon={<MapPin size={16} />}
              isExternal={true}
              href={'https://goo.gl/maps/nxabQMze5HpN1UZy9'}
              style={{
                color: '#fff',
                marginRight: '8px',
              }}
            />
            <Link
              icon={<Facebook size={16} />}
              isExternal={true}
              href={'https://goo.gl/maps/nxabQMze5HpN1UZy9'}
              style={{
                color: '#fff',
                marginRight: '8px',
              }}
            />
            <Link
              icon={<Instagram size={16} />}
              isExternal={true}
              href={'https://goo.gl/maps/nxabQMze5HpN1UZy9'}
              style={{
                color: '#fff',
              }}
            />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Footer;
