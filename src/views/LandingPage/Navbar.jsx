import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../../assets/rmpic.png';
import { Link, useNavigate } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
} from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { CgFileDocument, CgShoppingCart, CgLogIn } from 'react-icons/cg'; // Added CgShoppingCart
import './navbar.css';
import { useSelector } from 'react-redux';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const state = useSelector((state) => state?.selectedItems?.products);
  const navigate = useNavigate();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed='top'
      expand='md'
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Brand href='/' className='d-flex'>
          <img src={logo} className='img-fluid logo' alt='brand' />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          onClick={() => {
            updateExpanded(expand ? false : 'expanded');
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto' defaultActiveKey='#home'>
            <Nav.Item>
              <Nav.Link as={Link} to='/' onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/skillset'
                onClick={() => updateExpanded(false)}
              >
                <GiSkills style={{ marginBottom: '2px' }} /> About Us
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/project'
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: '2px' }}
                />{' '}
                Products
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/resume'
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: '2px' }} /> Patners
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/contact'
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineContacts style={{ marginBottom: '2px' }} /> Contact Us
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item>
              <Nav.Link>
                <CgShoppingCart
                  size={24}
                  style={{ color: 'purple' }}
                  onClick={() => navigate('/cart')}
                />
                {state.length > 0 && (
                  <span className='cart-item-count'>{state.length}</span>
                )}
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item>
              <Nav.Link>
                <CgLogIn
                  size={24}
                  style={{ color: 'red' }}
                  onClick={() => navigate('/login')}
                >
                  Login
                </CgLogIn>{' '}
                {/* Adjust the size as needed */}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
