import React,{useState} from 'react'
import { Container, Text, NameContainer,ColumnContainer, TextFieldName, TextField,TextArea ,Button} from './Form.elements'
import { Title } from '../../../globalStyles'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';



const Message  = () => {


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
    const [subject,setSubject] = useState("general")
    const [userType, setUserType] = useState("")
   
    const PostData = ()=>{
        fetch("/send",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                firstname,
                lastname,
                phonenumber,
                brokerage,
                email,
                subject,
                message,
                userType
            })
        }).then(res=>res.json())
        .then(data=>{
            setMessage('')
            setFirstName('')
            setLastName('')
            setSubject('')
            setEmail('')
            setPhonenumber('')
            setBrokerage('')
            setUserType('')
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
        defaultValue="general"
      >
        <FormControlLabel
         value='general' 
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
        <div style={{display: subject === 'request MLS' ? 'flex' : 'none', flexDirection: 'column'}}>
        <RadioGroup
        column
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="general"
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