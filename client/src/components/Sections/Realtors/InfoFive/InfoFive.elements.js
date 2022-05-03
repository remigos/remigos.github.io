import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width:100%;
    flex-direction: row;
    padding: 40px 70px 40px 20px;
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
    width:100%;
    max-width:800px;
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
    margin-top:-50px;
    max-width:800px;
`
export const BackgroundImage = styled.img`
  position: relative;
  width:100%;
  max-width:60=70px;
  height:auto;
  display: flex;
  z-index:1;
  @media screen and (min-width:1800px) {
    max-width:770px;
}
 @media screen and (max-width:768px) {
     max-width:350px;
 }
`

export const Image = styled.img`
      position:absolute;
      z-index: 2;
      width:100%;
      max-width:800px;
      top:-40px;
      left:60px;
      @media screen and (max-width:960px) {
        width: 100%;
        min-width: 280px;
        top:40px;
        left:100px;
      }
      @media screen and (max-width:768px) {
        max-width:400px;
        left:20px;
        top:10px;
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
    justify-content: center;
    padding: 20px 40px;
    @media screen and (min-width: 2500px) {
        max-width:700px;
    }
    @media screen and (max-width:960px) {
        justify-content:flex-start;
        max-width:100%;
    }

    @media screen and (max-width:768px) {
        max-width: 350px;
        padding: 10px;
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
      width:380px;
      top:100px;
      left:300px;
      @media screen and (max-width:960px) {
        width: 100%;
        max-width:250px;
        top:-50px;
      }
      @media screen and (max-width:600px) {
        width: 100%;
        max-width:150px;
        top:100px;
        left:120px;
      }
`

export const Button = styled.button`
    width:100%;
    max-width: 396px;
    height: 48px;
    background-color:#fff;
    border-radius:6px;
    border:none;
    align-items:center;
    justify-content:center;
    color:#00AEEF;
    font-weight: 600;
    cursor: pointer;
    margin-bottom:50px;
    border:1px solid #00AEFF;
    :hover {
        background-color:#E5F7FD;
        border:none;
    }
    :focus {
        background-color: #fff;
        border: 2px solid #00AEEF;
    }

    @media screen and (max-width:960px) {
        font-size: 18px;
    }
`
export const Image2 = styled.img`
      position:absolute;
      z-index: 4;
      width:100%;
      max-width:250px;
      bottom:50px;
      left:50px;
      @media screen and (max-width:1200px) {
        width: 100%;
        top:250px;
        right:0px;
      }
      @media screen and (max-width:768px){
            right:200px;
            width:150px;
      }

`