import styled, { css } from "styled-components";
import ReactPlayer from 'react-player'

import mainImg from '../images/mainPage.jpg'; 

export const AboutUs = () => {
    const Breakpoint = css`
        font-size: 40px;

        @media (max-width: 1300px) {
            font-size: 30px;
        }
        
        @media (max-width: 850px) {
            font-size: 20px;
        }
    `;

    const AboutUsTop = styled('div')`
        display: flex;
        align-items: center;
        position: relative;
        min-height: 80vh;
        overflow: hidden;
        width: 90%;
        padding-top: 50px;

        @media (max-width: 1040px) {
            flex-direction: column;
            padding-top: 100px;
        }

        ${Breakpoint}
    `;

    const AboutUsContainer = styled('div')`
        display: flex;
        align-items: center;
        position: relative;
        min-height: 100vh;
        overflow: hidden;
        flex-direction: column;
    `;

    const AboutUsVideo = styled(ReactPlayer)`
        display: flex;
        z-index: 0;
        margin: auto;

        @media (max-width: 760px) {
            margin-top: 100px;
            margin-bottom: 0;
        }
    `;

    const AboutUsImage = styled('img')`
        object-position: top;

        @media (max-width: 760px) {
            width: 90%;
            margin-top: 100px;
            margin-bottom: 0;
        }
    `;

    const AboutUsDesc = styled('div')`
        text-align: start;
        display: flex;
        margin: 20px;
        flex-direction: column;
    `;

    const StyledP = styled('p')`
        margin-bottom: 0;
    `;

    const Contact = styled('p')`
    ;`

    const StyledLink = styled('a')`
        text-decoration: none;
        color: #6fc2ff;
        text-shadow: #000000d1 4px 2px 3px;
    `;
    
    return (
        <AboutUsContainer id="AboutUs">
            <AboutUsTop>
                {/* <AboutUsVideo 
                    playing={true} 
                    loop={true}
                    muted={true}
                    allowsInlineMediaPlayback={true}
                    playsinline
                    controls={false}
                    width={window.innerWidth > "900px" ? "700px" : "100%"}
                    height={"500px"}
                    url="https://r2.wolfreefs.com/IMG_1945.mp4"
                /> */}
                <AboutUsImage src={mainImg} alt="About Us" />

                <AboutUsDesc>
                    <StyledP>We are a Aquarium service out of Orange County, serving both saltwater & freshwater tanks.</StyledP>
                    <StyledP>We provide setups, design, and maintenance for your unique tank.</StyledP>
                    <StyledP>We strive for excellent customer service, building a trustworthy relationship with our clients, 
                    and always being on call 24/7 for questions & emergencies.</StyledP>
                </AboutUsDesc>
            </AboutUsTop>
            <Contact>
                <StyledLink href="tel:714-917-9440">714-917-9440</StyledLink> <br></br>
                <StyledLink href="mailto:wolfreefs@gmail.com">wolfreefs@gmail.com</StyledLink>
            </Contact>
        </AboutUsContainer>
    )
}

export default AboutUs;
