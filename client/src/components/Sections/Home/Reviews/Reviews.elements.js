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
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    flex-direction: column;
    max-width:2000px;
    height:800px;
    @media screen and (max-width:960px) {
        border-radius: 0;
        max-height: 700px;
    }
    @media screen and (max-width:768px) {
        max-height: 500px;
    }
`


export const Card = styled.div`
    background-color: #fff;
    border-radius: 30px;
    display:flex;
    justify-content: space-between;
    padding: 70px 50px !important;
    flex-direction: column;
    width:95%;
    height:414px;
    @media screen and (max-width:960px) {
        width:100%;
        height: auto;
        padding: 50px 20px !important;

    }
`