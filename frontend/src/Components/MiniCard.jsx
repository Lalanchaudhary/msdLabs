import React from 'react'
import '../ComponentCss/MiniCard.css'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import Heart from '../Assets/Heart.webp';
import Thyroid from '../Assets/Thyroid.webp';
import Vitamin from '../Assets/Vitamin.webp';
import Diabetes from '../Assets/Diabetes.webp';
import Arthritis from '../Assets/Arthritis.webp';
import Fullbody from '../Assets/Fullbody.webp';
function MiniCard() {
  const navigate=useNavigate();
  function gotoCart(data)
  {
    navigate("/frequently",{state:{value:data}})
  }
    const data=[
        {
            image:Thyroid,
            title:"Thyroid"
        },
        {
            image:Heart,
            title:"Heart"
        },
        {
            image:Diabetes,
            title:"Diabetes"
        },
        {
            image:Vitamin,
            title:"Vitamin"
        },
        {
            image:Arthritis,
            title:"Arthritis"
        },
        {
            image:Fullbody,
            title:"FULL BODY"
        },
    ]

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
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        centerMode: true,
        centerPadding: "60px",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
              centerPadding: "60px",
            }
          }
        ]
      };

  return (
    <>
        {/* <Container className='d-flex gap-4 my-4 flex-wrap justify-centent-center'> */}
        <div className="slider-container">
      <Slider {...settings}>
      {
        data.map((row)=>{
            return <div onClick={()=>{gotoCart(row.title)}} className='min-card d-flex '>
                     <img src={row.image} alt="" />
                     <p>{row.title}</p>
                  </div>
        })
    }
      </Slider>
    </div>
    {/* </Container> */}
    </>
  )
}

export default MiniCard
