import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 0px 0 200px;
    justify-content: center;
    align-items:center;
    min-height: 120vh;

    @media screen and (max-width:768px) {
        min-height: 50vh;
    }
`

export const Background = styled.img`
    width: 100%;
    position: absolute;
    z-index: -1;

`
export const ImageContainer = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    max-width:700px;
`

export const Image = styled.img`
    width: 100%;
    max-width: 700px;
    height: auto;
    position: relative;
    z-index: 1;
@media screen and (max-width:768px){
    max-width:300px;
    left:50px;
}

`

export const Card = styled.img`
    width:100%;
    max-width: 250px;
    position: absolute;
    z-index:4;
    left:-150px;
    top:-500px;
    @media screen and (max-width:768px){
    max-width:100px;
    left:30px;
    top:-200px;
}
`
export const Profiles = styled.img`
    width:100%;
    max-width: 250px;
    position: absolute;
    z-index:4;
    top:-480px;
    right:-100px;
@media screen and (max-width:768px){
    max-width:100px;
    right:30px;
    top:-200px;
}
`
export const Messages = styled.img`
    width:100%;
    max-width: 450px;
    position: absolute;
    z-index:4;
    top:-200px;
    right:-150px;
@media screen and (max-width:768px){
    max-width:250px;
    right:0px;
    top:-100px;
}
`