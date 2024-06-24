import React, { useEffect, useState } from 'react'
import '../ViewsCss/AdminDash.css'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
function AdminDash() {
    const navigate=useNavigate();
  
    function gotoCart(data)
    {
      navigate("/Cartdetail",{state:{value:data}})
    }
    function Update(data)
    {
      navigate("/Update",{state:{value:data}})
    }
  const [userData,setUserData]=useState([]);
  const gettingData3=()=>{
    axios.get(`${window.location.origin}/data/test`)
    .then((res)=>{
      console.log(res);
      setUserData(res.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  useEffect(()=>{
    gettingData3()
  },[])

  const RemoveItem=(event)=>{
    console.log("remove");
    axios.get(`${window.location.origin}/data/delete/${event}`)
    .then(()=>{
      console.log("thik hai");
    })
    .catch((err)=>{
      console.log(err);
    })
    gettingData3();
    console.log("Ho gaya");
}

  console.log(userData);
  const [search,setSearch]=useState("");
  function Changehandler(e)
  {
    setSearch(e.target.value);
  }
  console.log(search);
  return (
    <>
    <div className='main-box'>
    <Container className='add-user'>
      <h2>Total test {userData.length}</h2>
      <Link to={"/Addtest"} className='text-dark'><Button className='add-user-btn25'>Add Item</Button></Link>
      </Container>
      <input type="text" onChange={Changehandler} className='admin-search' placeholder='search' />

        {
            userData.filter((event)=>{
              return search.toLowerCase()===''?event:event.title.toLowerCase().includes(search);
            }).map((row)=>{
              return <div className='inner-box'>      
              <div className='colums fw-bold'>{row.title}</div>
              <div className='colums'>{row.Body}</div>
              <div className='colums'>₹{row.price}</div>
              <div className='btn-div5'>
              <button className='admin' onClick={()=>{gotoCart(row)}}>View</button>
              <button className='admin' onClick={()=>{Update(row)}}>Edit</button>
              <button className='admin' onClick={()=>{RemoveItem(row._id)}}>Delete</button>
              </div>
            </div>
            })
        }
        </div>
    </>
  )
}

export default AdminDash
