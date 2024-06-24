import React from 'react'
import '../ComponentCss/FirstSec.css'
import { Container } from 'react-bootstrap'
import { GrDocumentUpload } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { MdOutlineHealthAndSafety } from "react-icons/md"
import { IoIosSearch } from "react-icons/io";
function FirstSec() {
  return (
    <>
      <div className='hero-bdy'>
        <Container>
        <h3 className='text-white my-4'>Looking for a test ?</h3>
        <div className='sea-div'>
        <IoIosSearch className='serach-icon2'/>
         <Link to={"/alltest"}> <input type='text' className='input-search2 ' placeholder='Search Tests'/></Link>
          </div>
          <div className='d-flex gap-4'>
        <div className='uplaod-pre'>
            <div className='up-icon mx-3'><GrDocumentUpload className='up-icon12' /></div>
           <Link to={"/uploadprescription"} className='upload-btn5'> <p className='text-pre mt-2'>Upload Prescription</p></Link>
        </div>
        <div className='uplaod-pre'>
            <div className='up-icon mx-3'><MdOutlineHealthAndSafety className='up-icon12' /></div>
           <Link to={"/uploadprescription"} className='upload-btn5'> <p className='text-pre mt-2'>Select Health Package</p></Link>
        </div>
        </div>
        </Container>
      </div>
    </>
  )
}

export default FirstSec
