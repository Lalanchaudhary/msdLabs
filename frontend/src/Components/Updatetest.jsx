import React, { useRef, useState } from 'react';
import '../ComponentCss/Addtest.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function UpdateItem() {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state.value;
    console.log(data._id);

    const [user, setUser] = useState({
        title: data.title,
        Body: data.Body,
        price: data.price,
        fasting: data.fasting,
        report: data.report,
        sampleType: data.sampleType
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const updateItem = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${window.location.origin}/data/update/${data._id}`, user);
            navigate('/');
        } catch (error) {
            console.log("Error:", error);
        }

    };

    const inputRef = useRef();
    const [image, setImage] = useState('');

    const uploadImage = () => {
        inputRef.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setImage(file);
    };

    return (
        <div className="bdy">
            <form onSubmit={updateItem}>
                <input 
                    type="text" 
                    className="boxes1" 
                    onChange={handleChange} 
                    value={user.title} 
                    name="title"  
                    placeholder="Test name" 
                />
                <input 
                    type="text" 
                    className="boxes13" 
                    onChange={handleChange} 
                    value={user.Body} 
                    name="Body" 
                    placeholder="Description" 
                />
                <input 
                    type="text" 
                    className="boxes15" 
                    onChange={handleChange} 
                    value={user.fasting} 
                    name="fasting" 
                    placeholder="Fasting (Required/Not Required)" 
                />
                <input 
                    type="text" 
                    className="boxes15" 
                    onChange={handleChange} 
                    value={user.report} 
                    name="report" 
                    placeholder="Report Timing (hours/days)" 
                />
                <input 
                    type="text" 
                    className="boxes15" 
                    onChange={handleChange} 
                    value={user.sampleType} 
                    name="sampleType" 
                    placeholder="Sample (Blood/Urine/...)" 
                />
                <input 
                    type="text" 
                    className="boxes12" 
                    onChange={handleChange} 
                    value={user.price} 
                    name="price" 
                    placeholder="₹ Price" 
                />
                <br />
                <button type="submit" className="btn1">Update items</button>
            </form>
        </div>
    );
}

export default UpdateItem;
