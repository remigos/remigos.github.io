import styled from 'styled-components';

export const LeftContent = styled.div`
    width:50%;
    max-width:540px;
    flex-direction:column;
    align-items:left;
    justify-content:flex-start;
    display:flex;
    margin-left:5%;

    @media screen and (max-width:1200px) {
        width:100%;
        max-width:1000px;
        justify-content:center;
    }
    @media screen and (max-wdith:768px){
        margin-top:70px;
    }
`
export const BackgroundImage = styled.img`
  position: relative;
  width:auto;
  max-width:500px;
  height:auto;
    @media screen and (max-width:1200px){
        max-width:400px;
    }
    @media screen and (max-width:768px) {
        max-width: 300px;
    }
`
export const Content = styled.div`
    max-width: 1800px;
    width:100%;
    display: flex;
    justify-content: center;

`
export const Title = styled.h1`
    color: #000;
    font-size:64px;
    line-height:80px;
    font-weight: 400;
    padding-top:30px;
    width:100%;
    @media screen and (max-width: 1200px) {
        font-size: 40px;
    }
    @media screen and (max-width:768px) {
        font-size:30px;
        line-height:40px;
    }

`
export const Text = styled.p`
    color: #1F2936;
    font-size:20px;
    line-height:30px;
    width:100%;
    max-width:540px;
    font-weight: 300;
    padding: 40px 0;
    @media screen and (max-width: 960px) {
        font-size: 20px;
    }
    @media screen and (max-width: 768px) {
        font-size: 16px;
        padding: 20px 0;

    }
`
export const ImageContainer = styled.div`
    align-items: center;
    justify-content: center;
    width:70%;
    max-width: 500px;
`
export const Button = styled.button`
    width: 292px;
    height:48px;
    border-radius: 6px;
    color: #fff;
    background-color: #28B8A7;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid transparent;
    text-align: center;
    cursor:pointer;
    &:hover {
            background:#DCF8F4;
            color: #28B8A7;
        }
    @media screen and (max-width:678px) {
        width: 327px;
        height:40px;
    }
`
export const Image1 = styled.img`
      position:absolute;
      z-index: 4;
      width:70%;
      width:300px;
      top:-500px;
      left:-100px;
      align-items: left;
      @media screen and (max-width:1200px) {
        width: 100%;
        top:-400px;
      }
      @media screen and (max-width:768px){
          width:200px;
          top:-300px;
          margin-left:80px;
      }
`
export const Image2 = styled.img`
      position:absolute;
      z-index: 4;
      width:100%;
      width:250px;
      bottom:70px;
      right:-250px;
      align-items: right;
      @media screen and (max-width:1200px) {
        width: 100%;
        width:200px;
      }
      @media screen and (max-width:768px){
          width:150px;
          right:-60px;
      }
`

export const Image3 = styled.img`
      position:absolute;
      z-index: 4;
      width:100%;
      width:300px;
      bottom:-50px;
      right:-100px;
      align-items: right;
      @media screen and (max-width:1200px) {
        width: 100%;
      }
      @media screen and (max-width:768px){
          width:200px;
          right:0px;
      }
`