import React from 'react'
import GlobalStyle from '../globalStyles'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../components/Home'
import {Navbar,Footer} from '../components'
import Seo from '../components/SEO/SEO'

function IndexPage() {

  return (
    <Router>
        <Seo/>
        <GlobalStyle/>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default IndexPage;
