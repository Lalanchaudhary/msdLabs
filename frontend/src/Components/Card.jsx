import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../ComponentCss/Card.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function TextExample(props) {

  const navigate=useNavigate();

  function gotoCart(data)
  {
    navigate("/Cartdetail",{state:{value:data}})
  }
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

  // const AllData=[
  //   {
  //     title:"Alkaline Phosphatase (ALP) Test in Delhi",
  //     Body:"It checks abnormal alkaline phosphate enzyme levels & diagnoses liver or bone diseases.",
  //     price:1099
  //   },
  //   {
  //     title:"Fit India Full Body Checkup with Free Vitamin B12 in Delhi",
  //     Body:"CBC, ESR, BSF, HbA1c, Lipid Profile, LFT, KFT, Thyroid Profile Total, Vit B12, Urine Routine",
  //     price:1099
  //   },
  //   {
  //     title:"Advance Plus Full Body Checkup in Delhi",
  //     Body:"It assesses your risks for potential health diseases and helps in health monitoring.",
  //     price:1099
  //   }
  // ]

  const [items,setItems]=useState({
    title:"",
    Body:"",
    price:""
  })


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#e2e3e4"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#e2e3e4" }}
        onClick={onClick}
      />
    );
  }




  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
      centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: true,
          centerPadding: "30px",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "10px",
        }
      }
    ]
  };
  return (
    <>
    <div className="slider-container">
      <Slider {...settings}>
        {
          AllData.map((data)=>{
              return <Card style={{ width: '22rem' }}>
            <Card.Body>
              <Card.Title onClick={()=>{gotoCart(data)}} style={{color:"#0bb7af"}}  ><p className='title-para'>{data.title}</p></Card.Title>
              <Card.Text onClick={()=>{gotoCart(data)}}>
                <p className='body-para'>{data.Body}</p>
              </Card.Text>
              <div className='card-footer'>
                  <p>₹<span>{data.price}</span></p>
                  <Button type='submit' onClick={()=>{props.action(data)}} style={{backgroundColor:"#862692",border:"none"}}>Book</Button>
              </div>
            </Card.Body>
          </Card>
          })
        }
    </Slider>
    </div>
    </>
  );
}

export default TextExample;