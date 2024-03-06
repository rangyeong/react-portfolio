import { useState } from "react";
import styled from "styled-components";
import SideMenu from "./SideMenu";


const Header = ({setIsSide, isSide}) => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
        setIsSide(!isSide);
    };


    return(
        <HeaderWrap>
            <HeaderPC>
                <HeaderLogo><a href="#Home">PORTFOLIO</a></HeaderLogo>
                <NaviList>
                    <ul>
                        <li>
                            <a href="#Home">HOME</a>
                            </li>
                        <li>
                            <a href="#About">ABOUT</a>
                            </li>
                        <li>
                            <a href="#Skill">SKILL</a>
                            </li>
                        <li>
                            <a href="#Project">PROJECT</a>
                            </li>
                        <li>
                            <a href="#Contact">CONTACT</a>
                            </li>
                    </ul>
                </NaviList>
            </HeaderPC>
            <HeaderMO>
                <HeaderLogo>PORTFOLIO</HeaderLogo>
                <HeaderHamburger onClick={toggleMenu}>
                    <p className={isActive ? "menu-trigger active" : "menu-trigger"} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </p>
                </HeaderHamburger>
            </HeaderMO>
        </HeaderWrap>
    )
};

export default Header;

const HeaderWrap = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
`;
const HeaderMO = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 46px;
background-color: rgba(255, 255, 255, 0.5);
z-index: 999;
@media screen and (min-width: 768px) {
    display: none;
}
`;
const HeaderHamburger = styled.div`
    .menu-trigger{
        display: inline-block;
        padding: 15px 14px 0 0;
        transition: all 0.4s;
        box-sizing: border-box;
        cursor: pointer;
            span{
                width: 18px;
                height: 2px;
                margin-bottom: 5px;
                background-color: #000;
                border-radius: 4px;
                display: block;
                transition: all 0.4s;
                box-sizing: border-box;
                // &:nth-of-type(1){
                // top: 0;
                // }
                // &:nth-of-type(2){
                // top: 10px;
                // }
                // &:nth-of-type(3){
                // bottom: 0;
                // }
            }
    }
    .active{
        span{
            &:nth-of-type(1){
                transform: translateY(7px) rotate(-45deg);
            }
            &:nth-of-type(2){
                opacity: 0;
            }
            &:nth-of-type(3){
                transform: translateY(-7px) rotate(45deg);
            }
        }
    }
    
`;
const HeaderPC = styled.div`
    display: none;
    height: 84px;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 999;
    @media screen and (min-width: 768px) {
        display: block;
        display: flex;
        justify-content: space-between;
    }
`;
const HeaderLogo = styled.div`
    padding: 14px 0 0 20px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    @media screen and (min-width: 768px) {
        padding-left: 30px;
        padding-top: 25px;
        font-size: 40px;
        font-weight: 700;
        line-height: 1;
        color: #1B1D29;
    }
`;
const NaviList = styled.div`
    ul{
        display: flex;
        li{
            padding-top: 30px;
            margin-right: 50px;
            font-size: 32px;
            line-height: 1 ;
            list-style: none;
            cursor: pointer;
        }
    }
`;