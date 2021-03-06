import styled from 'styled-components'

export const FooterContainer = styled.div`
    background-color: #1F2936;
    padding: 2.5rem 0 2rem 0;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`

export const FooterLogo = styled.div`
    justify-content:center;
    align-items:center;

`

export const Image = styled.img`
    width:160px;
    height:auto;
    @media screen and (max-width:768px){
        width:130px;

    }
`