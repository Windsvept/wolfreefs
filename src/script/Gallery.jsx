import styled, { css } from "styled-components";
import { VideoComponent } from "./Video.tsx";

import useWindowDimensions from './windowDimension';
import mainImg from '../images/mainPage.jpg'; 
import background1 from '../images/testimonial bkgrd 1.jpg';

const Breakpoint = css`
    font-size: 40px;

    @media (max-width: 1300px) {
        font-size: 30px;
    }
    
    @media (max-width: 850px) {
        font-size: 20px;
    }
`;

const GalleryContainer = styled('div')`
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

const Row = styled('div')`
    display: flex;
    flex-direction: row;
    margin: 20px;
    justify-content: space-around;
    width: calc(100% - 40px);

    @media (max-width: 670px) {
        flex-direction: column;
        margin: 10px 30px;
        width: calc(100% - 60px);
    }
`;

const GalleryImage = styled('img')`
    width: 45%;
    border: 5px solid black;

    @media (max-width: 670px) {
        width: 90%;
        margin: 10px auto;
    }
`;

const StepsImage = styled('img')`
    width: 23%;
    object-fit: cover;
    border: 5px solid black;

    @media (max-width: 670px) {
        width: 90%;
        margin: 10px auto;
    }
`;

const VideoCssBig = {
    "width": "45%",
    "margin": "10px auto"
};

const VideoCssSmall = {
    "width": "95%",
    "margin": "10px auto"
};

export const Gallery = () => {
    const img1 = 'https://r2.wolfreefs.com/1.jpg';
    const img2 = 'https://r2.wolfreefs.com/2.jpg';
    const img3 = 'https://r2.wolfreefs.com/3.jpg';
    const vid4_1 = 'https://r2.wolfreefs.com/4-1.mp4';
    const vid4_2 = 'https://r2.wolfreefs.com/4-2.mp4';
    const vid5 = 'https://r2.wolfreefs.com/5.mp4';
    const step1 = 'https://r2.wolfreefs.com/IMG_1542.jpg';
    const step2 = 'https://r2.wolfreefs.com/IMG_1547.jpg';
    const step3 = 'https://r2.wolfreefs.com/IMG_1558.jpg';
    const step4 = 'https://r2.wolfreefs.com/IMG_1925.jpg';

    const { windowWidth } = useWindowDimensions();

    return (
        <GalleryContainer id="Gallery">
            <Row>
                <GalleryImage src={mainImg} alt="Aquarium1" />
                <GalleryImage src={img1} alt="Aquarium2" />
            </Row>
            {/* <Row>
                <VideoComponent src={vid4_1} style={VideoCssSmall}/>
            </Row> */}
            <Row>
                <VideoComponent src={vid4_2} style={windowWidth > 760 ? VideoCssBig : VideoCssSmall}/>
                <VideoComponent src={vid5} style={windowWidth > 760 ? VideoCssBig : VideoCssSmall} />
            </Row>
            <Row>
                <GalleryImage src={img2} alt="Aquarium3" />
                <GalleryImage src={img3} alt="Aquarium4" />
            </Row>
            <Row>
                <StepsImage src={step1} alt="Reef Tank Step 1" />
                <StepsImage src={step2} alt="Reef Tank Step 2" />
                <StepsImage src={step3} alt="Reef Tank Step 3" />
                <StepsImage src={step4} alt="Reef Tank Step 4" />
            </Row>
            <Row>

            </Row>
        </GalleryContainer>
    )
}

export default Gallery;