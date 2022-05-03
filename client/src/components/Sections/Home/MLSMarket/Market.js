import React from 'react'
import { Container, Box, LeftContent, Title, Button, RightContent, Image, Text } from './Market.elements'
import USAMap from '../../../../assets/Home/USAMap.png'
import { useNavigate } from "react-router-dom";

const Market = () => {

    const navigate = useNavigate();

    const toComponentB=()=>{
        navigate('/contact-us',{state:{subject:'request MLS'}});
    }

    return (
        <Container>
            <Box>
                <LeftContent>
                    <Title>Current markets and MLS's</Title>
                    <Text>If you are in a market that Remigo does not currently have MLS data for, drop us a note and let us know where you would like to see us next.</Text>
                    <Button onClick={()=> toComponentB()}>Requesting New MLS's</Button>
                </LeftContent>
                <RightContent>
                    <Image src={USAMap} alt='USA-map'/>
                </RightContent>
            </Box>
        </Container>
    )
}

export default Market
