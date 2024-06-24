import React, { useEffect, useState } from 'react'
import '../ComponentCss/AllUsers.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
function AllUsers() {
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
    axios.get(`${window.location.origin}/users`)
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
        {
            userData.map((row)=>{
              return <div className='inner-box11'>      
              <div className='colums11 fw-bold'>{row.name}</div>
              <div className='colums112'>{row.age}</div>
              <div className='colums112'>{row.gender}</div>
              <div className='colums11'>{row.email}</div>
              <div className='colums11'>{row.mobile_no}</div>
              <div className='colums113'><Button>View Profile</Button></div>
            </div>
            })
        }
        </div>
    </>
  )
}

export default AllUsers

