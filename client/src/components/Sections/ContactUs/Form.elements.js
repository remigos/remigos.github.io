import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    display: flex;
    max-width:550px;
    padding: 30px;
    align-items: left;
    flex-direction: column;
    border-radius: 6px;
    box-shadow: 0px 0px 20px 0px #dedede;
    height: auto;
    margin-left: -40px;
    @media screen and (max-width:950px) {
        border-radius: none;
        box-shadow: none;
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
export const Inputs = styled.div`
    width:100%;
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
export const Button = styled.button`
    width: 100%;
    background-color: #28B8A7;
    height:48px;
    justify-content: center;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    border:none;
    border-radius: 6px;
    cursor:pointer;

    :hover {
        color: #28B8A7;
        background-color: #DCF8F4;
    }

    :focus {
        border: 1.5px solid #135A51;
        background-color: #28B8A7;
        color: #fff;

    }
`
export const TextField = styled.input`
    width:100%;
    height:60px;
    border:1px solid #E5E7EB;
    border-radius: 6px;
    padding:10px;
    margin-bottom:10px;
    padding:0px 10px;
    margin-top:10px;
`
export const TextFieldName = styled.input`
    width:47%;
    height:60px;
    border:1px solid #E5E7EB;
    border-radius: 6px;
    padding:10px;
    margin-bottom:10px;
    padding:0px 10px;
    margin-top:30px;
`
export const TextArea = styled.textarea`
    width:100%;
    height:150px;
    border:1px solid #E5E7EB;
    border-radius: 6px;
    padding:10px;
    margin-bottom:10px;

`