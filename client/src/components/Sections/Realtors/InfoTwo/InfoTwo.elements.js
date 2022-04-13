import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width:100%;
    flex-direction: row;
    padding: 60px 70px 60px 20px;
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
  max-width:700px;
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

export const Image = styled.img`
      position:absolute;
      z-index: 2;
      width:100%;
      max-width:550px;
      left:60px;
      top:60px;
      @media screen and (max-width:960px) {
        width: 100%;
        min-width: 280px;
        top:40px;
        left:100px;
      }
      @media screen and (max-width:768px){
        max-width:280px;
        left:40px;
      }
`
export const Image1 = styled.img`
      position:absolute;
      z-index: 4;
      width:100%;
      width:200px;
      bottom:100px;
      left:0px;
      align-items: left;
      @media screen and (max-width:960px) {
        width: 100%;
        max-width:250px;
        top:-50px;
      }
      @media screen and (max-width:600px){
        max-width:100px;
        top:0px;
      }

`
export const Image2 = styled.img`
      position:absolute;
      z-index: 4;
      width:100%;
      max-width:200px;
      top:100px;
      right:50px;
      @media screen and (max-width:1200px) {
        width: 100%;
        top:250px;
        right:0px;
      }
      @media screen and (max-width:768px){
            right:200px;
            width:150px;
      }
      @media screen and (max-width:600px){
        max-width:100px;
        right:30px;
        top:200px;
      }
`
export const RightContainer = styled.div`
    display: flex;
    width: 100%;
    max-width:450px;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 0px;
    margin-right:50px;
    @media screen and (max-width:960px) {
        justify-content:flex-start;
        max-width:900px;
    }

    @media screen and (max-width:768px) {
        padding: 0px 20px;
        margin-left:30px;
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