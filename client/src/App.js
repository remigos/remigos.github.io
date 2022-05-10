import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import GlobalStyle from './globalStyles'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/HomePage/Home'
import {Footer} from './components'
import Navbar from './components/Layout/Navbar/Navbar'
import Realtors from './pages/Realtors/Realtor'
import Buyers from './pages/Buyers/Buyers'
import About from './pages/About/About'
import ScrollToTop from './components/scrollToTop'
import ContactUs from './pages/ContactUs/ContactUs'
import FaQ from './pages/FaQ/FaQ'
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions'


function App() {

  return (
    <Router>
        <GlobalStyle/>
        <Navbar />
        <ScrollToTop>
        <Routes>
        <Route path="/" element={<Navigate to="/dev-website" />} />
          <Route path='/dev-website' element={<Home/>}/>
          <Route path='/realtors' element={<Realtors/>}/>
          <Route path='/buyers' element={<Buyers/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
          <Route path='/faq' element={<FaQ/>}/>
          <Route path='/terms-and-conditions' element={<TermsAndConditions/>}/>
        </Routes>
        </ScrollToTop>
        <Footer/>
    </Router>
  );
}

export default App;
