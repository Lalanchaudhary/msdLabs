import React, { useEffect, useState } from 'react';
import '../ComponentCss/UserProfile.css';
import { FaUserEdit, FaUsers, FaPrescriptionBottle, FaAddressBook, FaClipboardList } from 'react-icons/fa';
import { Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({});
  const token = localStorage.getItem("token");
  async function fetchingHistory() {
    try {
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }
      
      console.log("Using token:", token); // Debugging token

      const res = await axios.get(`${window.location.origin}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      console.log("Response data:", res.data); // Debugging response

      setProfile(res.data.user);
    } catch (err) {
      console.error("Error fetching profile:", err); // Debugging error
    }
  }

  useEffect(() => {
    fetchingHistory();
  }, []);



  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    // Save logic here
    console.log('Profile saved:', profile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Container className='d-flex flex-column flex-lg-row align-items-center justify-content-center'>
      <div>
        <div className="container00">
          <div className="profile-card00">
            <div className="profile-info00">
              <div className="profile-avatar00">
                <FaUserEdit size={24} />
              </div>
              <div>
                <h3>{profile.name}</h3>
                <p>+91 {profile.mobile_no}</p>
              </div>
            </div>
          </div>

          <div className="details-section00">
            <h2>My Details</h2>
            <ul className="details-list00">
              <li>
                <FaUsers className="icon00" />
                <span>Family Members</span>
              </li>
              <li>
                <FaPrescriptionBottle className="icon00" />
                <span>Prescription</span>
              </li>
              <li>
                <FaAddressBook className="icon00" />
                <span>Address book</span>
              </li>
              <li>
                <FaClipboardList className="icon00" />
                <span>Bookings & Reports</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container999">
          <>
            <h2>My Profile</h2>
            <div className="profile-info">
              <div className="profile-group">
                <label>Name</label>
                <p>{profile.name}</p>
              </div>
              <div className='two-in-one'>
                <div className="profile-group">
                  <label>Gender</label>
                  <p>{profile.gender}</p>
                </div>
                <div className="profile-group">
                  <label>Age</label>
                  <p>{profile.age}</p>
                </div>
              </div>
              <div className="profile-group">
                <label>Mobile Number</label>
                <p>{profile.mobile_no}</p>
              </div>
              <div className="profile-group">
                <label>Email Id</label>
                <p>{profile.email}</p>
              </div>
            </div>
            <Link to={"/logout"} className='Link-wala'> <button className="edit-button113" >
              Log Out
            </button></Link>
          </>
      </div>
    </Container>
  );
};

export default UserProfile;
