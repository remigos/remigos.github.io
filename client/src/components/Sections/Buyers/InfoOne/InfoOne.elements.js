import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width:100%;
    flex-direction: column;
    padding: 70px 40px;
    background-color: #fff;
    align-items: center;
    @media screen and (max-width:960px) {
        flex-direction: column;
        padding: 100px 70px 80px 70px;
        justify-content: center;
    }
    @media screen and (max-width:600px) {
        flex-direction: column;
        padding: 100px 20px 80px 20px;
        justify-content: center;
    }
`
export const RightContainer = styled.div`
  display: flex;
    
    @media screen and (max-width:960px){
        max-width:100%;
    }
`

export const ImageContainer = styled.div`
    position: relative;
    justify-content: center;
    width:100%;
    align-items: center;
    display: flex;
    margin-right:100px;
`
export const BackgroundImage = styled.img`
  position: relative;
  width:100%;
  max-width:600px;
  height:auto;
  display: flex;
  z-index:1;
 @media screen and (max-width:960px) {
     width: 670px;
 }
 @media screen and (max-width:768px) {
     max-width:350px;
 }
`

export const Image = styled.img`
      position:absolute;
      z-index: 2;
      width:100%;
      max-width:500px;
      top:50px;
      left:50px;
      @media screen and (max-width:960px) {
        width: 100%;
        min-width: 280px;
        top:40px;
        left:100px;
      }
      @media screen and (max-width:768px) {
        max-width:280px;
        left:40px;
      }
`
export const Content = styled.div`
    max-width: 1800px;
    width:100%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width:960px) {
        flex-direction: column;
        justify-content: center;
    }
`
export const LeftContainer = styled.div`
    display: flex;
    width: 100%;
    max-width:450px;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 40px;

    @media screen and (max-width:960px) {
        justify-content:flex-start;
        max-width:100%;
    }

    @media screen and (max-width:768px) {
        max-width: 350px;
        padding: 5px;
    }
`

export const Title = styled.p`
    font-size: 48px;
    line-height:60px;
    margin-bottom: 20px;
    @media screen and (max-width:960px) {
        font-size: 26px;
        line-height: 32px;
        margin-bottom: 0px;
        margin-left:20px;
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