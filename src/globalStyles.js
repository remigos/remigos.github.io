import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width:100%;
    flex-direction: column;
    padding: 0 70px;
    background-color: #fff;
    align-items: center;
    margin-bottom:100px;
    @media screen and (max-width:960px) {
        padding: 0px 30px;
        justify-content: center;
    }
`
export const TopContent = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    padding: 30px 0;
    width:100%;

`
export const BottomContent = styled.div`
    display: flex;
    width:100%;
    align-items:center;
    justify-content: space-between;
    flex-direction: row;
    @media screen and (max-width:960px) {
        flex-direction: column;
        padding: 0;
    }
`
export const LeftContent = styled.div`
    width: 30%;
    max-width:700px;

    @media screen and (max-width:960px){
        width: 100%;
    }
`

export const RightContent = styled.div`
    display: flex;
    width: 70%;
    max-width:700px;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 0px;

    @media screen and (max-width:960px) {
        justify-content:flex-start;
        width: 100%;
        margin-right: 40px;
    }

    @media screen and (max-width:768px) {
        padding: 0px 0px;
    }
`

export const Title = styled.p`
    font-size: 48px;
    line-height:60px;
    margin-bottom: 20px;

    @media screen and (max-width:960px) {
        font-size: 30px;
        line-height: 40px;
        width:100%;
        text-align: left;

    }
`
export const Subtitle = styled.p`
    font-size: 32px;
    line-height: 28px;
    margin-bottom: 50px;
    color: #111826;

    @media screen and (max-width:960px) {
        font-size: 24px;
    }
`
export const Text = styled.p`
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 50px;
    color: #374150;
    font-weight: 300;
    @media screen and (max-width:960px) {
        font-size: 16px;
    }
`

export default GlobalStyle