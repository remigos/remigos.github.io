import styled from'styled-components'

export const Container = styled.div`
    display: flex;
    width:100%;
    justify-content: space-between;
    padding: 0px 0px;
    flex-direction: row;
    max-width:2000px;
    min-height:100vh;
    height:auto;
    @media screen and (max-width:950px) {
        flex-direction:column;
    }
`

export const LeftContainer = styled.div`
    flex-direction: column;
    width: 100%;
    max-width:650px;

`

export const RightContainer = styled.div`
    display: flex;
    width: 100%;
    max-width:490px;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 0px;
    margin: 0px 20px;
    align-items: right;
    @media screen and (max-width:950px) {
        max-width:100%;
        margin: 0px;
    }
`

export const ImageContainer = styled.div`
    width:100%;
`

export const Image = styled.img`
    position: relative;
    top:0;
    left:0;
    max-width:650px;
    object-fit: cover;
    width:100%;
`