import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 30px 40px;
    @media screen and (max-width:960px) {
        padding: 0;
        background-color: #DCF8F4;
    }
`

export const Box = styled.div`
    background-color: #DCF8F4;
    width:100%;
    margin: 20px 10px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    flex-direction: column;
    max-width:2000px;
    @media screen and (max-width:960px) {
        border-radius: 0;
    }

`


export const Card = styled.div`
    background-color: #fff;
    border-radius: 30px;
    display:flex;
    justify-content: space-between;
    padding: 70px 50px !important;
    flex-direction: column;
    width:90%;
    height:414px;
    @media screen and (max-width:960px) {
        width:100%;
        height: auto;
        padding: 0;
        padding: 50px 30px !important;

    }
`