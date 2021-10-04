import * as React from "react"
import Navbar from '../components/Navbar'
import InfoSection from '../components/InfoSection'
import Introduction from '../components/Introduction'
import SharedProperties from '../components/SharedProperties'
import Feedback from '../components/Feedback'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import GlobalStyle from '../components/globalStyles'
import Seo from '../components/Seo'


const IndexPage = () => {
  return (
    <>
        <GlobalStyle/>
        <Seo/>
        <Navbar/>
        <InfoSection/>
        <Introduction/>
        <SharedProperties/>
        <Feedback/>
        <ContactUs/>
        <Footer/>
    </>
  )
}

export default IndexPage
