import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width:100%;
    flex-direction: row;
    padding: 140px 70px 140px 20px;
    background-color: #fff;
    align-items: center;
    @media screen and (max-width:960px) {
        flex-direction: column-reverse;
        padding: 0px 70px;
        justify-content: center;
    }
    @media screen and (max-width:768px) {
        padding: 0px 20px;
    }
`
export const LeftContainer = styled.div`
    width: 100%;
    max-width:700px;
    @media screen and (max-width:960px){
        width: 100%;
        margin-right:0px;
        
    }
`
export const Content = styled.div`
    max-width: 1800px;
    width:100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width:960px) {
        flex-direction: column-reverse;
        justify-content: center;
    }

`
export const ImageContainer = styled.div`
    position: relative;
    align-items: center;
    justify-content: center;
    width:100%;
    display: flex;
 
`
export const BackgroundImage = styled.img`
  position: relative;
  width:100%;
  max-width:500px;
  height:auto;
  display:flex;
  left:0;
 @media screen and (max-width:960px) {
     width: 670px;
 }
 @media screen and (max-width:768px){
    width: 350px;
    left:20px;
    top:20px;
 }

`

export const RightContainer = styled.div`
    display: flex;
    width: 100%;
    max-width:450px;
    flex-direction: column;
    justify-content: center;
    padding: 20px 0px;
    margin-right:50px;
    @media screen and (min-width: 2500px) {
        max-width:700px;
    }
    @media screen and (max-width:960px) {
        justify-content:flex-start;
        max-width:900px;
    }

    @media screen and (max-width:768px) {
        padding: 5px;
        margin-right:0px;
    }
`

export const Title = styled.p`
    font-size: 48px;
    line-height:60px;
    margin-bottom: 20px;

    @media screen and (max-width:960px) {
        font-size: 24px;
        line-height: 32px;
        width:100%;
        text-align: left;

    }
    @media screen and (max-width:960px) {
        font-size: 24px;
        line-height: 32px
    }
`
export const Subtitle = styled.p`
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 50px;
    color: #374150;

    @media screen and (max-width:960px) {
        font-size: 16px;
    }
`