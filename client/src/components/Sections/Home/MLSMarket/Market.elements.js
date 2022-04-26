import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    width: 100%;
    justify-content: center;
    padding: 20px 40px 50px 40px;
    @media screen and (max-width:960px) {
        padding: 0;
        background-color: #FFF1F7;
    }
`

export const Box = styled.div`
    background-color: #FFF1F7;
    width:100%;
    padding: 10px 30px;
    justify-content: space-between;
    align-items: center;
    border-radius: 30px;
    flex-direction: row;
    display:flex;
    max-width:2000px;
    min-height:650px;
    @media screen and (max-width:960px) {
        border-radius: 0;
    }
    @media screen and (max-width:768px){
        flex-direction: column;
        padding: 30px;

    }

`
export const LeftContent = styled.div`
    width:40%;
    align-items: center;
    justify-content: flex-start;
    flex-direction:column;
    padding:30px 9px;
    max-width:600px;
    @media screen and (max-width:960px) {
        width:40%;
    }
    @media screen and (max-width:768px){
        width:100%;
        padding:0px 0px 60px 0px;
    }
`
export const Title = styled.p`
    font-size: 48px;
    line-height: 60px;
    text-align: left;
    font-weight: 400;
    @media screen and (max-width:768px) {
        font-size: 30px;
        line-height: 40px;
    }
`
export const Text = styled.p`
    font-size: 18px;
    line-height: 28px;
    text-align: left;
    margin: 30px 0px;
    font-weight: 300;
    @media screen and (max-width:768px) {
        font-size: 16px;
        line-height: 24px;
    }
`
export const Button = styled.button`
    width:292px;
    height: 48px;
    background-color:#FF0A74;
    border-radius: 6px;
    align-items: center;
    justify-content:center;
    color:#fff;
    font-weight:600;
    border:none;
    font-size:16px;
    cursor: pointer;
    :hover {
        background-color:transparent;
        color:#FF0A74;
        border: 1px solid #FF0A74;
    }

    @media screen and (max-width:960px) {
        width:221px;
    }
    @media screen and (max-width:768px) {
        width:100%;
    }
`
export const RightContent = styled.div`
    width:70%;
    justify-content:center;
    align-items:center;
    display:flex;
    @media (max-width:960px) {
        width: 60%;
        margin-top: 0;
    }
    @media (max-width:960px) {
        width: 100%;
    }
`

export const Image = styled.img`
    width:100%;
    max-width: 713px;
    @media screen and (max-width:960px) {
    }
`