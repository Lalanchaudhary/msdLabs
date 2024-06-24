import React from 'react'
import { Button, Carousel, Container } from 'react-bootstrap'
import Card from '../Components/Card'
import MiniCard from './MiniCard'
import '../ComponentCss/Hero.css'
import NewCard from '../Components/NewCard'
import DrProfile from './DrProfile'
import { Link } from 'react-router-dom'
import Crousal from '../ComponentCss/Crousal'
function Hero(props) {
  return (
    <>
          <Container className='p-4'>
        <h3 style={{margin:"100px 0px 50px 0px"}}>Recently Viewed</h3>
        <Card action={props.action} />
      </Container>
      <Container className='p-4'>
        <h3  style={{margin:"100px 0px 50px 0px"}}>Frequently Booked</h3>
        <MiniCard/>
        <h3 style={{margin:"100px 0px 50px 0px"}}>Top Health Packages</h3>
        <Card action={props.action} />
      </Container>
      <Container className='d-flex justify-content-center'>
        <Link to={"/alltest"}>  <Button  >Show All...</Button></Link>

      </Container>
      <div style={{margin:"100px 0px 50px 0px"}} className='mid-bdy' >
        <h2 className='text-center heading111'>Why Choose Us</h2>
        <div className='all-card'>
          <div className='details-card'>
            <img src="https://redcliffelabs.com/_next/image?url=https%3A%2F%2Fstaticcdn.redcliffelabs.com%2Fmedia%2Fgallary-file%2FNone%2F0b7faad0-2e1e-49f1-943f-50deb89fab6c.png&w=48&q=100" height={40} width={40} alt="" />
            <p>Smart Reports In 24 hours*</p>
          </div>

          <div className='details-card'>
            <img src="https://redcliffelabs.com/_next/image?url=https%3A%2F%2Fstaticcdn.redcliffelabs.com%2Fmedia%2Fgallary-file%2FNone%2Fc9e9fd25-c6f8-4535-8663-d19a3a0ee874.png&w=48&q=100" height={40} width={40} alt="" />
            <p>Free Reports Consultation</p>
          </div>

          <div className='details-card'>
            <img src="https://redcliffelabs.com/_next/image?url=https%3A%2F%2Fstaticcdn.redcliffelabs.com%2Fmedia%2Fgallary-file%2FNone%2Fc03e03cf-c699-498b-a778-7b14b7b7ee83.png&w=48&q=100" height={40} width={40} alt="" />
            <p>Most Affordable Pricing</p>
          </div>

          <div className='details-card'>
            <img src="https://redcliffelabs.com/_next/image?url=https%3A%2F%2Fstaticcdn.redcliffelabs.com%2Fmedia%2Fgallary-file%2FNone%2F0cfcbc95-80a5-46df-9ec3-5c8f876bef43.png&w=48&q=100" height={40} width={40} alt="" />
            <p>On-time Sample Collection</p>
          </div>

          <div className='details-card'>
            <img src="https://redcliffelabs.com/_next/image?url=https%3A%2F%2Fstaticcdn.redcliffelabs.com%2Fmedia%2Fgallary-file%2FNone%2Fd5ce9f88-02a2-454b-a3be-1f1d6824b97f.png&w=48&q=100" height={40} width={40} alt="" />
            <p>NABL Certified Labs</p>
          </div>

          <div className='details-card'>
            <img src="https://redcliffelabs.com/_next/image?url=https%3A%2F%2Fstaticcdn.redcliffelabs.com%2Fmedia%2Fgallary-file%2FNone%2Fc3f1d494-e9e0-4f34-9bb0-aba942359350.png&w=48&q=100" height={40} width={40} alt="" />
            <p>Presence In 220+ Cities</p>
          </div>
        </div>
      </div>
      <Container>
      <h3 className='my-4'>Easy Home Testing in 4 Steps</h3>
      <NewCard/>
      </Container>
      <Crousal/>
      <Container className='py-4'>
      <h3 className='my-4'>What Doctors Are Saying</h3>
      <DrProfile/>
      </Container>
    </>
  )
}

export default Hero
