import React from 'react'
import { MainFaQ, Acordion } from '../components'
import { Container } from '../components/globalStyles'
import GlobalStyle from '../components/globalStyles'
import Seo from '../components/seo'
const FaQ = () => {
    return (
        <Container>
            <GlobalStyle/>
            <Seo/> 
            <MainFaQ/>
            <Acordion/>
        </Container>
    )
}

export default FaQ
