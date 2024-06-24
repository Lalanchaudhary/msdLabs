import React from 'react'
import { Container } from 'react-bootstrap'
import '../ComponentCss/Test.css'
import { useLocation } from 'react-router-dom';
function TestDatail(props) {
  const location = useLocation();
  const data = location.state.value;
  return (
    <div>
      <Container className='my-4' style={{ height: "100vh" }}>
        <div className='upper-div'>
          <div className='inner-div'>
            <h3>{data.title}</h3>
            <p>₹<span>{data.price}</span></p>
          </div>
          <button onClick={()=>{props.action(data)}} className='add-btn'>Add to Cart</button>
        </div>

        <div className='two-div'>
          <div className='f-div'>
            <p className='f-div-p'>Fasting</p>
            <p className='f-div-p2'>Not Required</p>
          </div>

          <div className='f-div'>
            <p className='f-div-p'>Fasting</p>
            <p className='f-div-p2'>Not Required</p>
          </div>
        </div>
        <h4 className='my-4'>What is it for ?</h4>
        <p className='fs-5' style={{ width: "45%" }}>{data.Body}</p>
        <h4 className='mt-4'>Sample Type</h4>
        <p className='fs-6' style={{ width: "45%" }}>Blood</p>
        <h3 className='mt-4'>Package Instructions</h3>
        <p className='fs-5 fw-bold' style={{ width: "45%" }}>Age Group: 5+ Years</p>
      </Container>
    </div>
  )
}

export default TestDatail
