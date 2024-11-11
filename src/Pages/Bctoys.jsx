import React from 'react'
import Sidenavbar from './Sidenavbar'

function Bctoys() {
   const products = [
      { id: 1, name: "Building & construction Toys-1", price: "Rs.499", image: "7.jpg" },
      { id: 2, name: "Building & construction Toys-2", price: "Rs.399", image: "7.jpg" },
      { id: 3, name: "Building & construction Toys-3", price: "Rs.299", image: "7.jpg" },
      { id: 4, name: "Building & construction Toys-4", price: "Rs.359", image: "7.jpg" },
      { id: 5, name: "Building & construction Toys-5", price: "Rs.459", image: "7.jpg" },
      { id: 6, name: "Building & construction Toys-6", price: "Rs.449", image: "7.jpg" },
   ];
   return (
      <>


         <div className='container-fluid'>
            <h3 className='text-dark text-center bg-secondary'> Building & construction Toys</h3>
         </div>

         <div className='container-fluid'>
            <div className="row">
               <div className="col-md-2">
                  <Sidenavbar />
               </div>

               <div className="col-md-10">
                  <div className="row">
                     {products.map((product) => (
                        <div className="col-md-4" key={product.id}>
                           <div className="card mb-4 d-flex align-items-center justify-content-center">
                              <img
                                 src={product.image}
                                 alt={product.name}
                                 className="card-image-top mt-3"
                                 width="350px"
                                 height="350px"
                              />
                              <div className="card-body">
                                 <h5>{product.name}</h5>
                                 <p className='text-center'>{product.price}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </>)
}

export default Bctoys