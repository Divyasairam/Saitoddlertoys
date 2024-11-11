import React from 'react'
import Footerpage from './Footerpage'

function Contacts() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center'>
            <img src='10.jpg' alt='contact us' className='img-fluid' />
          </div>
        </div>
        <div className='row my-5'>
          <div className='col-12 col-md-6 bg-secondary'>
            <h4 className='text-dark' ><i className="text-dark fas fa-map-marker-alt">: </i> Find the way. Reach our Store

            </h4>
            <hr />
            <div className="ratio ratio-1x1" style={{ width: "100%", height: '60%' }}>

              <iframe width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=coimbatore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>

          </div>
          <div className='col-md-6 bg-secondary'>
            <div className='row'>
              <div className='col-md-4'>
                <h4 className='text-dark'>Contact Us</h4>
                <hr />
                <h6 className='text-dark'>Sai Toddler Toys</h6>
                <p className='text-dark'>10D, XXX 2nd Extn,<br />
                  Coimbatore Post,<br />
                  Coimbatore - 641008
                </p>
                <p className='text-dark'> <i className="text-dark fas fa-phone"> : </i>
                  +91 xxxx xxx xxx</p>
                <p className='text-dark'> <i className="text-dark fas fa-envelope"> : </i>
                  saitoddlertoys@gmail.com</p>
              </div>

              <div className='col-md-3 mt-5'>
                <a className='text-dark' href='https://facebook.com' target='_blank'>  <i className="fab fa-facebook m-2"> </i>
                  Facebook </a> <br />
                <a className='text-dark' href='https://instagram.com' target='_blank'> <i className="fab fa-instagram m-2"></i> Instagram </a> <br />
                <a className='text-dark' href='https://twitter.com' target='_blank'><i className="fab fa-twitter m-2"></i> Twitter </a> <br />
              </div>


              <div className='col-md-5 mt-1'>
                <img src='ge.png' alt='Sai Toddler Toys' width="300" height="300" />

              </div>
            </div>

            <h4 className=''>Get in Touch</h4>
            <hr />

            <form action=''>
              <div className='form-group'>

                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' id='name' placeholder='Enter your Name' className='form-control mt-1' required />
                <label className='mt-3' htmlFor='phone'>Mobile No.:</label>
                <input type='number' name='phone' id='phone' placeholder='Enter your Mobile Number' className='form-control mt-1 ' required />
                <label className='mt-3' htmlFor='email'>Email:</label>
                <input type='email' name='email' id='email' placeholder='Enter your Email' className='form-control mt-1' required />
              </div>
              <div className='form-group'>
                <label className='mt-3' htmlFor='source'>Select your Queries</label>
                <select name='source' id='source' className='form-control mt-1'>
                  <option value=''>--Select your Query from below options--</option>
                  <option value=''>Toys Review</option>
                  <option value=''>Toys Damage</option>
                  <option value=''>Return Policy & Exchange</option>
                </select>
              </div>
              <div className='form-group'>

                <label className='mt-3 mb-2' htmlFor='yourquery'>Your Queries</label>
                <textarea type='text' name='yourquery' id='yourquery' placeholder='Enter about your queries in detailed' className='form-control mt-1'></textarea>
              </div>
              <div className='form-group mt-2 mb-2 d-flex justify-content-end gap-3'>
                <button type='button' className='btn btn-danger '>Cancel</button>
                <button type='button' className='btn btn-success me-3' >Submit</button>
              </div>
            </form>
          </div>
        </div >
      </div>
      <Footerpage />

    </>
  )
}

export default Contacts