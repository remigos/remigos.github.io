import React from 'react'
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

export default class Formtest extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.state = { email: '' };
  }

  handleSubmit(event) {

    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();

  }
     
    render(){
      
        return (
                  <Form onSubmit={this.handleSubmit} >
                        <Row>
                            <input type="email" name='email' placeholder='Email' id='email' ref={this.state.email}/>
                            <input type="submit" name="send" id="send" value="Go"/>
                         </Row>
                         
                  </Form>
        )
    }
}