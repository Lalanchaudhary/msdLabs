import './App.css';
import Home from './Views/Home';
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginpage from './OtpVerify/Loginpage'
import { Route, Routes } from 'react-router-dom';
import CartPage from './Components/CartPage';
import Footer from './Components/Footer'
import axios from 'axios';
import { useEffect, useState } from 'react';
import TestDatail from './Components/TestDatail';
import Alltest from './Components/Alltest';
import Contact from './Views/Contact';
import PrescripPage from './Views/PrescripPage';
import Showmini from './Components/Showmini';
import AdminDash from './Views/AdminDash';
import Addtest from './Components/Addtest';
import UpdateItem from './Components/Updatetest';
import UserProfile from './Components/UserProfile';
import Signup from './Views/Signup';
import Login from './Views/Login';
import Profile from './Views/Profile';
import User from './Components/User';
import Logout from './Views/Logout';
import AllUsers from './Components/AllUsers';
function App() {

  const getLocal = () => {
    let list1 = localStorage.getItem('Cart_Item');
    console.log(list1, "list");
  
    if (list1) {
      try {
        return JSON.parse(list1);
      } catch (e) {
        console.error("Invalid JSON in localStorage:", list1);
        return [];
      }
    } else {
      return [];
    }
  }
  

  const [cartItem, setCartItem] = useState([]);
  const [newCartData, setnewCartData] = useState(getLocal());
  useEffect(() => {
    gettingData()
  }, [])

  const gettingData = () => {
    axios.get(`${window.location.origin}/data`)
      .then((res) => {
        // console.log(res);
        setCartItem(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const AddData = (event) => {
    // console.log(event, "event");
    setnewCartData([...newCartData, event])
    console.log(newCartData);
    // axios.post("http://localhost:9000", event)
    //   .then((res) => {
    //     console.log("App.js", res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    // gettingData();
  }
  // const RemoveItem = (event) => {
  //   axios.get(`http://localhost:9000/delete/${event}`)
  //     .then(() => {
  //       console.log("thik hai");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //   gettingData();
  // }
  const deleteItem = (itemId) => {
    console.log(itemId);
    const updatedCartData = newCartData.filter(item => item._id !== itemId);
    console.log(updatedCartData);
    setnewCartData(updatedCartData);
  }
  


  useEffect(() => {
    localStorage.setItem('Cart_Item', JSON.stringify(newCartData));
  }, [newCartData]);



  // const [newCartData2, setnewCartData2] = useState(getLocal());
  // console.log(newCartData2, "hello");
  return (
    <>
      <Navbar data={newCartData.length} />
      <Routes>
        <Route path='/' element={<Home action={AddData} />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Cart' element={<CartPage data={newCartData} action={deleteItem} />} />
        <Route path='/Cartdetail' element={<TestDatail action={AddData} />} />
        <Route path='/alltest' element={<Alltest action={AddData} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/uploadprescription' element={<PrescripPage />} />
        <Route path='/frequently' element={<Showmini />} />
        <Route path='/Admin' element={<Loginpage />} />
        <Route path='/AdminDash' element={<AdminDash />} />
        <Route path='/Addtest' element={<Addtest />} />
        <Route path='/Update' element={<UpdateItem />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Logout' element={<Logout />} />
        <Route path='/Allusers' element={<AllUsers />} />
        <Route element={<User />} >
        <Route path='Profile' element={<UserProfile />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
