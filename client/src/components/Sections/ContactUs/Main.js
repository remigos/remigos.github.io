import React, { useState } from 'react'
import people from '../../../assets/ContactUs/people.jpg'
import { Container, Content, LeftContainer, ImageContainer, Image, RightContainer } from './Contact.elements'
//import Directions from './Directions/Directions'
import {useLocation} from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { FormContainer, Text, NameContainer,ColumnContainer, TextFieldName, TextField,TextArea, FormButton} from './Form.elements'
import { Title } from '../../../globalStyles'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';

const Main = () => {
    const theme = createMuiTheme({
        typography: {
          fontFamily: [
            'Poppins',
            'sans-serif'
          ].join(','),
          fontSize: 14,
          color:grey[500]
        },
        palette: {
          primary: {
            main: '#00aeff',
          },
        },
        overrides: {
          MuiFormControlLabel: {
            label: {
              fontSize: 14,
              color:grey[500]
            },
          },
        }
      })
  
      const Item = styled(Alert)(({ theme }) => ({
        height: '72px',
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#EFFFFD',
        color:'#1F2936',
      }));
      const [firstname,setFirstName] = useState("")
      const [lastname,setLastName] = useState("")
      const [email,setEmail] = useState("")
      const [phonenumber,setPhonenumber] = useState("")
      const [brokerage,setBrokerage] = useState("")
      const [message,setMessage] = useState("")
      const [subject,setSubject] = useState("General")
      const [userType, setUserType] = useState("none");
      const [alert, setAlert] = useState(false);
      const [open, setOpen] = useState(true);

const location = useLocation();

const value = location.state ? location.state.values : 'General'
console.log(value)
const PostData = () => {
    var data = {
      firstname: firstname,
      lastname:lastname,
      phonenumber:phonenumber,
      brokerage:brokerage,
      email:email,
      subject:subject,
      message:message,
      userType:userType
    }
      fetch("https://o8crk98988.execute-api.us-east-1.amazonaws.com/serverless_lambda_stage/sendgrid",{
      method:"post",
      mode: 'no-cors',
      headers:{
          "Content-Type":"application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST,OPTIONS"

      },
      body:JSON.stringify(data)
  })
  .then(() => {
      setMessage('')
      setFirstName('')
      setLastName('')
      setSubject('General')
      setEmail('')
      setPhonenumber('')
      setBrokerage('')
      setUserType('')
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
    }, 4000);
  }).catch(err=>{

  })  
}
    return (
        <Container>
        <Content>
            {alert ?
                <Collapse in={open} style={{ zIndex: '30', position: 'absolute', top: '95px', width:'99%', alignItems:'center', marginLeft: '10px', height: '72px'}}
                >
                <Stack sx={{ width: '100%' }} >
                    <Item onClose={() => {setOpen(false)}}>Success! We'll respond as soon as possible.</Item>
                </Stack>
                </Collapse>
             : <div style={{display:'none'}}></div>
            }
            <LeftContainer>
                <ImageContainer>
                    <Image src={people} alt='people'/>
                </ImageContainer>
            </LeftContainer>
            <RightContainer>
            <ThemeProvider theme={theme}>
            <FormContainer>
               <Title>Contact Us</Title>
               <Text>Have an inquiry or some feedback for us? Fill out the from below to contact out team.</Text>
               <RadioGroup
               row
               aria-labelledby="demo-row-radio-buttons-group-label"
               name="row-radio-buttons-group"
               defaultValue={value}
             >
               <FormControlLabel
                value='General' 
                onChange={(e)=> setSubject(e.target.value)} 
                control={
                  <Radio
                  sx={{
                   color: grey[500],
                   '&.Mui-checked': {
                     color: 'primary',
                   },
                 }}
                  />} 
               label={<Typography sx={{color:'#374150'}}>General</Typography>} 
               />
               <FormControlLabel
                value="request MLS" 
                onChange={(e)=> setSubject(e.target.value)} 
                control={
                  <Radio 
                  sx={{
                   color: grey[500],
                   '&.Mui-checked': {
                     color: 'primary',
                   },
                 }}/>
                 } 
                 label={<Typography sx={{color:'#374150'}}>Request MLS</Typography>} />
             </RadioGroup>
               <NameContainer>
                 <TextFieldName
                 type="text"
                 value={firstname}
                 placeholder="First Name"
                 onChange={(e)=>setFirstName(e.target.value)}
                 />
               <TextFieldName
               type="text"
               placeholder="Last Name"
               value={lastname}
               onChange={(e)=>setLastName(e.target.value)}/>
               </NameContainer>
               <ColumnContainer>
               <TextField
               type="email"
               placeholder="Email"
               value={email}
               onChange={(e)=>setEmail(e.target.value)}/>
               <TextField
               type="tel"
               placeholder="Phone"
               value={phonenumber}
               onChange={(e)=>setPhonenumber(e.target.value)}/>
               <TextField
               type="text"
               placeholder="Brokerage"
               value={brokerage}
               onChange={(e)=>setBrokerage(e.target.value)}/>
               <TextArea
               type="text"
               placeholder="Comment"
               value={message}
               onChange={(e)=>setMessage(e.target.value)}/>
               <div style={{display: (subject === 'request MLS' || value === 'request MLS') ? 'flex' : 'none', flexDirection: 'column'}}>
               <RadioGroup
               column
               aria-labelledby="demo-row-radio-buttons-group-label"
               name="row-radio-buttons-group"
               defaultValue="REALTOR"
             >
                 <FormControlLabel 
                 value='REALTOR' 
                 onChange={(e)=> setUserType(e.target.value)} 
                 control={
                   <Radio
                   sx={{
                     color: grey[500],
                     '&.Mui-checked': {
                       color: 'primary',
                     },
                   }}
                   />
                 } 
                 label={<Typography sx={{color:'#374150'}}>I am a REALTOR</Typography>} />
                 <FormControlLabel 
                 value="Buyer" 
                 onChange={(e)=> setUserType(e.target.value)} 
                 control={
                   <Radio
                   sx={{
                     color: grey[500],
                     '&.Mui-checked': {
                       color: 'primary',
                     },
                   }}
                   />
                 } 
                 label={<Typography sx={{color:'#374150'}}>I am a Home Buyer</Typography>} />
                 </RadioGroup>
               </div>
               </ColumnContainer>
               <FormButton onClick={() => PostData()}>Send</FormButton>
            </FormContainer>
            </ThemeProvider>
            </RightContainer>
        </Content>
        </Container>
    )
}

export default Main
