import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import BasicAlerts from '../SnackBar/SnackBar'

const Row = styled.div`
    p {
      color:#c90000; 
    }
`

const Form = styled.form`
    display:grid;
    input[type='email']{
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

    }         
    input[type='submit'] {
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
    @media screen and (max-width:768px){
      input[type='email']{
        width:320px;
        height:53px;
      }
    }
`



const schema = yup.object().shape({
  email: yup.string().email().required(),
});



const Formtest = () => {
  const { register, formState:{ errors }, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
    console.log(data) 
    const Email = data;
    window._agile.create_contact(Email, {
      success: function (data) {

        window._agile.set_email(data);
        console.log(`Successfully created contact: ${data && JSON.stringify(data)}`);
        alert('Submitted succesfully!')
      },
      error: function (data) {
        console.error(`Error while creating contact: ${data && JSON.stringify(data)}`);
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
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}> 
            <Row>
                <input {...register("email")} type="email" placeholder='Email' />
                <input type="submit" name="send" id="send" value="Go"/>
                <p>{errors.email?.message}</p>
            </Row>
    </Form>
  )
}

export default Formtest;
