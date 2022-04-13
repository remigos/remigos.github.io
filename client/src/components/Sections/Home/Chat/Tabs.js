import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { LeftPanel, RightPanel, Title, Text, Button, Image } from './Chat.elements'
import ShareView from '../../../../assets/Home/ShareView.png'
import ChatView from '../../../../assets/Home/ChatView.png'
import FeedbackView from '../../../../assets/Home/FeedbackView.png'
import Fade from 'react-reveal'
import './Icons.css'

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
          <i class="material-icons">chat</i>
          Chat
        </Tab>
        <Tab>
          <i class="material-icons">share</i>
        Sharing
        </Tab>
        <Tab>
          <i class="material-icons">star</i>
        Feedback
        </Tab>
      </TabsList>
      <TabPanel value={0}>
            <LeftPanel>
            <Fade>

                <Title>
                One Platform One Conversation
                </Title>
                <Text>
                Remigo chat is specifically designed for sharing and discussing properties
                </Text>

                <Button onClick={()=> window.open("https://app.remigo.com/onboarding", "_blank")}>
                    Get Started
                </Button>
                </Fade>

            </LeftPanel>
            <RightPanel>
                <Fade right>
                  <Image src={ChatView} alt="chat-view"/>
                </Fade>
            </RightPanel>
      </TabPanel>
      <TabPanel value={1}>
            <LeftPanel>
                <Fade>
                <Title>
                Share Properties & Stay Organized
                </Title>
                <Text>
                Share properties quickly and easily see which clients are saving the listing.
                </Text>
                <Button onClick={()=> window.open("https://app.remigo.com/onboarding", "_blank")}>
                    Get Started
                </Button>
                </Fade>
            </LeftPanel>
            <RightPanel>
                <Fade right>
                <Image src={ShareView} alt="chat-view"/>
                </Fade>
            </RightPanel>      
      </TabPanel>
      <TabPanel value={2}>
            <LeftPanel>
            <Fade>
                <Title>
                Making Feedback Convenient
                </Title>
                <Text>
                Engaging clients and receiving feedback on shared properties makes for a better shopping experience for all parties
                </Text>
                <Button onClick={()=> window.open("https://app.remigo.com/onboarding", "_blank")}>
                    Get Started
                </Button>
              </Fade>
            </LeftPanel>
            <RightPanel>
            <Fade right>
                <Image src={FeedbackView} alt="chat-view"/>
              </Fade>
            </RightPanel>      
      </TabPanel>
    </TabsUnstyled>
  );
}