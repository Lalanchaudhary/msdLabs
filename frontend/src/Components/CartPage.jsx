import React from 'react'
import '../ComponentCss/CartPage.css'
import { Button, Container } from 'react-bootstrap';
import { IoMdAdd, IoMdCloseCircleOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function CartPage(props) {

  var sum=0;
  const price=()=>{
    props.data.map((e)=>{
      sum=sum+e.price;
    })
    return sum;
  }
  return (
    <>
      {(props.data == 0 ?
        <Container style={{ marginTop: "50px" }} className='d-flex flex-column justify-content-center'><h1 className='text-center p-4'>Empty Cart  <FaCartPlus style={{ fontSize: "50px" }} className='icon1' /></h1>
          <Link to={"/"} style={{ width: "200px", margin: "auto" }}> <Button >Go to Home page..</Button></Link>
        </Container>
        :
        <Container style={{ height: "100vh" }} className='mainka-box' >
          <div className='test-add'>
            {
              props.data.map((row) => {
                return <div className='item'>
                  <h5>{row.title}</h5>
                  <IoIosArrowDown className='fs-4' />
                  <p>₹<span>{row.price}</span></p>
                  <IoMdCloseCircleOutline onClick={() => { props.action(row._id) }} style={{ cursor: "pointer" }} className='fs-3 ms-4' />
                </div>
              })
            }
            <Link to={"/alltest"}> <Button variant="outline-primary text-dark" className='p-2 fw-bold add-more'>Add more test <IoMdAdd /></Button></Link>
          </div>
          <div>
          <form className='form'>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Name" />
                <label htmlFor="adhar">AdharNumber</label>
                <input type="number" id="adhar" placeholder="AdharNumber" />
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="Address" />
                <label htmlFor="">₹</label>
                <input type="number" value={price()} placeholder="price" />
                <br />
                <button>Checkout</button>
            </form>
          </div>
        </Container>)}

    </>
  )
}

export default CartPage
