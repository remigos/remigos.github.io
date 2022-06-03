import React, { useState } from 'react'
import people from '../../../images/ContactUs/people.jpg'
import { Container, Content, LeftContainer, ImageContainer, Image, RightContainer } from './Contact.elements'
//import Directions from './Directions/Directions'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { FormContainer, Text, NameContainer, InputContainer} from './Form.elements'
import { Title } from '../../globalStyles'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import { Formik } from "formik";
import * as Yup from "yup";
import "./Form.css";
import CircularProgress from '@mui/material/CircularProgress';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const Main = ({ data }) => {
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
  
      const Item = styled(Alert)(() => ({
        height: '72px',
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#EFFFFD',
        color:'#1F2936',
      }));
      const [alert, setAlert] = useState(false);
      const [open, setOpen] = useState(true);
      const [opacity, setOpacity] = useState(false);
      const [buttonColor, setButtonColor] = useState('#28B8A7')
      const [buttonText, setButtonText] = useState('#fff')
      const subject = data;
      const value = subject ? 'request MLS' : 'General';
    return (
        <Container>
        <Content>
            {alert ?

                <Collapse in={open} style={{ zIndex: '300', position: 'fixed', top: '95px', width:'99%', alignItems:'center', marginLeft: '10px', height: '72px'}}
                >
                <Stack sx={{ width: '100%' }} style={{position:'sticky', top:0}} >
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
               <div>
               <Formik
                 initialValues={{ 
                     email: "" ,
                     firstname:"",
                     lastname:"",
                     brokerage:"",
                     message:"",
                     phonenumber:"",
                     subject:value,
                     "userType": "none"
           
               }}
                 onSubmit={async (values, {resetForm}) => {
                   await new Promise(resolve => setTimeout(resolve, 500));
                   setOpacity(true)
                   setButtonColor('#E5E7EB')
                   setButtonText('#777')

                   var data = {
                    firstname: values.firstname,
                    lastname:values.lastname,
                    phonenumber:values.phonenumber,
                    brokerage:values.brokerage,
                    email:values.email,
                    subject:values.subject,
                    message:values.message,
                    userType:values.userType
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
                      setAlert(true)
                      resetForm({})
                      setOpacity(false)
                      setButtonColor('#28B8A7')
                      setButtonText('#fff')

                      setTimeout(() => {
                        setAlert(false)
                    }, 4000);
                  }).catch(err=>{
                    console.log(err)
                  })
                   }}
                 validationSchema={Yup.object().shape({
                   email: Yup.string().email().required("Email is required"),
                   firstname: Yup.string().required("First name is required"),
                   lastname: Yup.string().required("Last name is required"),
                   brokerage: Yup.string(),
                   phonenumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
                   message: Yup.string().required("Please write a message").max(600, 'This message exceed 600 characters')
           
                 })}
               >
                 {props => {
                   const {
                     values,
                     touched,
                     errors,
                     isSubmitting,
                     handleChange,
                     handleBlur,
                     handleSubmit,
                     setFieldValue
                   } = props;
                   return (
                     <form onSubmit={handleSubmit}>
                     <div style={{opacity: (opacity ? 0.4 : 1)}}>
                     <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          defaultValue={value}
                        >
                          <FormControlLabel
                          type="radio"
                           value="General"
                           name="subject"
                           checked={values.subject === "General"}
                           onChange={() => setFieldValue("subject", "General")}
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
                          type="radio"
                           value="request MLS" 
                           name="subject"
                           checked={values.subject === "request MLS"}
                           onChange={() => setFieldValue("subject", "request MLS")}
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
                     <InputContainer>
                       <input
                         id="firstname"
                         placeholder="First Name"
                         type="text"
                         value={values.firstname}
                         onChange={handleChange}
                         onBlur={handleBlur}
                         className={
                           errors.firstname && touched.firstname
                             ? "input-name error"
                             : "input-name"
                         }
                       />
                       {errors.firstname && touched.firstname && (
                         <div className="input-feedback">{errors.firstname}</div>
                       )}
                       </InputContainer>
                       <InputContainer>
                       <input
                         id="lastname"
                         placeholder="Last Name"
                         type="text"
                         value={values.lastname}
                         onChange={handleChange}
                         onBlur={handleBlur}
                         className={
                           errors.lastname && touched.lastname
                             ? "input-lastname error"
                             : "input-lastname"
                         }
                       />
                       {errors.lastname && touched.lastname && (
                         <div className="input-feedback">{errors.lastname}</div>
                       )}
                       </InputContainer>
                       </NameContainer>
                       <div className="input-container">
                       <input
                           id="email"
                           placeholder="Enter your email"
                           type="text"
                           value={values.email}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           className={
                           errors.email && touched.email
                               ? "text-input error"
                               : "text-input"
                           }
                       />
                       {errors.email && touched.email && (
                           <div className="input-feedback">{errors.email}</div>
                       )}
                       </div>
                       <input
                       id="phonenumber"
                       placeholder="Phone Number"
                       value={values.phonenumber}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       className={
                           errors.phonenumber && touched.phonenumber
                           ? "text-input error"
                           : "text-input"
                       }
                       />
                       {errors.phonenumber && touched.phonenumber && (
                       <div className="input-feedback">{errors.phonenumber}</div>
                       )}
           
                       <input
                           id="brokerage"
                           placeholder="Brokerage"
                           value={values.brokerage}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           className="text-input"
                       />
                       <textarea
                           id="message"
                           placeholder="Comment"
                           type="text"
                           value={values.message}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           className={
                           errors.message && touched.message
                               ? "text-area error"
                               : "text-area"
                           }
                       />
                       {errors.message && touched.message && (
                           <div className="input-feedback">{errors.message}</div>
                       )}
                   <div style={{display: (values.subject === 'request MLS' || values.subject === 'request MLS') ? 'flex' : 'none', flexDirection: 'column'}}>
                       <RadioGroup
                       column
                       aria-labelledby="demo-row-radio-buttons-group-label"
                       name="row-radio-buttons-group"
                       defaultValue="Realtor"
                     >
                         <FormControlLabel 
                         value='Realtor' 
                         name="userType"
                         checked={values.userType === "Realtor"}
                         onChange={() => setFieldValue("userType", "Realtor")}
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
                         label={<Typography sx={{color:'#374150'}}>I am a REALTOR</Typography>}
                          />
                         <FormControlLabel 
                         value="Buyer" 
                         name="userType"
                         checked={values.userType === "Buyer"}
                         onChange={() => setFieldValue("userType", "Buyer")}
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
                         label={<Typography sx={{color:'#374150'}}>I am a Home Buyer</Typography>} 
                         />
                         </RadioGroup>
                       </div>
                       </div>
                       <button type="submit" className="form-button" disabled={isSubmitting} style={{backgroundColor: buttonColor, color: buttonText, textAlign:'center', justifyContent:'center'}}>
                         {opacity ? <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}><p style={{marginRight: '8px'}}>Sending...</p><p> </p><CircularProgress size={18} thickness={6}/></div>: <p>Submit</p>}
                       </button>
                     </form>
                   );
                 }}
               </Formik>
             </div>
            </FormContainer>
            </ThemeProvider>
            </RightContainer>
        </Content>
        </Container>
    )
}

export default Main
