import React from 'react'
import { Container, Box, PanelContainer } from './Chat.elements';
import UnstyledTabsCustomized from './Tabs'
const Chat = () => {
    return (
        <Container>
            <Box>
                <PanelContainer>
                    <UnstyledTabsCustomized/>
                </PanelContainer>
            </Box>
        </Container>
    )
}

export default Chat
