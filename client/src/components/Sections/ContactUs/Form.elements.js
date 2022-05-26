import styled from 'styled-components'

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
    margin:20px 0px;
`
export const InputContainer = styled.div`
    flex-direction: column;
    width:100%;
`

