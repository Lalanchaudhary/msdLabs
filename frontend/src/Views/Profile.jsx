import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({});

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

      setUser(res.data.user);
    } catch (err) {
      console.error("Error fetching profile:", err); // Debugging error
    }
  }

  useEffect(() => {
    fetchingHistory();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
     {user.name}
    </div>
  );
}

export default Profile;
