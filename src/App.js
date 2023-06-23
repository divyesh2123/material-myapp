import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import LanguageContext from './Context/LanguageContext';
import Header from './Header';
import UserLanForm from './UserLanForm';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import FormWithValidation from './FormWithValidation';
import Appointment from './Appointment';
import NoMatch from './NoMatch';
import Button from './Button';
import Product from './Product';
import EcommerceContext from './Context/EContext';

function App() {

 const [data,setData] = useState([]);
 const [cart,setCart] = useState([]);


 useEffect(()=> {

  fetch("https://fakestoreapi.com/products").then(y=> {
    return y.json()
  }).then(y=> {

    setData(y)
  })

 },[])

  return (
    <div className="App">

<BrowserRouter>


      {/* <EcommerceContext.Provider value={{data,setData,cart,setCart}} >

      
        <Product/>

        
      </EcommerceContext.Provider> */}

      <Link  to="/">Home</Link>  |
      
      <Link  to="/FormWithValidation">FormWithValidation</Link>

      


      <Routes>


        <Route path='/' element={<Appointment></Appointment>}/>
        <Route path='/FormWithValidation' element={<FormWithValidation></FormWithValidation>} />


      </Routes>
      
     
      </BrowserRouter>
     
    </div>
  );
}

export default App;
