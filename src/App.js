import React from "react";
import "./index.css";
import Hero from "./Components/Header/Hero";
import ContactUs from "./Components/ContactUs";
import Footer  from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs";
import OfferHelp from "./Components/OfferHelp";
import GetHelp from "./Components/GetHelp";
import {Routes, Route} from 'react-router-dom'
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
<<<<<<< HEAD
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
=======
>>>>>>> e688a57dd8934500f217f4804685e52e83fb012b
const App = () => {
  return (

      <>
 
  <Hero />
  <Routes>

<Route exact path='/' element={<ContactUs/>}></Route>
<Route exact path='/about' element = {<AboutUs/>}></Route>
<Route exact path='/offerhelp' element={<OfferHelp/>}></Route>
<Route exact path='/gethelp' element={<GetHelp/>}></Route>
<Route exact path='/contact' element={<ContactUs/>}></Route>
<Route exact path='/login' element={<Login/>}></Route>
<Route exact path='/signup' element={<SignUp/>}></Route>

  </Routes>
  <Footer />
  
      
      </>
  
  )
}

export default App
