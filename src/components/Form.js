import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const Row = styled.div`
    p {
      color:#fff; 
    }
`

const Form = styled.form`
    display:grid;
    button {
        background: linear-gradient(#444444, #222222);
        color:var(--white);
        border-bottom-right-radius: 8px;
        border-top-right-radius: 8px;
        width:55px;
        height: 49px;
        font-size: 1rem;
        font-weight: bold;
        margin-left: -57px;
        color:#fff;
        margin-top: 2px;
        border:none;
        cursor:pointer;
        position: absolute;
        &:hover {
            background:#28B8A7;
        }
    }
   
`

const EmailInput = styled.input`
        width:450px;
        height:53px;
        margin-bottom:1rem;
        padding:1rem;
        border-radius: 8px;
        border:1px solid #1F2936;
        font-family: 'Inter', sans-serif;
        &:active,
        &:focus {
           outline: none;
        }
        &::placeholder{
           color: #444444;
           opacity: 0.8;
        }
   @media screen and (max-width:768px){
        width:300px;
        height:53px;    
    }      
`

const TextConfirmation = styled.div`
  color: #28B8A7;
  font-weight: 700;
  font-size: 18px;
  
`


const schema = yup.object().shape({
  email: yup.string().email('Must be a valid email.').required('Email is a required field.'),
});



const Forms = () => {
  const [open, setOpen] = React.useState(false);
  const [errorOpen, setErrorOpen] = React.useState(false);


  const { register, formState:{ errors }, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
    const Email = data;
    console.log(window._agile)
    if (window._agile === ' ') {
      console.log('Error')
    } else {
      console.log('working!')
    }
    window._agile.create_contact(Email, {
      success: function (data) {

        window._agile.set_email(data);
        console.log(`Successfully created contact: ${data && JSON.stringify(data)}`);
        setOpen(true);
        setTimeout(() => {
          setOpen(false)
        }, 12000)
      },
      error: function () {
        setErrorOpen(true);
        setTimeout(() => {
          setErrorOpen(false)
        }, 2000)
      }
    });
   
    reset()
    
  }
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://remigo.agilecrm.com/stats/min/agile-min.js';
    script.async = true;

      script.onload = () => {
        window._agile.set_account('8gffp3a7mn5qssga979pshclcs', 'remigo');
        console.log(window._agile)
      };
  
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      }
   
  }, []);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>

            <Row>
                <EmailInput {...register("email")} placeholder='Email' />
                <button type="submit">Go</button>
                <p>{errors.email?.message}</p>
                { errorOpen && (
                  <p>This email address is already registered</p>
                )}{ !errorOpen && (<p></p>)}
               { open && (
                 <TextConfirmation id='success-form'>Success! Thanks for subscribing</TextConfirmation>
               )}{ !open && (<p></p>)}
            </Row>
    </Form>
  )
}

export default Forms;

