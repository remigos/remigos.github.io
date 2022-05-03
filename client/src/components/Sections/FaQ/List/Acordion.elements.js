import styled from 'styled-components';

export const Subtitle = styled.p`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color:#111826;
    @media screen and (max-width:768px) {
        font-size: 20px;
        line-height: 28px;
    }
`

export const Text = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color:#374150;
    @media screen and (max-width:768px) {
        font-size: 16px;
        line-height: 24px;
    }
`

export const Span = styled.a`
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color:#00AEEF;
    border-bottom: #00AEEF 0.1em solid;
    cursor:pointer;
`

export const Title = styled.h1`
    font-weight: 400;
    font-size: 48px;
    line-height: 60px;
    color:#111826;
    text-align: center;
    margin-bottom:50px;

    @media screen and (max-width:768px) {
        font-size: 30px;
        padding:1px;
        margin-bottom:0px;
        line-height: 40px;

    }
`