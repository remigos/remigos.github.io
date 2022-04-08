import React from 'react'
import { Container, Box, LeftContent, Title, Button, RightContent, Image, Text } from './Market.elements'
import USAMap from '../../../../assets/Home/USAMap.png'
const Market = () => {
    return (
        <Container>
            <Box>
                <LeftContent>
                    <Title>Current markets and MLS's</Title>
                    <Text>If you are in a market that Remigo does not currently have MLS data for, drop us a note and let us know where you would like to see us next.</Text>
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
