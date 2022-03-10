import styled from 'styled-components'

export const Container= styled.div`
    display:flex;
    flex-direction:row;
    padding:20px 0px;
    align-items:center;
    justify-content:center;
    width: 100%;
`

export const Card= styled.div`
    display:flex;
    flex-direction:column;
    width:30%;
    max-width:220px;
    margin: 0px 20px;
`

export const City= styled.p`
    font-size: 18px;
    line-height: 24px;
    text-align:left;
    font-weight:600;
`
export const Text= styled.p`
    font-size: 14px;
    line-height: 24px;
    text-align:left;
    font-weight:400;
`