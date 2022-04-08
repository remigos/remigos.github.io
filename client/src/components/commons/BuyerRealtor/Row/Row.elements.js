import styled from 'styled-components'


export const LeftContent = styled.div`
    width: 30%;
    max-width:700px;
    margin: 0px 20px;

    @media screen and (max-width:960px){
        width: 100%;
    }
`
export const BottomContent = styled.div`
    display: flex;
    width:100%;
    align-items:center;
    justify-content: space-between;
    flex-direction: row;
    @media screen and (max-width:960px) {
        flex-direction: column;
        padding: 0;
    }
`
export const Image = styled.img`
      position:absolute;
      z-index: 2;
      width:100%;
      max-width:450px;
      margin: auto;
      @media screen and (max-width:960px) {
        width: 100%;
        max-width: 280px;
      }
`

export const RightContent = styled.div`
    display: flex;
    width: 30%;
    max-width:500px;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 10px;
    margin: 0px 150px;
    @media screen and (max-width:960px) {
        justify-content:flex-start;
        width: 100%;
        margin-right: 40px;
    }
    @media screen and (max-width:600px) {
        margin-right: 100px;
    }

    @media screen and (max-width:768px) {
        padding: 0px 0px;
    }
`
export const ImageContainer = styled.div`
    position: relative;
    align-items: center;
    justify-content: center;
    width:100%;
`

