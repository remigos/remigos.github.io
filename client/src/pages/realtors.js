import React from 'react'
import { Main, InfoOneRealtors, InfoTwoRealtors, InfoThreeRealtors, InfoFourRealtors, InfoFiveRealtors, InfoSixRealtors, Benefits } from '../components'
import GlobalStyle from '../components/globalStyles'
import Seo from '../components/Seo'
import Layout from '../components/Layout/layout'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Realtor = () => {
    return (
        <>
        <GlobalStyle/>
        <Seo/>
        <Layout>
        <Main/>
        <InfoOneRealtors/>
        <InfoTwoRealtors/>
        <InfoThreeRealtors/>
        <InfoFourRealtors/>
        <InfoFiveRealtors/>
        <InfoSixRealtors/>
        <Benefits/>
        </Layout>
        </>
    )
}

export default Realtor
