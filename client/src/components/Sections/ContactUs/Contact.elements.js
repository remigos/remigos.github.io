import styled from'styled-components'


export const Container = styled.div`
    display: flex;
    justify-content: center;
    width:100%;
    align-items: center;
    @media screen and (max-width:960px) {
        padding: 0px 0px;
        justify-content: center;
    }
`


export const Content = styled.div`
    display: flex;
    width:100%;
    justify-content:space-between;
    align-items: center;
    padding: 0px 0px;
    flex-direction: row;
    max-width:1800px;
    @media screen and (max-width:950px) {
        flex-direction:column;
    }
`

export const LeftContainer = styled.div`
    flex-direction: column;
    width: 100%;
    max-width:650px;
    display: flex;
    @media screen and (max-width:600px) {
        margin-bottom:150px;
    }
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
    position: absolute;
    top:0;
    max-width:1800px;
    width:100%;
    z-index:-2;
    @media screen and (max-width:600px) {
        top:70px;
        max-height:100%;
    }
`