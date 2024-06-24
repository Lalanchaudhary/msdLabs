import React, { useRef, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import '../ViewsCss/Prescrip.css'
function PrescripPage() {
    const handleChange=(e)=>{

    }
    const AddUser = async (e) => {
        e.preventDefault();
        // alert("User Added Successfuly")
        // try {
        //     await axios.post("http://localhost:9000/user", user)
        //     console.log("Done")
        // }
        // catch (error) {
        //     console.log("Error agya", error);
        // }
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
        <div style={{margin:"100px 0px"}}>
            <Container className='my-4'>
                <h3>Upload Prescription</h3>
            </Container>
            <Container className='d-flex justify-content-center'  >
                <div className='drag-div'>
                    <div className='upimage' onClick={UploadImage}>
                        {image ? (
                            <>
                            <img src={URL.createObjectURL(image)} className='pre-img1' alt="" />
                            </>
                        ) : (
                            <>
                            <img src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-4/24/image-upload-1024.png" className='pre-img2' alt="" />
                            </>
                        )}
                        <input type='file' ref={inputRef} onChange={handleImageChange} style={{ display: 'none' }} />
                    </div>
                    <h3 className='text-center mt-5'>Drage and drop</h3>
                    <Button style={{width:"90px"}}>SUBMIT</Button>
                </div>
            </Container>
        </div>
    )
}

export default PrescripPage
