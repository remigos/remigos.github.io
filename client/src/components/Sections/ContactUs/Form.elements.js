import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width:100%;
    align-items: center;
    @media screen and (max-width:960px) {
        padding: 0px 0px;
        justify-content: center;
    }
`


export const Content = styled.div`
    display: flex;
    width:100%;
    justify-content:space-between;
    align-items: center;
    padding: 0px 0px;
    flex-direction: row;
    max-width:1800px;
    @media screen and (max-width:950px) {
        flex-direction:column;
    }
`

export const LeftContainer = styled.div`
    flex-direction: column;
    width: 100%;
    max-width:650px;
    display: flex;
    @media screen and (max-width:600px) {
        margin-bottom:150px;
    }
`

export const RightContainer = styled.div`
    display: flex;
    width: 100%;
    max-width:490px;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 0px;
    margin: 0px 20px;
    align-items: right;
    @media screen and (max-width:950px) {
        max-width:100%;
        margin: 0px;
        
    }
`

export const ImageContainer = styled.div`
    width:100%;

`

export const Image = styled.img`
    position: absolute;
    top:0;
    max-width:1800px;
    width:100%;
    z-index:-2;
    @media screen and (max-width:600px) {
        top:70px;
        max-height:100%;
    }
`
export const FormContainer = styled.div`
    width:100%;
    display: flex;
    max-width:550px;
    padding: 30px;
    align-items: left;
    flex-direction: column;
    border-radius: 6px;
    box-shadow: 0px 0px 10px 0px #777;
    height: auto;
    margin-left: -40px;
    z-index: 3;
    background-color: #fff;
    @media screen and (max-width:950px) {

        max-width: 600px;
        margin-left: 0px;
    }
`
export const ColumnContainer = styled.div`
    flex-direction: column;
    display:flex;
    width:100%;
`
export const NameContainer = styled.div`
    flex-direction:row;
    display:flex;
    width:100%;
    justify-content: space-between;
`

export const RadioGroup = styled.div`
    width: 100%;
    display:flex;
    justify-content: flex-start;
    flex-direction: row;
    padding: 30px 0px;
`

export const Text = styled.p`
    font-size: 18px;
    text-align: left;
    font-weight: 300;
    line-height: 28px;
    color:#374150;
    margin:15px 0px;
`
export const InputContainer = styled.div`
    flex-direction: column;
    width:100%;
`

