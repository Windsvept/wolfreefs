import styled, { css } from "styled-components";
import { SocialIcon } from 'react-social-icons';
import { VideoComponent } from "./Video.tsx";
import useWindowDimensions from './windowDimension';

import mainImg from '../images/mainPage.jpg'; 
import background1 from '../images/testimonial bkgrd 1.jpg';
import background2 from '../images/testimonial bkgrd 2.jpg';
import background3 from '../images/testimonial bkgrd 3.jpg';


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
    background-image: url("${background1}");
    background-size: 100%;
    color: black;
    // text-shadow: 2px 2px white;
`;

const AboutUsImage = styled('img')`
    object-position: top;

    @media (max-width: 760px) {
        width: 90%;
        margin-top: 100px;
        margin-bottom: 0;
    }
`;

const VideoCssBig = {
    "object-position": "top"
};

const VideoCssSmall = {
    "object-position": "top",
    "width": "90%",
    "margin-top": "100px",
    "margin-bottom": "0"
};

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
    color: black;
`;

const SocialLinks = styled('div')`
    display: flex;
    justify-content: space-evenly;
    width: 200px;
`;

export const AboutUs = () => {
    const { windowWidth } = useWindowDimensions();
    return (
        <AboutUsContainer id="AboutUs">
            <AboutUsTop>
                {/* <AboutUsImage src={mainImg} alt="About Us" /> */}
                <VideoComponent src={"https://r2.wolfreefs.com/CarlaTestimonial.mp4"} style={windowWidth > 760 ? VideoCssBig : VideoCssSmall}/>   
   
                <AboutUsDesc>
                    <StyledP>We are an Aquarium service out of Orange County, serving both saltwater & freshwater tanks.</StyledP>
                    <StyledP>We provide setups, design, and maintenance for your unique tank.</StyledP>
                    <StyledP>We strive for excellent customer service, building a trustworthy relationship with our clients, 
                    and always being on call 24/7 for questions & emergencies.</StyledP>
                </AboutUsDesc>
            </AboutUsTop>
            <Contact>
                <StyledLink href="tel:714-917-9440">714-917-9440</StyledLink> <br></br>
                <StyledLink href="mailto:wolfreefs@gmail.com">wolfreefs@gmail.com</StyledLink>
            </Contact>
            <SocialLinks>
                <SocialIcon network="yelp" url="https://www.yelp.com/biz/wolf-reefs-irvine/"/>
                <SocialIcon network="facebook" url="https://m.facebook.com/61553232389040/"/>
            </SocialLinks>
        </AboutUsContainer>
    )
}

export default AboutUs;
