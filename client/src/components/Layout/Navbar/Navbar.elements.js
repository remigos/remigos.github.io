import styled from 'styled-components';

export const Nav = styled.nav`
	height: 88px;
	width: 100%;
	background: #fff;
	color: #000;
	display: flex;
	align-items: center;
    padding: 0 2rem;
    border-bottom: 1px solid #E5E7EB;
    position: sticky;
    top:0;
    justify-content: space-between;
    z-index:999;
    @media screen and (max-width:768px) {
        position: sticky;
        justify-content: space-between;
        align-items: center;

    }
`;

export const LeftContainer = styled.div`

    display:flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width:768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const RightContainer = styled.div`
    align-items: center;
    display:flex;

    @media screen and (max-width:768px) {
        justify-content: center;
        margin-left:0;
        margin-bottom:30px;
    }
`

export const Image = styled.img`
    width: 150px;
    height: auto;
    margin-right:64px;
    @media screen and (max-width:980px) {
        margin-right:0;
    }
  @media screen and (max-width:768px){
      width: 105px; 
      margin-right:125px;

  }

`
export const ButtonSignIn = styled.button`
    width: 104px;
    height:48px;
    border-radius: 6px;
    color: #00AEEF;
    background-color: transparent;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    font-family:'Poppins', sans-serif;
    border: 1px solid #00AEEF;
    cursor:pointer;
    &:hover {
            background:#E5F7FD;
        }
    @media screen and (max-width:980px) {
        width: 80px;
        height:40px;
    }
    @media screen and (max-width:768px) {
        width: 156px;
        height:48px;
    }

`
export const ButtonRegister = styled.button`
    width: 156px;
    height:48px;
    border-color:#00AEEF;
    border-radius: 6px;
    color: #fff;
    background-color: #00AEEF;
    border:none;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    font-family:'Poppins', sans-serif;
    cursor:pointer;
    &:hover {
            background:#E5F7FD;
            color: #00AEEF;
        }
    @media screen and (max-width:980px) {
        width: 132px;
        height:40px;
    }
    @media screen and (max-width:768px) {
        width: 156px;
        height:48px;
    }
    
`
