import React from 'react'

function Products() {
  return (
    <>
    <div className='container-fluid'>
<p>To inspire joy, creativity, and learning in every child by providing a diverse range of high-quality toys that spark imagination, encourage growth, and build lasting memories. We aim to be the trusted choice for parents and caregivers, creating a vibrant community where play and education meet to nurture young minds for a brighter future.</p>    </div>
    <div className='container-fluid mt-2'>
        <div className='row'>
            <div className='col-md-4'>
        <div className="card-deck">
        <div className="card mb-4">
<img src='6.jpg' alt='Edc Toys'  className='card-image-top' />
            <div className="card-body">
               <h5>Educational Toys</h5> 
               <p>Nurture learning and development with toys that make education fun! From puzzles to science kits, our educational toys are perfect for building skills in an interactive way.</p>
            </div>
            <div className="card-footer"></div>
            <small className='text-muted'>Click here <button className='btn btn-dark'><a className='text-light'href='Edutoys'>View more Products </a> </button></small>
            </div>
        </div>
        </div>
        <div className='col-md-4'>
        <div className="card-deck">
        <div className="card mb-4">
<img src='7.jpg' alt='Edc Toys'  className='card-image-top' width='450px' height='360px'/>
            <div className="card-body">
               <h5>Building & construction Toys</h5> 
               <p>Encourage problem-solving and creativity with our construction sets, blocks, and building kits that challenge and inspire children of all ages.</p>
            </div>
            <div className="card-footer"></div>
            <small className='text-muted'>Click here <button className='btn btn-dark'><a className='text-light' href='Bctoys'>View more Products </a> </button></small>
            </div>
        </div>
        </div>
        <div className='col-md-4'>
        <div className="card-deck">
        <div className="card mb-4">
<img src='8.jpg' alt='Edc Toys'  className='card-image-top' width='450px' height='360px' />
            <div className="card-body">
               <h5>Soft Toys</h5> 
               <p>Cozy, cuddly, and perfect for all ages, our soft toys bring comfort and companionship, becoming trusted friends for every child.</p>
            </div>
            <div className="card-footer p-40"></div>
            <small className='text-muted'>Click here <button className='btn btn-dark'><a className='text-light' href='Softtoys'>View more Products </a> </button></small>
            </div>
        </div>
        </div> 
        </div>
    </div>
    </>
  )
}

export default Products