import React from 'react'
import ErrorNotFound from '../images/404.png'
import styled from 'styled-components';
import { navigate } from 'gatsby'
import GlobalStyle from '../components/globalStyles'
import Seo from '../components/seo'
import Layout from '../components/Layout/layout'

const Container = styled.div`
    display: flex;
    justify-content: center;
    width:100%;
    background-color: #374150;
    align-items: center;
    padding: 150px 0px 180px 0px;
    border-bottom: 1px solid #515966;
    @media screen and (max-width:960px) {
        padding: 0px 15px;
        justify-content: center;
    }
`
const LeftContent = styled.div`
    width:50%;
    max-width:540px;
    flex-direction:column;
    align-items:left;
    justify-content:flex-start;
    display:flex;

    @media screen and (max-width:1200px) {
        width:100%;
        max-width:1000px;
        justify-content:center;
    }
    @media screen and (max-wdith:768px){
        margin-top:70px;
    }
`
const RightContent = styled.div`
    display: flex;
    width: 50%;
    max-width:500px;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 10px;
    margin: 0px 150px;
    @media screen and (max-width:960px) {
        justify-content:flex-start;
        width: 100%;
        margin-right: 40px;
    }

    @media screen and (max-width:768px) {
        padding: 0px 0px;
        margin: 20px 0px 20px 30px;

    }
`
const BottomContent = styled.div`
    display: flex;
    width:100%;
    align-items:center;
    justify-content: center;
    flex-direction: row;
    @media screen and (max-width:960px) {
        flex-direction: column;
        padding: 0;
    }
`
const Content = styled.div`
    max-width: 1800px;
    width:100%;
    display: flex;
    justify-content: center;

`

const Heading = styled.h1`
    color:#fff;
    font-size:64px;
    line-height:1.1;
    margin-bottom:24px;
    font-weight:bold;
    @media screen and (max-width:768px) {
        font-size:36px;
        font-family:‘Lexend’, sans-serif;
    }
`
const Subtitle = styled.p`
    color: #fff;
    font-size:18px;
    line-height:24px;
    margin-bottom:35px;
    max-width:440px;
`
const ImageContainer = styled.div`
    align-items: center;
    justify-content: center;
    width:70%;
    max-width: 600px;
`
const Image = styled.img`
    padding-right: 0;
    border:0;
    max-width:100%;
    vertical-align:middle;
    display:inline-block;
    max-width:600px;
    @media screen and (max-width:768px) {
        display:none;
    }
`
const Button = styled.button`
        background: #28B8A7;
        font-family: ‘Poppins’, sans-serif;
        color:#fff;
        width:150px;
        height: 49px;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 8px ;
        border: none;
        margin-top: 2px;
        cursor:pointer;
        position: relative;
        transition-duration: 0.3s;
        &:hover {
            background:#22A494;
            color:#fff;
        }
`
const NotFoundPage = () => {
    return (
        <>
            <GlobalStyle/>
            <Seo/>
            <Layout>
                <Container>
                <Content>
                <BottomContent>
                    <LeftContent>
                                <Heading>Error 404, not found</Heading>
                                <Subtitle>Ops! looks like this page doesn’t exist</Subtitle>
                                <Button onClick={() =>{navigate('/')}}>Go Back</Button>
                    </LeftContent>
                    <RightContent>
                        <ImageContainer>
                          <Image src={ErrorNotFound} alt='error-img'/>
                        </ImageContainer>
                    </RightContent>
                </BottomContent>
                </Content>
            </Container>
            </Layout>
        </>
    )
}
export default NotFoundPage