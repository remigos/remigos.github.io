import React from 'react'
import { Container, Box, LeftContent, Title, RightContent, Image, Text } from './Market.elements'
import USAMap from '../../../../images/Home/USAMap.png'
import { Link } from "gatsby"
import styled from 'styled-components'

const ButtonLink = styled(Link)`
    text-decoration: none;
    width:292px;
    height: 68px;
    background-color:#FF0A74;
    border-radius: 6px;
    align-items: center;
    justify-content:center;
    color:#fff;
    font-weight:600;
    border:none;
    font-size:16px;
    cursor: pointer;
    padding:15px 90px;
    :hover {
        background-color:transparent;
        color:#FF0A74;
        border: 1px solid #FF0A74;
    }

    @media screen and (max-width:960px) {
        width:221px;
    }
    @media screen and (max-width:768px) {
        width:100%;
    }
`


const Market = () => {

    return (
        <Container>
            <Box>
                <LeftContent>
                    <Title>Current markets and MLS's</Title>
                    <Text>If you are in a market that Remigo does not currently have MLS data for, drop us a note and let us know where you would like to see us next.</Text>
                    <ButtonLink
                    to={'/contact-us'}
                    state={{subject: true}}
                  >Requesting New MLS's</ButtonLink>
                </LeftContent>
                <RightContent>
                    <Image src={USAMap} alt='USA-map'/>
                </RightContent>
            </Box>
        </Container>
    )
}

export default Market
