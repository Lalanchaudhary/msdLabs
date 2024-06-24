import React from 'react';
import '../ComponentCss/Navbar.css'
import { Navbar, Nav, Form, Container, Image, } from 'react-bootstrap';
import { FaCartPlus } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import MsdLogo from '../Assets/MSD.PNG'
import { IoIosContact, IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaCalendarPlus } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
function CustomNavbar(props) {
  return (
    <>
      <Navbar bg="light" sticky="top" className='Navbar'  >
        <Container className='contain'>
          <Navbar.Brand href="#home" className='mr-4 mb-2 photo1'><Image src={MsdLogo} height={41} /></Navbar.Brand>
          <IoIosSearch className='serach-icon' />
          <input type='text' className='input-search ' placeholder='Search Tests' />
          <Navbar.Toggle className='me-auto togg' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
          <Link to="/Cart">  <button className='nav-btn'>Cart <FaCartPlus className='icon1' /></button></Link>
          {props.data === 0 ? '' : <p className='cart-number'>{props.data}</p>}
          <Link to="/profile">  <button className='nav-btn'>Login<CiUser className='icon1' /></button></Link>
        </Container>
      </Navbar>
      <Container className=' pb-4 pt-2 sec-nav12'  >
        <Container className=' d-flex justify-content-between' fluid>
          <Nav.Link href="/" className='text-danger ' id="fs1"><FaCalendarPlus className='mx-2 mb-1' /> Book a Test</Nav.Link>
          <div className='d-flex gap-4'>
            <Nav.Link href="#link" className='text-dark ' id="fs1" ><IoBagCheck className='mx-2 mb-1' />Booking & Reports</Nav.Link>
          </div>
          <Nav.Link href="/contact" className='text-dark ' id="fs1"><IoIosContact className='' /> Contact Us</Nav.Link>
        </Container>
      </Container>
    </>
  );
}

export default CustomNavbar;
