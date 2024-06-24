import React from 'react'
import Hero from '../Components/Hero'
import Crousal from '../ComponentCss/Crousal'
import msdlogo from '../Assets/msd logoooo.png'
import '../ViewsCss/Home.css'
import { IoCloseSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import FirstSec from '../Components/FirstSec'
import Footer from '../Components/Footer'
function Home(props) {
  // setTimeout(Display,3000
  // )
  // function Display() {
  //   document.querySelector(".form-box").style.display="block"
  // }

  // function ClosePopup()
  // {
  //   document.querySelector(".form-box").style.display="none"
  // }
  return (
    <div>
      {/* <Crousal /> */}
      <FirstSec/>
      <Hero action={props.action} />
      <Footer/>
      {/* <div className='upper-form'>
        <form action="post" method='POST' className='form-box'>
                    <IoClose className='close-icon' onClick={ClosePopup} />
          <img src={msdlogo} width={80} alt="" />
          <input type="text" placeholder='Enter your Name' />
          <br />
          <input type="number" placeholder='Enter your number' />
          <br />
          <button className='btn' >Submit</button>
        </form>
      </div> */}
    </div>
  )
}

export default Home
