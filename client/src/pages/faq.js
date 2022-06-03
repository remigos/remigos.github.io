import React from 'react'
import { MainFaQ, Acordion } from '../components'
import { Container } from '../components/globalStyles'
import GlobalStyle from '../components/globalStyles'
import Seo from '../components/seo'
import Layout from '../components/Layout/layout'

const FaQ = () => {
    return (
        <Layout>
            <Container>
                <GlobalStyle/>
                <Seo/> 
                <MainFaQ/>
                <Acordion/>
            </Container>
        </Layout>
    )
}

export default FaQ
