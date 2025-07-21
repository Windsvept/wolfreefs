import styled, { css } from "styled-components";
import { VideoComponent } from "./Video.tsx";
import useWindowDimensions from './windowDimension';
import testimonials from '../json/testimonials.json';

import background1 from '../images/testimonial bkgrd 1.jpg';
import background2 from '../images/testimonial bkgrd 2.jpg';
import background3 from '../images/testimonial bkgrd 3.jpg';
let backgrounds = {
    background1,
    background2,
    background3
}

const TestimonialContainer = styled('div')`
    display: flex;
    flex-direction: row;
    margin: 20px;
    justify-content: space-around;
    overflow: hidden;

    @media (max-width: 670px) {
        flex-direction: column;
    }

    &:not(:last-child):after {
        content: "";
        display: inline-block;
        height: 0.5em;
        vertical-align: bottom;
        width: 95%;
        margin-right: -95%;
        margin-left: 10px;
        border-top: 1px solid white;
    }
`;

const TesitmonialBody = styled('div')`
    position: relative;
    width: 60%;
    margin: auto;

    @media (max-width: 670px) {
        width: calc(100% - 20px);
        margin: 10px;
    }
`;

const TestimonialText = styled('div')`
    // margin: 20px;
    text-wrap: balance;
    @media (max-width: 670px) {
        // width: calc(100% - 40px);
        text-align: start;
    }
    position absolute;
    z-index: 5;
    position: relative;
    color: black;
`;

const TestimonialTextBy = styled('p')`
    @media (max-width: 670px) {
        text-align: end;
    }
`;

const TestimonialImg = styled('img')`
    margin: 10px;
    width: 40%;
    object-fit: scale-down;

    @media (max-width: 670px) {
        width: calc(100% - 20px);
    }

    @media (min-width: 670px) {
        object-position: top;
        padding-top: 20px;
    }
`;

const VideoCssBig = {
    "width": "40%",
    "margin": "10px auto"
};

const VideoCssSmall = {
    "width": "95%",
    "margin": "10px auto"
};

const TestimonialBackground = styled('img')`
    position absolute;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
    border-radius: 5px;
    opacity: 0.8;
    z-index: 1;
`;

const Testimonial = ({data}) => {

    let imgSrc = 'https://r2.wolfreefs.com/'+ data.media;
    const { windowWidth } = useWindowDimensions();

    return (
        <TestimonialContainer>
            {
                imgSrc.split('.')[3] === 'jpg' ? 
                <TestimonialImg src={imgSrc} /> 
                : 
                <VideoComponent src={imgSrc} style={windowWidth > 760 ? VideoCssBig : VideoCssSmall}/>
            }
            <TesitmonialBody background={backgrounds[data.background]}>
                {/* <TestimonialBackground src={backgrounds[data.background]}></TestimonialBackground> */}
                <TestimonialText>
                    {data.text} 
                <TestimonialTextBy>-{data.writer}</TestimonialTextBy>
                </TestimonialText>
            </TesitmonialBody>
            
        </TestimonialContainer>
    )
}

const Breakpoint = css`
    font-size: 40px;

    @media (max-width: 1300px) {
        font-size: 30px;
    }
    
    @media (max-width: 850px) {
        font-size: 20px;
    }
`;

const TestimonialsContainer = styled('div')`
    display: flex;
    position: relative;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
    padding-top: 100px;
    background-image: url("${background1}");
    background-size: 100%;

    @media (max-width: 670px) {
        padding-top: 150px;
    }


    ${Breakpoint}
`;

export const Testimonials = () => {

    return (
        <TestimonialsContainer id="Testimonial">
            {testimonials.map((testimonial) => {
                return <Testimonial data={testimonial} key={testimonial.writer}/>
            })}
        </TestimonialsContainer>
    )
}

export default Testimonials;
