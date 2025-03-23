import styled, { css } from "styled-components";

const Breakpoint = css`
    font-size: 40px;

    @media (max-width: 1300px) {
        font-size: 30px;
    }
    
    @media (max-width: 850px) {
        font-size: 20px;
    }
`;

const FooterContainer = styled('div')`
    display: flex;
    position: relative;
    flex-direction: column;
    overflow: hidden;
    min-height: 50px;

    ${Breakpoint}
`;

const StyledFooter = styled('footer')`
    font-size: 10px;
    position: absolute;
    bottom: 0;
    display: flex; 
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding-bottom: 20px;
`;

export const Footer = () => {

    return (
        <FooterContainer id="Footer">
            <StyledFooter>
                <div>&copy; 2025 Wolf Reefs</div>
                <div>All Rights Reserved</div>
            </StyledFooter>
        </FooterContainer>
    )
}

export default Footer;
