import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import GlobalStyle from './globalStyles'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/HomePage/Home'
import {Footer} from './components'
import Navbar from './components/Layout/Navbar/Navbar'
import Realtors from './pages/Realtors/Realtor'
import Buyers from './pages/Buyers/Buyers'
import About from './pages/About/About'

function App() {

  return (
    <Router>
        <GlobalStyle/>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/realtors' exact component={Realtors}/>
          <Route path='/buyers' exact component={Buyers}/>
          <Route path='/about-us' exact component={About}/>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
