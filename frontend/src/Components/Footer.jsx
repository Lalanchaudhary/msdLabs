import React from 'react'
import '../ComponentCss/Footer.css'
import {Container} from 'react-bootstrap'
import MsdLogo from '../Assets/MSD2.png'
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className='foot'>
        <Container className='inner-foot'>
            <div className='foot-logo'>
                <img src={MsdLogo} height={70} alt="" />
                <p>MSD Labs is India's fastest growing omnichannel Pan India diagnostics service provider having its services in 220+ cities through a network of 80+ owned advanced labs and 2000+ Collection Centers powered by home sample collection across India. We are on a mission to provide quality healthcare services at affordable rates making diagnostics easily accessible and convenient to one and all.</p>
            </div>
            <div className='footer-links'>
                <h4 className='pb-4 mb-4'>Quick Links</h4>
                <p>Partner With Us</p>
                <p>FAQs</p>
                <p>About Us</p>
                <p>Our Labs</p>
                <p>Redcliffe Imaging</p>
                <p>ESG Practices</p>
                <p>Collection Centres</p>
            </div>
            <div>
            <h4 className='pb-4 mb-4 text-light'>Follow us on</h4>
                <div className='d-flex'>
            <FaInstagram className='foot-icon' />
            <RiTwitterXFill  className='foot-icon'/>
            <FaFacebook className='foot-icon' />
            <FaLinkedinIn className='foot-icon' />
            <FaYoutube className='foot-icon' />
            </div>
            </div>
        </Container>
      </div>
    </>
  )
}

export default Footer
