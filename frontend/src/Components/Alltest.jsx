import React, { useEffect, useState } from 'react'
import '../ComponentCss/Alltest.css'
import Card from '../Components/Card'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AllCards from './AllCards';
import { IoIosSearch } from 'react-icons/io';
function Alltest(props) {


    const [AllData,setAllData]=useState([]);
    useEffect(()=>{
        gettingData2();
    },[])
    const gettingData2=()=>{
        axios.get(`${window.location.origin}/data/test`)
        .then((res)=>{
          console.log(res);
          setAllData(res.data)
        })
        .catch((error)=>{
          console.log(error);
        })
      }
    const navigate=useNavigate();
    function gotoCart(data)
    {
      navigate("/Cartdetail",{state:{value:data}})
    }

    const [items,setItems]=useState({
        title:"",
        Body:"",
        price:""
      })
    
    
      const AddData=async(event)=>{
      try
      {
        await axios.post(`${window.location.origin}`,event)
      }
      catch(error)
      {
        console.log("error agay",error);
      }
      }

      const [Search,setSearch]=useState("");
      function HandleChange(e)
      {
        setSearch(e.target.value)
      }
    return (
        <div>
          <Container>
          <div className='sea-div12'>
        <IoIosSearch className='serach-icon21'/>
          <input type='text' onChange={HandleChange}  className='input-search21 ' placeholder='Search Tests'/>
          </div>
          </Container>
            <Container className='d-flex gap-4 py-4 flex-wrap my-4 justify-content-center'>
            {
  AllData.filter((ev) => {
    return Search.toLowerCase() === '' ? ev : ev.title.toLowerCase().includes(Search.toLowerCase());
  }).map((data) => {
    return <AllCards key={data.id} data={data} action={props.action} />
  })
}


            </Container>
        </div>
    )
}

export default Alltest
