import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 0 0;
    justify-content: center;
    align-items:center;
    
`

export const Background = styled.img`
    object-fit: cover;
    width: 100%;
    position: absolute;
    z-index: -1;
    margin-bottom: 70px;

`

export const Image = styled.img`
    width: 100%;
    max-width: 900px;
    height: auto;
    position: relative;
    z-index: 1;
    margin-bottom: 70px;
`