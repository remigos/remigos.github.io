import React from 'react'
import { MainBuyer, InfoOneBuyer, InfoTwoBuyer, InfoThreeBuyer, InfoFourBuyer, InfoFiveBuyer, InfoSixBuyer, BenefitsBuyer } from '../components'
import GlobalStyle from '../components/globalStyles'
import Seo from '../components/seo'
import Layout from '../components/Layout/layout'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Buyers = () => {
    return (
        <>
        <GlobalStyle/>
        <Seo/>
        <Layout>
        <MainBuyer/>
        <InfoOneBuyer/>
        <InfoTwoBuyer/>
        <InfoThreeBuyer/>
        <InfoFourBuyer/>
        <InfoFiveBuyer/>
        <InfoSixBuyer/>
        <BenefitsBuyer/>
        </Layout>
        </>
    )
}

export default Buyers