// Helper styles for demo
import "./Form.css";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { NameContainer } from './Form.elements'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const Formfield = () => (

  <div>
    <Formik
      initialValues={{ 
          email: "" ,
          firstname:"",
          lastname:"",
          brokerage:"",
          message:"",
          phonenumber:"",
          subject: "General",
          "userType": "none"

    }}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required("Required"),
        firstname: Yup.string().required("Required"),
        lastname: Yup.string().required("Required"),
        brokerage: Yup.string(),
        phonenumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        message: Yup.string().required("Required").max(140)

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
        console.log(values.subject)
        return (
          <form onSubmit={handleSubmit}>
          <RadioGroup
               row
               aria-labelledby="demo-row-radio-buttons-group-label"
               name="row-radio-buttons-group"
               defaultValue={values.subject}
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
            <input
              id="lastname"
              placeholder="Last Name"
              type="text"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.lastname && touched.lastname
                  ? "input-name error"
                  : "input-name"
              }
            />
            {errors.lastname && touched.lastname && (
              <div className="input-feedback">{errors.lastname}</div>
            )}
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
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        );
      }}
    </Formik>
  </div>
    
);

export default Formfield;