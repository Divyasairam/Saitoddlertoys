import React from 'react'
import Footerpage from './Footerpage'

function About() {
  return (
    <>
      <div className='container-fluid'>
        <div id='myCarousel' className='carousel slide' data-bs-ride='carousel'>
          
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src='1.jpeg' alt='First image' className='d-block w-100' />
            </div>
            <div className="carousel-item">
              <img src='2.jpg' alt='second image' className='d-block w-100' />        </div>
            <div className="carousel-item">
              <img src='3.jpg' alt='Third image' className='d-block w-100' />        </div>
          </div>
          <a className='carousel-control-prev' href='#myCarousel' role='button' data-bs-slide='prev'>
            <span className='carousel-control-prev-icon'></span>
          </a>
          <a className='carousel-control-next' href='#myCarousel' role='button' data-bs-slide='next'>
            <span className='carousel-control-next-icon'></span>
          </a>
          
        </div>
      </div>
      <div className='container-fluid mt-3'>
        <div className='row '>
          <div className='col-md-12 col-lg-6 mb-4'>
            <img className='img-fluid' src='4.jpg' alt='teddy image' style={{ width: "100%", height: "85%" }} />
          </div>
          <div className='col-md-12 col-lg-6'>
            <h3 className='bg-dark text-light p-2'> Know more about us</h3>
            <p>Welcome to Sai Toddler Toys, your one-stop shop for fun, safe, and educational toys for children of all ages. Our mission is to bring joy and learning into playtime with high-quality toys that encourage creativity, curiosity, and development. From educational toys and building blocks to soft toys and games, we have something for every little one. At Sai Toddler Toys, we understand the importance of play in a child's growth, and we’re committed to offering a range of products that inspire and delight. Thank you for choosing us to be part of your child's learning journey! <br /> <br />
              Our mission is to inspire creativity, learning, and joy in children of all ages by offering safe, high-quality toys that spark imagination and nurture growth. We aim to be a trusted partner for parents and caregivers, providing toys that encourage exploration, build confidence, and create lasting memories for children everywhere.
              <br /> <br />
              To inspire joy, creativity, and learning in every child by providing a diverse range of high-quality toys that spark imagination, encourage growth, and build lasting memories.
            </p>
          </div>
        </div>
      </div>
      <Footerpage />



    </>
  )
}

export default About