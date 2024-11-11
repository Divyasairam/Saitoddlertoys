
import React from 'react'

function Sidenavbar() {
  return (
    <div>
        <h5 className='text-dark'></h5>
                  <a className='text-dark' href='About'>Home </a> <br />
                  <a className='text-dark' href='products'>Products </a><br />
                  <ul>
                     <li>
                        < a className='text-dark' href='Edutoys'>Educational Toys</a>
                     </li>
                     <li>
                        < a className='text-dark' href='Bctoys'>Building & construction Toys</a>
                     </li>
                     <li>
                        < a className='text-dark' href='Softtoys'>Soft Toys</a>
                     </li>
                  </ul>
                  <a className='text-dark' href='contacts'>Contact Us</a>
    </div>
  )
}

export default Sidenavbar


