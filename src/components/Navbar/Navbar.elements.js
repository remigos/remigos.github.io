import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { Container } from '../../globalStyles'


export const Nav = styled.nav`
    background: #1F2936;
    height:150px;
    display:flex;
    justify-content: center;
    align-items: center;
    top:0;
    z-index:999;
    @media screen and (max-width:768px){

    }
    
`
export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content:space-between;
    height: 80px;
    ${Container}

`;

export const NavLogo = styled(Link)`
    color:#fff;
    justify-self: flex-start;
    cursor:pointer;
    text-decoration:none;
    display:flex;
    align-items:center;
    
    img {
        width:160px;
    }
    @media screen and (max-width:768px){
        justify-self: center;
        justify-content:center;
        margin-right:auto;
        margin-left:auto;
        img {
        width:130px;
        margin-top:-30px;
    }
    }

`
