import styled, { css } from "styled-components";
import { Link } from 'react-scroll';

import wolfReefLogo from '../images/wolfReefLogo.jpg';

const Breakpoint = css`
    font-size: 40px;

    @media (max-width: 1300px) {
        font-size: 30px;
    }
    
    @media (max-width: 850px) {
        font-size: 20px;
    }
`;

const StyledHeader = styled('header')`
    width: 100%;
    height: fit-content;
    display: flex;
    position: fixed;
    top: 0vw;
    z-index: 100;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.7) 100%);
    border-radius: 5px;

    @media (max-width: 670px) {
        flex-direction: column;
    }

    ${Breakpoint}
`;

const MainLogo = styled('img')`
    max-width: 120px;
    width: 120px;
    margin: 20px;
    display: block;
    position: relative;
    cursor: pointer;
`;

const HeaderMenu = styled('ul')`
    width: calc(100% - 120px);
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-evenly;
    position: relative;
    text-shadow: #000000d1 4px 2px 3px;
    color: white;

    @media (max-width: 670px) {
        display: none;
    }
`;

const MobileMenu = styled('ul')`
    width: 100%;
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-evenly;
    position: relative;
    text-shadow: #000000d1 4px 2px 3px;
    color: white;
    display: none;
    padding: 0;
    margin-top: 0;

    @media (max-width: 670px) {
        display: flex;
    }
`;

const NavItem = styled('li')`
    cursor: pointer;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
`;

const Header = () => {

    return (

        <StyledHeader>
            <NavLink activeClass="active" smooth spy to="Home">
                <MainLogo src={wolfReefLogo} alt="wolfReefLogo" />
            </NavLink>
            <HeaderMenu>
                <NavItem><NavLink activeClass="active" smooth spy to="AboutUs">About Us</NavLink></NavItem>
                <NavItem><NavLink activeClass="active" smooth spy to="Testimonial">Testimonials</NavLink></NavItem>
                <NavItem><NavLink activeClass="active" smooth spy to="Gallery">Gallery</NavLink></NavItem>
            </HeaderMenu>
            <MobileMenu>
                <NavItem><NavLink activeClass="active" smooth spy to="AboutUs">About Us</NavLink></NavItem>
                <NavItem><NavLink activeClass="active" smooth spy to="Testimonial">Testimonials</NavLink></NavItem>
                <NavItem><NavLink activeClass="active" smooth spy to="Gallery">Gallery</NavLink></NavItem>
            </MobileMenu>
        </StyledHeader>

    );
}

export default Header;