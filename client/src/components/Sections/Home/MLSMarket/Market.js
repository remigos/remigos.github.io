import React from 'react'
import { Container, Box, LeftContent, Button, Title, RightContent, Image, Text } from './Market.elements'
import USAMap from '../../../../images/Home/USAMap.png'
import { Link } from "gatsby"
import styled from 'styled-components'

const ButtonLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    :hover {
        color:#FF0A74;
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
                  >
                  <Button>
                  Requesting New MLS's
                  </Button>
                  </ButtonLink>
                </LeftContent>
                <RightContent>
                    <Image src={USAMap} alt='USA-map'/>
                </RightContent>
            </Box>
        </Container>
    )
}

export default Market
