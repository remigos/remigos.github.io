import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 100px 0;
    justify-content: center;
    align-items:center;
    min-height:100vh;
    
    @media screen and (min-width:1800px) {
        min-height:40vh;

    }
    @media screen and (max-width:960px) {
        min-height:30vh;
        padding: 100px 20px;

      }
`
export const ImageContainer = styled.div`
    width:100%;
    max-width:1100px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:960px) {
        margin-left:0px;

      }
`

export const Background = styled.img`
    width: 100%;
    position: absolute;
    z-index: -1;
    width:150px;
    top:100px;
    right:200px;
`

export const Image = styled.img`
    width: 100%;
    max-width: 2000px;
    height: auto;
    position: relative;
    z-index: 1;
    margin-bottom: 70px;
    @media screen and (max-width:960px) {
        width: 100%;
      }
`