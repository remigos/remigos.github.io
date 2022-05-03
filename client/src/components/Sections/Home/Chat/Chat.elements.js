import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width:100%;
    padding: 20px 40px 50px 40px;
    justify-content: center;

    @media screen and (max-width:960px) {
        padding: 0;
    }
`;

export const Box = styled.div`
    display:flex;
    width:100%;
    flex-direction: row;
    padding: 30px;
    background-color:#E5F7FD;
    border-radius:30px;
    justify-content: center;
    max-width:2000px;
    min-height:670px;
    @media screen and (max-width:960px) {
        border-radius:0;
        padding: 30px 30px;
    }

`

export const PanelContainer = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    justify-content: center;
`

export const LeftPanel = styled.div`
    width:40%;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction:column;
    padding:30px 0px;
    display: flex;
    height:auto;
    max-width:450px;
    @media screen and (max-width:960px) {
        width:40%;
    }
    @media screen and (max-width:768px){
        width:100%;
    }
`

export const Title = styled.p`
    font-size: 48px;
    line-height: 60px;
    text-align: left;
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
    background-color:#00AEEF;
    border-radius: 6px;
    align-items: center;
    justify-content:center;
    color:#fff;
    font-weight:600;
    border:none;
    font-size:16px;
    cursor:pointer;
    :hover {
        background-color:transparent;
        color:#00AEEF;
        border: 1px solid #00AEEF;

    }

`

export const RightPanel = styled.div`
    width:60%;
    justify-content:center;
    align-items:center;
    display: flex;
    margin-top:-40px;
    height:600px;
    @media screen and (max-width:960px) {
        width: 100%;
        margin-top: 0;
        height: auto;
    }

`

export const Image = styled.img`
    width:100%;
    max-width:800px;
    @media screen and (max-width:960px) {
        min-width:200px;
    }
`
