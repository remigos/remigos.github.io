import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width:100%;
    flex-direction: row;
    padding: 20px 40px;
    background-color: #fff;
    align-items: center;

    @media screen and (max-width:960px) {
        flex-direction: column;
        padding: 100px 70px 80px 70px;
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
`
export const BackgroundImage = styled.img`
  position: relative;
  width:100%;
  max-width:670px;
  height:auto;
  display: flex;

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
      max-width:550px;
      top:150px;
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
    max-width:540px;
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

export const Image1 = styled.img`
      position:absolute;
      z-index: 4;
      width:100%;
      width:250px;
      top:400px;
      left:0;
      align-items: left;
      @media screen and (max-width:960px) {
        top:-30px;
        width:200px;
        left:100px;
      }
      @media screen and (max-width:768px) {
        max-width: 150px;
        left:0px;
      }
`
export const Image2 = styled.img`
      position:absolute;
      z-index: 4;
      width:100%;
      width:450px;
      top:-100px;
      right:-40px;
      @media screen and (max-width:960px) {
        top:150px;
        right:0px;
      }
      @media screen and (max-width:768px) {
        max-width: 350px;
        top:80px;
      }
`