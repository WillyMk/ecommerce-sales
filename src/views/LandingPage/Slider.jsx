import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from './Particle';
import Type from './Type';
import './slider.css'

const Slider = () => {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Particle />
        <Container className='home-content'>
          <Row>
            <Col md={7} className='home-header'>
              <h1 style={{ paddingBottom: 15 }} className='heading'>
                Hi There!{' '}
                <span className='wave' role='img' aria-labelledby='wave'>
                  👋🏻
                </span>
              </h1>

              <h1 className='heading-name'>
                Welcome To
                <strong className='main-name'>
                  {' '}
                  Brilliant Online  Sales your one time shopping.
                </strong>
              </h1>

              {/* <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div> */}
            </Col>

            {/* <Col md={5}>
              <img
                src={
                  'https://images.unsplash.com/photo-1618365908648-e71bd5716cba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tzdG9yZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                }
                alt='home pic'
                className='img-fluid'
                style={{ maxHeight: '450px' }}
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Slider;
