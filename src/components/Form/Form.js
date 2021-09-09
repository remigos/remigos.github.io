import React from 'react'
import styled from 'styled-components'
import AgileCRMManager from 'agile_crm'

const Row = styled.div`

`

const Form = styled.form`Z
    display:grid;
    input[type='email']{
        width:535px;
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
      input[type='submit'] {

      }
    }
`
const validEmailRegex = RegExp(
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };
export default class Forms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          email: null,
          errors: {
            email: '',
          }
        };
      }
    

      handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
    
        switch (name) {
          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid';
            break;
          default:
            break;
        }
    
        this.setState({errors, [name]: value});
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        //const data = new FormData(event.target)
        if(validateForm(this.state.errors)) {
          console.info('Valid Form')
        }else{
          console.error('Invalid Form')
        }
        const obj = new AgileCRMManager("remigo", "8gffp3a7mn5qssga979pshclcs", "tobias@remigo.io");
        const success = function (data) {
          console.log(data);
        };
        const error = function (data) {
          console.log(data);
        };
        
        const contact = {
          "lead_score": "92",
          "tags": [
              "Lead",
              "Likely Buyer"
          ],
          "properties": [
              {
                  "type": "SYSTEM",
                  "name": "email",
                  "subtype": "work",
                  "value": "sila@tester.com"
              },
          ]
        };
      
      console.log(obj.contactAPI.add(contact, success, error));
      }
     
    render(){
        const {errors} = this.state;
        return (
                  <Form onSubmit={this.handleSubmit} noValidate>
            
                        <Row>
                            <input type="email" name='email' placeholder='Email' id='email' onChange={this.handleChange} noValidate/>
                            <input type="submit" name="send" id="send" value="Go"/>
                         </Row>
                         {errors.email.length > 0 && 
                            <span className='error'>{errors.email}</span>}
                  </Form>
        )
    }
}