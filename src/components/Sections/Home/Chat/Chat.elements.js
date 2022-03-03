import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width:100%;
    padding: 70px 40px;
    justify-content: center;

    @media screen and (max-width:960px) {
        padding: 0;
    }
`;

export const Box = styled.div`
    display:flex;
    width:100%;
    flex-direction: row;
    padding: 30px 50px;
    background-color:#E5F7FD;
    border-radius:30px;
    justify-content: center;

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


export const Icon = styled.img`
    width:13px;
    height:13px;
    margin-right:7px;

    :hover {
        color: white;
    }
`

export const LeftPanel = styled.div`
    width:25%;
    align-items: center
    justify-content: flex-start;
    flex-direction:column;
    padding:30px 0px;

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
    :hover {
        background-color:transparent;
        color:#00AEEF;
        border: 1px solid #00AEEF;

    }

    @media screen and (max-width:960px) {
        width:221px;
    }
    @media screen and (max-width:768px) {
        width:100%;
    }
`

export const RightPanel = styled.div`
    width:70%;
    justify-content:flex-end;
    align-items:center;
    margin-top: -100px;
    height:500px;
    @media screen and (max-width:960px) {
        width: 100%;
        margin-top: 0;
        height: auto;
    }

`

export const Image = styled.img`
    width:100%;
    max-width:900px;
    @media screen and (max-width:960px) {
    }
`