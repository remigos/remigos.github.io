import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width:100%;
    flex-direction: column;
    padding: 0 10px 0 0;
    background-color: #fff;
    align-items: center;

    @media screen and (max-width:960px) {
        padding: 0px 30px;
        justify-content: center;

    }
`
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
    max-width:700px;
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
      max-width: 750px;

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

export const Subtitle = styled.p`
    font-size: 32px;
    line-height: 28px;
    margin-bottom: 50px;
    color: #111826;

    @media screen and (max-width:960px) {
        font-size: 24px;
    }
`
export const Text = styled.p`
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 50px;
    color: #374150;
    font-weight: 300;
    @media screen and (max-width:960px) {
        font-size: 16px;
    }
`