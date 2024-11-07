import styled, { css } from "styled-components";
import ReactPlayer from 'react-player'

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

    const AboutUsContainer = styled('div')`
        display: flex;
        align-items: center;
        position: relative;
        min-height: 100vh;
        overflow: hidden;

        @media (max-width: 770px) {
            flex-direction: column;
        }

        @media (max-width: 670px) {
            padding-top: 100px;
        }

        ${Breakpoint}
    `;

    const AboutUsVideo = styled(ReactPlayer)`
        display: flex;
        z-index: 0;
        margin: auto;

        @media (max-width: 770px) {
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
    
    return (
        <AboutUsContainer id="AboutUs">
            <AboutUsVideo 
                playing={true} 
                loop 
                muted 
                allowsInlineMediaPlayback={true}
                playsInline
                controls={false}
                width={window.innerWidth > "900px" ? "700px" : "100%"}
                height={"500px"}
                url="https://r2.wolfreefs.com/IMG_1945.mp4"
            />
            <AboutUsDesc>
                <StyledP>We are a Aquarium service out of Orange County, serving both saltwater & freshwater tanks.</StyledP>
                <StyledP>We provide setups, design, and maintenance for your unique tank.</StyledP>
                <StyledP>We strive for excellent customer service, building a trustworthy relationship with our clients, 
                and always being on call 2/7 for questions & emergencies.</StyledP>
            </AboutUsDesc>
        </AboutUsContainer>
    )
}

export default AboutUs;
