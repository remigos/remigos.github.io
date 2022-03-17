import styled from 'styled-components'


export const LeftContent = styled.div`
    width: 30%;
    max-width:700px;

    @media screen and (max-width:960px){
        width: 100%;
    }
`
export const BottomContent = styled.div`
    display: flex;
    width:100%;
    align-items:center;
    justify-content: space-between;
    flex-direction: row;
    @media screen and (max-width:960px) {
        flex-direction: column;
        padding: 0;
    }
`

export const RightContent = styled.div`
    display: flex;
    width: 70%;
    max-width:700px;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 0px;

    @media screen and (max-width:960px) {
        justify-content:flex-start;
        width: 100%;
        margin-right: 40px;
    }

    @media screen and (max-width:768px) {
        padding: 0px 0px;
    }
`
export const ImageContainer = styled.div`
    position: relative;
    align-items: center;
    justify-content: center;
    width:100%;
`
export const Image = styled.img`
      position:relative;
      width:100%;
      max-width: 650px;
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