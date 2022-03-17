import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width:100%;
    flex-direction: row;
    padding: 20px 40px;
    background-color: #fff;
    align-items: center;

    @media screen and (max-width:960px) {
        flex-direction: column;
        padding: 0px 20px;
        justify-content: center;
    }
`
export const RightContainer = styled.div`
    @media screen and (max-width:960px){
        max-width:350px;
    }
`

export const ImageContainer = styled.div`
    position: relative;
    justify-content: center;
    width:100%;
    align-items: center;
`
export const BackgroundImage = styled.img`
  position: relative;
  width:100%;
  max-width:670px;
  height:auto;

 @media screen and (max-width:960px) {
     width: 350px;
 }
`

export const Image = styled.img`
      position:absolute;
      z-index: 2;
      width:100%;
      max-width:770px;
      top:-80px;
      left:0;
      @media screen and (max-width:960px) {
        width: 100%;
        min-width: 280px;
        top: -40px;    
      }
`

export const LeftContainer = styled.div`
    display: flex;
    width: 100%;
    max-width:490px;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 0px;

    @media screen and (max-width:960px) {
        justify-content:flex-start;
        max-width:100%;
    }

    @media screen and (max-width:768px) {
        max-width: 350px;
    }
`

export const Title = styled.p`
    font-size: 48px;
    line-height:60px;
    margin-bottom: 20px;
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