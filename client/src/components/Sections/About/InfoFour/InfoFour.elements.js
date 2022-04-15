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
    }
`

export const Box = styled.div`
    background-color: #E5F7FD;
    width:100%;
    margin: 10px 20px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width:1800px;
    border-radius:30px;
    @media screen and (max-width:960px) {
    }

`


export const Card = styled.div`
    background-color: transparent;
    display:flex;
    justify-content: space-between;
    padding: 40px 50px;
    flex-direction: row;
    width:90%;
    @media screen and (max-width:960px) {
        width:80%;
        height: auto;
        padding: 0;
        padding: 50px 0px !important;
        flex-direction: column-reverse;
    }
`

export const LeftContainer = styled.div`
    display:flex;
    width: 55%;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    margin: 0px 70px;

    @media screen and (max-width:960px) {
        width:100%;
        margin: 0px 30px;

    }
`

export const RightContainer = styled.div`
    display:flex;
    width: 40%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width:960px) {
        width:100%;
        margin-bottom: 70px;
    }
    @media screen and (max-width:600px) {
        margin-bottom: 70px;
        margin-left: 30px;
    }
`

export const Image = styled.img`
    width:100%;
    max-width: 320px;
    height: auto;
    object-fit: cover;
`
export const Name = styled.p`
    font-size: 18px;
    line-height: 24px;
    color: #00AEEF;
    font-weight: 600;
`