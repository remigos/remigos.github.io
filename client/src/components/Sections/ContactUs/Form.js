import React,{useState} from 'react'
import { Container, Text, NameContainer,ColumnContainer, TextFieldName, TextField,TextArea ,Button} from './Form.elements'
import { Title } from '../../../globalStyles'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

const Message  = (props) => {


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


    const [firstname,setFirstName] = useState("")
    const [lastname,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [phonenumber,setPhonenumber] = useState("")
    const [brokerage,setBrokerage] = useState("")
    const [message,setMessage] = useState("")
    const [subject,setSubject] = useState("General")
    const [userType, setUserType] = useState("none");
    const navigate = useNavigate();

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
        setSubject('')
        setEmail('')
        setPhonenumber('')
        setBrokerage('')
        setUserType('')
        navigate('/contact-us',{state:{success:true}});
    }).catch(err=>{

    })  
  }

   return (
     <ThemeProvider theme={theme}>
     <Container>
        <Title>Contact Us</Title>
        <Text>Have an inquiry or some feedback for us? Fill out the from below to contact out team.</Text>
        <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue={props.subject}
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
        <div style={{display: (subject === 'request MLS' || props.subject === 'request MLS') ? 'flex' : 'none', flexDirection: 'column'}}>
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
        <Button onClick={() => PostData()}>Send</Button>
     </Container>
     </ThemeProvider>
     
   )
}


export default Message