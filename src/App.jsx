import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Products from './Pages/Products';
import Contacts from './Pages/Contacts';
import Edutoys from './Pages/Edutoys';
import Bctoys from './Pages/Bctoys';
import Softtoys from './Pages/Softtoys';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h4 className='container-fluid p50 text-center'>
        <img className='img-fluid' src="ge.png" width="40" height="20" />"Bringing Joy and Imagination to Every Child!"</h4>
      
      <Routes>
        <Route path='/' element={<About />}></Route>
        <Route path='Products' element={<Products />}></Route>
        <Route path='Edutoys' element={<Edutoys />}></Route>
        <Route path='Bctoys' element={<Bctoys />}></Route>
        <Route path='Softtoys' element={<Softtoys />}></Route>
        <Route path='Contacts' element={<Contacts />}></Route>
      </Routes>
    </>
  )
}

export default App
