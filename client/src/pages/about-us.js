import React from 'react'
import { MainAbout, InfoOneAbout, InfoTwoAbout, InfoThreeAbout, InfoFourAbout } from '../components'
import GlobalStyle from '../components/globalStyles'
import Seo from '../components/seo'
import Layout from '../components/Layout/layout'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const About = () => {
    return (
        <>
            <GlobalStyle/>
            <Seo/>
            <Layout>
            <MainAbout/>
            <InfoOneAbout/>
            <InfoTwoAbout/>
            <InfoThreeAbout/>
            <InfoFourAbout/>
            </Layout>
        </>
    )
}

export default About
