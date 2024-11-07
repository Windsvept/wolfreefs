import styled, { css } from "styled-components";

export const ContactUs = () => {
    const Breakpoint = css`
        font-size: 40px;

        @media (max-width: 1300px) {
            font-size: 30px;
        }
        
        @media (max-width: 850px) {
            font-size: 20px;
        }
    `;

    const ContactUsContainer = styled('div')`
        display: flex;
        position: relative;
        flex-direction: column;
        height: 100vh;
        overflow: hidden;

        @media (max-width: 670px) {
            padding-top: 100px;
            height: calc(100vh - 100px);
        }

        ${Breakpoint}
    `;

    const StyledH1 = styled('h1')`
        margin-top: 150px;

        @media (max-width: 850px) {
            margin-top: 250px;
        }

        @media (max-width: 650px) {
            margin-top: 100px;
        }

    `;

    const StyledFooter = styled('footer')`
        font-size: 10px;
        position: absolute;
        bottom: 0;
        display: flex; 
        justify-content: center;
        flex-direction: column;
        width: 100%;
    `;

    const StyledLink = styled('a')`
        text-decoration: none;
        color: #6fc2ff;
        text-shadow: #000000d1 4px 2px 3px;
    `;

    return (
        <ContactUsContainer id="ContactUs">
            <StyledH1>
                Contact Us
            </StyledH1>
            <p>
                John Luke Wolf <br></br>
                <StyledLink href="tel:714-917-9440">714-917-9440</StyledLink> <br></br>
                <StyledLink href="mailto:johnwolf@wolfreefs.com">johnwolf@wolfreefs.com</StyledLink>
            </p>
            <p>
                Coming soon ...
            </p>
            <StyledFooter>
                <p>Wolf Reefs <br></br>
                All Rights Reserved</p>
            </StyledFooter>
        </ContactUsContainer>
    )
}

export default ContactUs;
