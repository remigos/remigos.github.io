import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items:left;
    padding:40px 60px;
    flex-direction: column;
    @media screen and (max-width:768px) {
        padding: 20px;
    }
`

export const Title = styled.p`
    font-weight: 400;
    font-size: 48px;
    line-height: 60px;
    color:#111826;
    margin-bottom:50px;
`

export const TextItalic = styled.p`
    font-style: italic;
    font-size: 18px;
    line-height: 30px;
    color:#374150;
    margin-bottom:50px;

    `

export const Subtitle = styled.p`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color:#111826;
    margin-bottom:20px;

`

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color:#374150;
    margin-bottom:40px;

`
export const Span = styled.a`
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color:#00AEEF;
    border-bottom: #00AEEF 0.1em solid;
    cursor:pointer;
`