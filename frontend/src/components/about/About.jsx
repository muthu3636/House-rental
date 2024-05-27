import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Welcome to our Rental house website, where finding your ideal rental home is our top priority. As a leading rental house agency, we specialize in connecting tenants with exceptional properties that suit their lifestyle and preferences. With a dedicated team of experienced professionals, we strive to provide unparalleled service and support throughout the entire rental process. Our extensive portfolio features a diverse range of rental houses, from cozy suburban retreats to chic urban apartments, ensuring that there's something for everyone. What sets us apart is our commitment to understanding the unique needs of each client and delivering personalized solutions that exceed expectations. Whether you're a first-time renter or a seasoned tenant, you can trust us to guide you every step of the way, from property selection to lease signing and beyond.we're not just in the business of renting houses – we're in the business of helping you find your perfect home. Welcome to a new era of rental living.</p>
            
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
