import styled from 'styled-components'

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:left;
    padding:40px 60px;
    max-width:1800px;
    flex-direction: column;
    @media screen and (max-width:768px) {
        padding: 10px;
    }
`


export const Title = styled.p`
    font-weight: 400;
    font-size: 48px;
    line-height: 60px;
    color:#111826;
    margin-bottom:50px;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 32px;
        line-height: 24px;
        margin:30px 0px;

    }
`

export const TextItalic = styled.p`
    font-style: italic;
    font-size: 18px;
    line-height: 30px;
    color:#374150;
    margin-bottom:50px;
    text-align: left;
    @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 22px;
        margin-bottom:30px;

    }
    `

export const Subtitle = styled.p`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color:#111826;
    margin-bottom:20px;
    text-align: left;
    @media screen and (max-width: 768px) {
        font-size: 22px;
        margin-bottom:15px;

    }
`

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color:#374150;
    margin-bottom:40px;
    text-align: left;
    @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 30px;
        margin-bottom:30px;

    }

`
export const Bold = styled.span`
    font-weight: 600;
    font-size: 18px;
    color:#374150;
    text-align: left;
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`
export const Span = styled.a`
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color:#00AEEF;
    cursor:pointer;
    text-align: left;
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`
export const Link = styled.a`
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color:#00AEEF;
    cursor:pointer;
    text-align: left;
    word-wrap: break-word; 
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`