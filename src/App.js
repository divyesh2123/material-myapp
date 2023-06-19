import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LanguageContext from './Context/LanguageContext';
import Header from './Header';
import UserLanForm from './UserLanForm';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import FormWithValidation from './FormWithValidation';
import Appointment from './Appointment';
import NoMatch from './NoMatch';
import Button from './Button';

function App() {

 const [lan,setlan] = useState('en')
  return (
    <div className="App">

<BrowserRouter>


      <LanguageContext.Provider value={{lan,setlan}} >

        <Button><b>This is the Save</b></Button>

      
      <Link to='/'>Home</Link>  |
      <Link to='/app'>Appointment</Link>
      


      </LanguageContext.Provider>
      <Routes>

      <Route path="/" element={<FormWithValidation />}/>
      <Route path="/app" element={<Appointment />}/>
      <Route path="*" element={<NoMatch />} />


      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
