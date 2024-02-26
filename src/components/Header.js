import styled from "styled-components";


const Header = () => {
    return(
        <HeaderWrap>
            <HeaderLogo>PORTFOLIO</HeaderLogo>
            <NaviList>
                <ul>
                    <li>ABOUT</li>
                    <li>SKILL</li>
                    <li>PROJECT</li>
                    <li>CONTACT</li>
                </ul>
            </NaviList>
        </HeaderWrap>
    )
};

export default Header;

const HeaderWrap = styled.div`
    // padding-top: 84px; 
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    height: 84px;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 999;
`;
const HeaderLogo = styled.div`
    padding-left: 30px;
    padding-top: 25px;
    font-size: 40px;
    font-weight: 700;
    line-height: 1;
    color: #1B1D29;
    cursor: pointer;
`;
const NaviList = styled.div`
    ul{
        display: flex;
        li{
            padding-top: 30px;
            margin-right: 50px;
            font-size: 32px;
            line-height: 1 ;
            cursor: pointer;
        }
    }
`;
