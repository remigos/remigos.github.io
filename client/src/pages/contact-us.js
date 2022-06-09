import React from 'react'
import { MainContact } from '../components'
import Layout from '../components/Layout/layout'
import GlobalStyle from '../components/globalStyles'
import Seo from '../components/seo'

const ContactUs = ({ location }) => {
    const { state = {} } = location;
    const { subject } = state

    return (
        <>
        <GlobalStyle/>
        <Seo/>
        <Layout>
            <MainContact data={subject}/>
        </Layout>
        </>
    )
}

export default ContactUs
