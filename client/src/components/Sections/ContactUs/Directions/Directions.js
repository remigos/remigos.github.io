import React from 'react'
import { Container, Card, City, Text } from './Directions.elements'
import Divider from '@mui/material/Divider';

const Directions = () => {
    return (
        <Container>
            <Card>
                <City>San Francisco</City>
                <Text>3517 W. Gray St. Utica, Pennsylvania 57867</Text>
            </Card>
            <Divider orientation="vertical" flexItem/>
            <Card>
                <City>Austin</City>
                <Text>2715 Ash Dr. San Jose, South Dakota 83475</Text>
            </Card>
            <Divider orientation="vertical" flexItem/>
            <Card>
                <City>Chicago</City>
                <Text>2715 Ash Dr. San Jose, South Dakota 83475</Text>
            </Card>
        </Container>
    )
}

export default Directions
