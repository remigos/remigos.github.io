import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import {Title, Subtitle, Text, Span} from './Acordion.elements'


const Accordion = styled((props) => (
  <MuiAccordion  elevation={0} square {...props} />
))(({ theme }) => ({
  borderTop:0,
  borderBottom: `1px solid #E5E7EB`,
  margin:'0px 30px',
  '&:not(:last-child)': {
    borderBottom: `1px solid #E5E7EB`,
    margin:'0px 30px',
  },
  '&:before': {
    display: 'none',
    margin:'0px 30px',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1rem', color:'#000',transform: 'rotate(90deg)'}} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .0)',
  flexDirection: 'row',
  padding:'20px 20px',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {

  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{padding:'40px 0px'}}>
    <Title>Frequently Asked Questions</Title>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Subtitle>Does Remigo cost money?</Subtitle>
        </AccordionSummary>
        <AccordionDetails>
          <Text>
          Remigo is free to use for buyers. Real estate agents are billed monthly for the use of Remigo. The billing information will be available in your account or on the pricing page. If you have questions about your bill please contact <Span>support@remigo.com</Span>
          </Text>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Subtitle>Is Remigo available in my city?</Subtitle>
        </AccordionSummary>
        <AccordionDetails>
          <Text>
          We are working on building out support for new cities everyday but if you have interest in a specific city please reach out to <Span>support@remigo.com</Span>. We prioritize development of data feed by demand and technical availability.
          </Text>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Subtitle>When will Remigo exit the development phase?</Subtitle>
        </AccordionSummary>
        <AccordionDetails>
          <Text>
          We are working hard on Remigo development and will never stop bringing new features to our users; however Remigo will release a full version in 2022.
          </Text>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Subtitle>How do I delete my account?</Subtitle>
        </AccordionSummary>
        <AccordionDetails>
          <Text>
            Email <Span>support@remigo.com</Span> to delete your account and data.
          </Text>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Subtitle>If I discontinue my account will I lose my data?</Subtitle>
        </AccordionSummary>
        <AccordionDetails>
          <Text>
          Remigo will hold on to a user’s data for up to 12 month before removing.
          </Text>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Subtitle>Can I share properties not on Remigo?</Subtitle>
        </AccordionSummary>
        <AccordionDetails>
          <Text>
          Yes! We understand that Remigo and the local MLS may not have all of the properties in a given market and so we have added the functionality to quickly add and send listings via a link. We do our best to pull in the data in one click however some data may require you to add it manually.
          </Text>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Subtitle>How do I update my brokerage info?</Subtitle>
        </AccordionSummary>
        <AccordionDetails>
          <Text>
          In your profile you can update your Brokerage Name.
          </Text>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Subtitle>Does my subscription auto renew?</Subtitle>
        </AccordionSummary>
        <AccordionDetails>
          <Text>
          Yes, in order to keep service continuous, our subscription is auto renewed at the same amount you were billed unless otherwise notified. You are welcome to cancel at any time.
          </Text>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Subtitle>What if I can’t login anymore?</Subtitle>
        </AccordionSummary>
        <AccordionDetails>
          <Text>
          First, use the “forgot password” option on the login page. If this does not solve your problem for any reason please reach out to <Span>support@remigo.com</Span>. We may require you to prove your identity before we can assist you in some circumstances.
          </Text>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
          <Subtitle>How do I change realtors?</Subtitle>
        </AccordionSummary>
        <AccordionDetails>
          <Text>
          If a new REALTOR invites you to connect, you will change the REALTOR you are associated with. For now, there is no way to see many REALTOR connections at once. However, if you switch invites to a REALTOR you were active with in the past your data will persist.
          </Text>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
          <Subtitle>How many clients can I sign up?</Subtitle>
        </AccordionSummary>
        <AccordionDetails>
          <Text>
          Right now there is no limit to how many clients a REALTOR can add.
          </Text>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}