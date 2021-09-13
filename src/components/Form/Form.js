import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Row = styled.div`

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

const Formtest = () => {
  const [email, setEmail] = useState('')

  function createContact(event) {
    try {
      event.preventDefault();
      const contact = { email };

      window._agile.create_contact(contact, {
        success: function (data) {

          // Set Email at success of contact creation. But you can set it at failure too.
          window._agile.set_email(email);
          console.log(`Successfully created contact: ${data && JSON.stringify(data)}`);
          alert('your email was submitted: ' + email);

        },
        error: function (data) {
          console.error(`Error while creating contact: ${data && JSON.stringify(data)}`);
        }
      });
    } catch (err) {
      console.log(`Error while creating contact: ${err.stack}`);
    }
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
    <Form>
            <Row>
                <input type="email" name='email' placeholder='Email' id='email' onChange={event => setEmail(event.target.value)}/>
                <input type="submit" name="send" id="send" value="Go" onClick={createContact}/>
            </Row>

    </Form>
  )
}

export default Formtest;
