import styled from 'styled-components'

export const ImageContainer = styled.div`
    position: relative;
    align-items: center;
    justify-content: center;
    width:100%;
`
export const BottomContent = styled.div`
    display: flex;
    width:100%;
    align-items:center;
    justify-content: space-between;
    flex-direction: row;
    @media screen and (max-width:960px) {
        flex-direction: column-reverse;
        padding: 0;
    }
`
export const LeftContent = styled.div`
    width: 100%;
    max-width:500px;
    padding: 20px 0px;
    justify-content:flex-start;
    align-items: center;
    @media screen and (max-width:960px){
        width: 100%;
        padding: 0px 0px;
        margin-right: 40px;
    }
`


export const Image = styled.img`
      position:relative;
      width:100%;
      max-width: 650px;

`

export const RightContent = styled.div`
    display: flex;
    width: 30%;
    max-width:600px;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0px 90px;
    @media screen and (max-width:960px) {
        justify-content:flex-start;
        width: 100%;
        padding: 0px 30px;
        margin: 0;

    }

    @media screen and (max-width:768px) {
        padding: 0px 0px;
    }
`

export const Button = styled.button`
    width:100%;
    max-width: 396px;
    height: 48px;
    background-color:#E5F7FD;
    border-radius:6px;
    border:none;
    align-items:center;
    justify-content:center;
    color:#00AEEF;
    font-weight: 600;
    cursor: pointer;
    margin-bottom:50px;
    :focus {
        background-color: #fff;
        border: 2px solid #00AEEF;
    }

    @media screen and (max-width:960px) {
    }
`