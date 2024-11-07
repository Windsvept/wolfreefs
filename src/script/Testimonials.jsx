import styled, { css } from "styled-components";

import mainImg from '../images/mainPage.jpg'; 
import testimonial2 from '../images/testimonial2.jpg'
import testimonial3 from '../images/testimonial3.jpg'
import testimonial4 from '../images/testimonial4.jpg'

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

    const TestimonialContainer = styled('div')`
        display: flex;
        flex-direction: row;
        margin: 20px;
        justify-content: space-around;
    `;

    const TestimonialText = styled('div')`
        display: flex;
        flex-direction: row;
        margin: 20px;
        @media (max-width: 700px) {
            width: 45%;
        }
    `;

    const TestimonialImg = styled('img')`
        margin: 10px;
        width: 300px;

        @media (max-width: 700px) {
            width: 55%;
        }
    `;

    return (
        <TestimonialsContainer id="Testimonial">
            <TestimonialContainer>
                <TestimonialImg src={mainImg} alt="Aquarium" />
                <TestimonialText>
                    Coming soon ...
                </TestimonialText>
            </TestimonialContainer>
            <TestimonialContainer>
                <TestimonialText>
                    Coming soon ...
                </TestimonialText>
                <TestimonialImg src={testimonial2} alt="Aquarium" />
            </TestimonialContainer>
            <TestimonialContainer>
                <TestimonialImg src={testimonial3} alt="Aquarium" />
                <TestimonialText>
                    Coming soon ...
                </TestimonialText>
            </TestimonialContainer>
            <TestimonialContainer>
                <TestimonialText>
                    Coming soon ...
                </TestimonialText>
                <TestimonialImg src={testimonial4} alt="Aquarium" />
            </TestimonialContainer>
        </TestimonialsContainer>
    )
}

export default Testimonials;
