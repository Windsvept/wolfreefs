import styled, { css } from "styled-components";
import { VideoComponent } from "./Video.tsx";
import useWindowDimensions from './windowDimension';
import testimonials from '../json/testimonials.json';

const Testimonial = ({data}) => {

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

    const TestimonialText = styled('div')`
        margin: 20px;
        width: 60%;
        text-wrap: balance;
        @media (max-width: 670px) {
            width: calc(100% - 40px);
            text-align: start;
        }
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

    const TestimonialVid = styled('video')`
        margin: 10px;
        width: 40%;
        @media (max-width: 670px) {
            width: calc(100% - 20px);
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

    let imgSrc = 'https://r2.wolfreefs.com/'+ data.media;
    const { windowWidth } = useWindowDimensions();

    return (
        <TestimonialContainer>
            {
                imgSrc.split('.')[3] === 'jpg' ? 
                <TestimonialImg src={imgSrc} /> 
                : 
                <VideoComponent src={imgSrc} style={windowWidth > 760 ? VideoCssBig : VideoCssSmall}/>
                // <TestimonialVid 
                //     autoPlay 
                //     loop 
                //     muted
                //     allowsInlineMediaPlayback={true}
                //     playsInline
                //     controls={false}
                // >
                //      <source src={imgSrc} type="video/mp4"></source>
                // </TestimonialVid>
            }
            <TestimonialText>
                {data.text} 
            <TestimonialTextBy>-{data.writer}</TestimonialTextBy>
            </TestimonialText>
            
        </TestimonialContainer>
    )
}

export const Testimonials = () => {

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

        @media (max-width: 670px) {
            padding-top: 150px;
        }


        ${Breakpoint}
    `;

    return (
        <TestimonialsContainer id="Testimonial">
            {testimonials.map((testimonial) => {
                return <Testimonial data={testimonial}/>
            })}
        </TestimonialsContainer>
    )
}

export default Testimonials;
