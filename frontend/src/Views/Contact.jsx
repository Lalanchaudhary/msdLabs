import React from 'react'
import '../ViewsCss/Contact.css'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
function Contact() {
  return (
    <div>
        <div className="container-fluid2">
    <span className="big-circle"></span>
    <img src="img/shape.png" className="square" alt="" />
    <div className="form">
      <div className="contact-info">
        <h3 className="title">Let's get in touch</h3>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          dolorum adipisci recusandae praesentium dicta!
        </p>

        <div className="info">
          <div className="information">
          <FaLocationDot className='mx-2 mb-3'  />

            <p>92 Cherry Drive Uniondale, NY 11553</p>
          </div>
          <div className="information">
          <MdOutlineMailOutline className='mx-2 mb-3'  />
            <p>lorem@ipsum.com</p>
          </div>
          <div className="information">
          <IoCallOutline className='mx-2 mb-3' />
            <p>123-456-789</p>
          </div>
        </div>

        <div className="social-media">
          <p>Connect with us :</p>
          <div className="social-icons">
            <a href="#">
            <FaFacebookF />
            </a>
            <a href="#">
            <FaXTwitter />
            </a>
            <a href="#">
            <FaInstagram />
            </a>
            <a href="#">
            <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <span className="circle one"></span>
        <span className="circle two"></span>

        <form action="index.html" autocomplete="off">
          <h3 className="title">Contact us</h3>
          <div className="input-container">
            <input type="text" name="name" className="input" />
            <label for="">Username</label>
            <span>Username</span>
          </div>
          <div className="input-container">
            <input type="email" name="email" className="input" />
            <label for="">Email</label>
            <span>Email</span>
          </div>
          <div className="input-container">
            <input type="tel" name="phone" className="input" />
            <label for="">Phone</label>
            <span>Phone</span>
          </div>
          <div className="input-container textarea">
            <textarea name="message" className="input"></textarea>
            <label for="">Message</label>
            <span>Message</span>
          </div>
          <input type="submit" value="Send" className="btn2" />
        </form>
      </div>
    </div>
  </div>

  <div className="container d-flex justify-content-center flex-wrap">
    <div>
        <h2 >OUR LOCATIONS</h2>
        <p> If you are living nearby, come visit us at one of our comfortable offices.</p>
        <p>OFFICE 1</p>
        <p><i className="fa-solid fa-location-dot mx-2"></i> 9863 - 9867 Mill Road, Cambridge, MG09 99HT</p>
        <p><i className="fa-solid fa-mobile-screen-button mx-2"></i>+1 800 603 6035</p>
        <a href="#" ><i className="fa-regular fa-envelope text-dark mx-2"></i> mail@demolink.org</a>

        <p className="my-4">OFFICE 2</p>
        <p><i className="fa-solid fa-location-dot mx-2"></i> 9863 - 9867 Mill Road, Cambridge, MG09 99HT</p>
        <p><i className="fa-solid fa-mobile-screen-button mx-2"></i>+1 800 603 6035</p>
        <a href="#" ><i className="fa-regular fa-envelope text-dark mx-2"></i> mail@demolink.org</a>
    </div>
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28007.326723484486!2d76.99678742508885!3d28.662238491471463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d058e762dddab%3A0x830ec5b53ca67c29!2sBakkarwala%2C%20Delhi!5e0!3m2!1sen!2sin!4v1713120380601!5m2!1sen!2sin"  height="450"  className="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>
    </div>
  )
}

export default Contact
