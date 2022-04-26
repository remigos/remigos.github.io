import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    width:100%;
    padding:100px 20px;
    flex-direction:column;
    @media screen and (max-width:960px) {
        padding: 100px 0px 30px 0px;
    }
`

export const TopContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    width:100%;
`
export const Title = styled.p`
    text-align:center;
    font-size: 48px;
    margin-bottom: 88px;

    @media screen and (max-width:960px){
        font-size: 34px;
        margin-bottom: 18px;

    }
    @media screen and (max-width:768px) {
        font-size: 24px;
    }
`

export const BottomContainer = styled.div`
    display: grid;
    flex-direction: row;
    padding: 20px 20px;
    width:100%;
    @media screen and (max-width:960px) {
        padding:100px 0px;
    }
    @media screen and (max-width:600px) {
        display:block;
        padding:0px 30px;
    }
`

export const Card = styled.div`
    width:100%;
    min-width:200px;
    max-width:350px;
    height: 352px;
    flex-direction: column;
    margin: 0px 40px;
    display: block;
    padding: 0px 20px;
    margin: 0px 30px;
    @media screen and (max-width:1000px) {
        min-width:200px;

    }
    @media screen and (max-width:768px) {
        width: 100%;
        margin: 0px 10px;

    }
`

export const Icon = styled.img`
    width: 80px;
    height:80px;
`

export const Subtitle = styled.p`
    color:#111826;
    font-size: 20px;
    text-align: left;
    padding: 25px 0px;
    @media screen and (max-width:768px){
        padding: 10px 0px;
    }
`

export const Text = styled.p`
    color:#374150;
    font-size: 16px;
    text-align: left;
    line-height: 24px;

    @media screen and (max-width:768px){
        padding: 10px 0px;
    }

`

export const CardsContainer = styled.div`
    display:flex;
    width:100%;
    align-items:center;
    justify-content:center;
    margin-bottom: 50px;
    @media screen and (max-width:600px){
        display:none;
    }

` 
export const Content = styled.div`
    max-width: 1800px;
    width:100%;
    display: flex;
    justify-content: center;
    @media screen and (max-width:960px) {
        flex-direction: column;
        justify-content: center;
    }
`