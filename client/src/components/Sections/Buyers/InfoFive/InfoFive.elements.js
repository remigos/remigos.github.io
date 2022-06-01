import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width:100%;
    flex-direction: column;
    padding: 40px;
    background-color: #fff;
    align-items: center;
    @media screen and (max-width:960px) {
        flex-direction: column;
        padding: 100px 40px 80px 40px;
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
  @media screen and (min-width:1800px) {
    max-width:770px;
}
 @media screen and (max-width:768px) {
     max-width:350px;
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
    @media screen and (max-width:768px) {
        max-width: 100%;
        padding: 0;
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
