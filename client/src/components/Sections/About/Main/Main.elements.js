import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 100px;
    justify-content: center;
    align-items:center;
    height: 100vh;
    margin-bottom:80px;
    @media screen and (max-width:768px) {
        height: 40vh;
        padding: 20px;
    }
`

export const Image = styled.img`
    width: 100%;
    min-width: 900px;
    height: auto;
    z-index: 1;
    max-width:1700px;
    border-radius:30px;
    margin: 10px;
    @media screen and (max-width:768px) {
        min-width: 200px;
        margin:0;
        margin-top: 0;
    }
`