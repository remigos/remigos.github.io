import * as React from "react"
import {InfoSection, InfoOne, InfoTwo, InfoThree, Reviews, Chat, Market } from '../components';
import GlobalStyle from '../components/globalStyles'
import Seo from '../components/Seo'
import Layout from '../components/Layout/layout'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const IndexPage = () => {
  return (
    <>
      <GlobalStyle/>
      <Seo/>
      <Layout>
      <InfoSection/>
      <InfoOne />
      <InfoTwo />
      <InfoThree />
      <Reviews/>
      <Chat/>
      <Market/>
      </Layout>
    </>
  )
}

export default IndexPage
