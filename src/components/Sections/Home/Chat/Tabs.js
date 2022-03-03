import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import chatIcon from '../../../../assets/Icon/Chat.png'
import shareIcon from '../../../../assets/Icon/Vector.png'
import shapeIcon from '../../../../assets/Icon/Shape.png'
import { Icon, LeftPanel, RightPanel, Title, Text, Button, Image } from './Chat.elements'
import ChatView from '../../../../assets/ChatView.png'

const Tab = styled(TabUnstyled)`
  font-family: 'Poppins', sans-serif;
  color: black;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  background-color: transparent;
  width: 112px;
  height:32px;
  padding: 6px;
  margin-right: 10px;
  border: none;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #00AEEF;
    color:white;
  }

  &:focus {
    color: #fff;
    background-color: #00AEEF;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #00AEEF;;
    color: white;
    box-shadow: 0px 3px 4px rgba(0, 174, 239, 0.36);
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-size: 0.875rem;
  fleex-direction: row;
  display:flex;
  justify-content:space-between;
  @media screen and (max-width:768px){
        flex-direction: column;
    }
`;

const TabsList = styled(TabsListUnstyled)`
  background-color: transparent;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-content: space-between;
`;

export default function UnstyledTabsCustomized() {
  return (
    
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>
            <Icon src={chatIcon} alt='chat'/>
            Chat
        </Tab>
        <Tab>
            <Icon src={shareIcon} alt='chat'/>
            Sharing
        </Tab>
        <Tab>
            <Icon src={shapeIcon} alt='chat'/>
            Feedback
        </Tab>
      </TabsList>
      <TabPanel value={0}>
            <LeftPanel>
                <Title>
                    Chat between realtor and client
                </Title>
                <Text>
                This video will show the platform being used to chat back and forth between realtor and client
                </Text>
                <Button>
                    Get Started
                </Button>
            </LeftPanel>
            <RightPanel>
                <Image src={ChatView} alt="chat-view"/>
            </RightPanel>
      </TabPanel>
      <TabPanel value={1}>Second content</TabPanel>
      <TabPanel value={2}>Third content</TabPanel>
    </TabsUnstyled>
  );
}