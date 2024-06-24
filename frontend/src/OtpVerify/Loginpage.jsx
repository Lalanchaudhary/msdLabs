import React, { useRef, useState } from 'react'
import './Loginpage.css'
import msd from '../Assets/MSD.PNG'
import { Link, useNavigate } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
// import axios from 'axios'
function SignupPage() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const navigate=useNavigate();

    const email = "chaudharylalan28@gmail.com";
    const password = "lalan823557";
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // const AddUser=async(e)=>{
    //     e.preventDefault();
    //     alert("User Added Successfuly")
    //     try
    //     {
    //         await axios.post("http://localhost:9000/user",user)
    //         console.log("Done")
    //     }
    //     catch(error)
    //     {
    //         console.log("Error agya",error);
    //     }
    // }
    const inputRef = useRef();
    const [image, setImage] = useState('');
    const UploadImage = () => {
        inputRef.current.click();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setImage(file);
    };

    const EnterUser = () => {
        if (user.email == email && user.password == password) {
            toast.success("Welcome");
            navigate("/Admindash")
        }
        else {
            toast.error("Invalid email or Password");
        }
    }

    return (
        <div className="bdy">
            <form className="main123">
                {/* <div className='upimage' onClick={UploadImage}>
                {image ? (
    <img src={URL.createObjectURL(image)} alt="" />
) : (
    <img src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-4/24/image-upload-1024.png" alt="" />
)}
                <input type='file' ref={inputRef} onChange={handleImageChange} style={{display:'none'}}/>
                </div> */}
                {/* <h2 className="heading">Fill the form for Users!</h2> */}
                <img src={msd} width={100} alt="" />
                <input type="email" className="boxes1" onChange={handleChange} name="email" placeholder="E-mail" />
                <input type="password" className="boxes1" onChange={handleChange} name="password" placeholder="password" />
                <br />
                <Button onClick={EnterUser} className="btn1">Log in</Button>
                <div className="links1">
                    <a id="log" href="/">Log in</a>
                    <a href="/">Forgot password?</a>
                </div>
            </form>
        </div>
    )
}

export default SignupPage
