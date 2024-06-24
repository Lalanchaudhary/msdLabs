import React, { useRef, useState } from 'react'
import '../ComponentCss/Addtest.css'
import axios from 'axios'
function Addtest() {
    const [user,setUser]=useState({
        title:"",
        Body:"",
        price:"",
        fasting:"",
        report:"",
        sampleType:"",

    })

    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user);
    }

    const AddUser=async(e)=>{
        alert("User Added Successfuly")
        try
        {
            await axios.post(`${window.location.origin}/data/addtest`,user)
            console.log("Done")
        }
        catch(error)
        {
            console.log("Error agya",error);
        }
    }
    const inputRef=useRef();
    const [image,setImage]=useState('');
    const UploadImage=()=>{
        inputRef.current.click();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setImage(file);
    };
    
    return (
        <div className="bdy2">
            <form action='POST' className="container">
                <input type="text" className="boxes1" onChange={handleChange} name="title" placeholder="Test name" />
                <input type="text" className="boxes13" onChange={handleChange} name="Body" placeholder="Discription" />
                <input type="text" className="boxes15" onChange={handleChange} name="fasting" placeholder="Fasting (Required/Not Required)" />
                <input type="text" className="boxes15" onChange={handleChange} name="report" placeholder="Report Timing (hours/days)" />
                <input type="text" className="boxes15" onChange={handleChange} name="sampleType" placeholder="Sample (Blood/Urine/..)" />
                {/* <input type="text" className="boxes15" onChange={handleChange} name="type" placeholder="Type (heart/diabetes/..." /> */}
                <input type="text" className="boxes12" onChange={handleChange} name="price" placeholder="₹ Price" />
                <br />
                <button type='submit' onClick={AddUser} className="btn111">Add items</button>
            </form>
        </div>
    )
}

export default Addtest
