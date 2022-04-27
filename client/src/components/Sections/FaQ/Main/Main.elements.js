import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    max-width:1800px;
    padding:50px;

`

export const Image = styled.img`
    width: 100%;
    max-width: 600px;
    height: auto;
    z-index: 1;

    @media screen and (max-width:768px) {
        max-width: 400px;
        margin:0;
        margin-top: 0;
    }
`

export const ImageContainer = styled.div`
    width:100%;
    max-width:1200px;
    height: 600px;
    border:1px #e5e5e5 solid;
    border-radius: 30px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    display: flex;
    @media screen and (max-width:768px) {
        max-width: 400px;
        height: auto;
        padding:40px;

    }
`
