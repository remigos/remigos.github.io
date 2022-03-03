import styled from 'styled-components'


export const Container = styled.footer`
    background-color: #374150;
    display:flex;
    justify-content:center;
    width:100%;
    flex-direction: column;

`
export const FooterTop = styled.div`
    display:flex;
    flex-direction: row;
    padding: 50px 40px;
    justify-content:center;
    width:100%;
    border-bottom: 1px solid #515966;

    @media screen and (max-width:768px){
        flex-direction: column;
        padding: 20px 30px;
    }
`
export const LinkContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:space-around;
    width:100%;
    padding: 0px 80px;
    @media screen and (max-width:768px){
        flex-direction: column;
        padding: 20px 0px;
    }
`
export const FooterBottom = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    padding: 35px 20px;

`
export const LinkContent = styled.div`
    display: flex;
    text-align: flex-start;
    justify-content:flex-start;
    width: 195px;
    flex-direction: column;
    margin: 0px 0px;

    @media screen and (max-width:768px){
        margin: 15px 0; 
    }

`
export const Title = styled.p`
    font-family:'Poppins',sans-serif;
    font-size: 14px;
    font-weight: 600;
    color:#9CA3AE;
    text-align: left;
`
export const Links = styled.a`
    font-family:'Poppins',sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color:#fff;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
    padding: 10px 0;

    :hover {
        color: #00AEFF;
    }
`

export const Text = styled.p`
    font-family:'Poppins',sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    color:#fff;
    text-align: center;
`
export const Image = styled.img`
    width:150px;
    height:48px;
    align-items: flex-start;
`
export const IconContent = styled.div`
    display:flex;
    flex-direction: row;
    width: 195px;
    padding-top:10px;

`

export const IconImg = styled.div`
    display:flex;
    width:32px;
    height: 32px;
    margin-right:15px;
    background-color: #777E88;
    border-radius: 50px;
    align-items: center;
    justify-content:center;
    cursor:pointer;
    :hover {
        background-color: #00AEFF;
    }
`
export const Icon = styled.img`
        width:20px;
        height: auto;

`