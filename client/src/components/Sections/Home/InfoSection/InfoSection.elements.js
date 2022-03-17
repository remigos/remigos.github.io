import styled from 'styled-components';

export const Container = styled.div`
    
`
export const LeftContent = styled.div`
    width:50%;
    max-wdith:600px;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    display:flex;
`


export const Title = styled.h1`
    color: #000;
    font-size:64px;
    line-height:80px;
    font-weight: 400;
    padding-top:30px;
    width:100%;
    max-width:540px;
    @media screen and (max-width: 960px) {
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

export const ImgWrapper = styled.div`
    display:flex;
    justify-content:'flex-end';


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