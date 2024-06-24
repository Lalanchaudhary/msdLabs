import React from 'react'
import '../ComponentCss/DrProfile.css'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function DrProfile() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
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
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
    {/* <Container className='d-flex gap-4 p-4'> */}
    <div className="slider-container">
      <Slider {...settings}>
      <div className='Dr-Profile p-3'>
        <div className='d-flex py-2'>
            <img src="https://redcliffelabs.com/_next/image?url=https%3A%2F%2Fstaticcdn.redcliffelabs.com%2Fmedia%2Fgallary-file%2FNone%2F5bab7522-4d43-4b74-86db-487bc9e87d4d.jpg&w=96&q=100" height={80} width={80} alt="" />
            <div className='px-3'>
                <h5>Dr. Seneesh KV</h5>
                <p>Fetal Medicine Specialist - Kerala</p>
            </div>
        </div>
        <p>MSD Labs has been an invaluable diagnostic service provider for me and my patients. Their commitment to using the latest technologies and techniques to deliver quality & timely reports is commendable.</p>
      </div>

      <div className='Dr-Profile p-3'>
        <div className='d-flex py-2'>
            <img src="https://redcliffelabs.com/_next/image?url=https%3A%2F%2Fcms-lp.s3.ap-south-1.amazonaws.com%2F1516960601787_48dafe634e.jpeg%3Fupdated_at%3D2023-07-16T03%3A56%3A59.344Z&w=96&q=100" height={80} width={80} alt="" />
            <div className='px-3'>
                <h5>Dr. Vykunta Raju K. N</h5>
                <p>Pediatric Neurologist - Bengaluru</p>
            </div>
        </div>
        <p>MSD Labs delivers exceptional and accurate diagnostic services with a knowledgeable and dedicated team.</p>
      </div>

      <div className='Dr-Profile p-3'>
        <div className='d-flex py-2'>
            <img src="https://redcliffelabs.com/_next/image?url=https%3A%2F%2Fcms-lp.s3.ap-south-1.amazonaws.com%2Fdr_chitra_ganesh_1_87384b7cee.jpeg%3Fupdated_at%3D2023-07-16T04%3A06%3A14.924Z&w=96&q=100" height={80} width={80} alt="" />
            <div className='px-3'>
                <h5>Dr. Chitra Ganesh</h5>
                <p>Fetal Medicine Specialist - Bengaluru</p>
            </div>
        </div>
        <p>MSD Labs is synonymous with trusted healthcare, delivering high-quality diagnostic services on time.</p>
      </div>
      </Slider>
    </div>
      {/* </Container> */}
    </>
  )
}

export default DrProfile
