import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width:100%;
    flex-direction: row;
    padding: 70px;
    background-color: #fff;
    align-items: center;

    @media screen and (max-width:960px) {
        flex-direction: column-reverse;
        padding: 0px 0px;
        justify-content: center;
    }
`
export const LeftContainer = styled.div`
    width: 100%;
    max-width:850px;

    @media screen and (max-width:960px){
        max-width:350px;
    }
`

export const ImageContainer = styled.div`
    position: relative;
    align-items: center;
    justify-content: center;
    width:100%;
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
      max-width:760px;
      top:-80px;
      left:0;
      margin: auto;
      @media screen and (max-width:960px) {
        width: 100%;
        min-width: 280px;
        top: -40px;    
      }
`

export const RightContainer = styled.div`
    display: flex;
    width: 100%;
    max-width:490px;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 0px;

    @media screen and (max-width:960px) {
        justify-content:flex-start;
    }

    @media screen and (max-width:768px) {
        padding: 0px 30px;
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