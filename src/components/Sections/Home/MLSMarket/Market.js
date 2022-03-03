import React from 'react'
import { Container, Box, LeftContent, Title, Button, RightContent, Image } from './Market.elements'
import USAMap from '../../../../assets/USAMap.png'
const Market = () => {
    return (
        <Container>
            <Box>
                <LeftContent>
                    <Title>Current markets and MLS's</Title>
                    <Button>Requesting New MLS's</Button>
                </LeftContent>
                <RightContent>
                    <Image src={USAMap} alt='map'/>
                </RightContent>
            </Box>
        </Container>
    )
}

export default Market
