import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import GlobalStyle from './globalStyles'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Home from './pages/HomePage/Home'
import {Footer} from './components'
import Navbar from './components/Layout/Navbar/Navbar'
import Realtors from './pages/Realtors/Realtor'
import Buyers from './pages/Buyers/Buyers'
import About from './pages/About/About'
import ScrollToTop from './components/scrollToTop'
import ContactUs from './pages/ContactUs/ContactUs'

function App() {

  return (
    <Router>
        <GlobalStyle/>
        <Navbar />
        <ScrollToTop/>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dev-website" />
          </Route>
          <Route path='/dev-website' exact component={Home}/>
          <Route path='/dev-website/realtors' exact component={Realtors}/>
          <Route path='/dev-website/buyers' exact component={Buyers}/>
          <Route path='/dev-website/about-us' exact component={About}/>
          <Route path='/dev-website/contact-us' exact component={ContactUs}/>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
