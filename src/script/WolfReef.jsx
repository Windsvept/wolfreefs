import styled from "styled-components";
import '../css/WolfReefs.css';

import Header from './Header';
import Landing from './Landing';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import Footer from './Footer';

export const WolfReef = () => {

  const WolfReefsContainer = styled('div')`
    text-align: center;
    background-color: #040418;
    min-height: 100vh;
    display: flex;
    font-size: calc(10px + 2vmin);
    color: white;
  `;

  const StyledBody = styled('div')`
    background-color: #040418;
    width: 100vw;
  `;

  return (
    <WolfReefsContainer data-testid="test">
      <Header />
      <StyledBody>
        <Landing />
        <AboutUs />
        <Testimonials />
        <Gallery />
        <Footer />
      </StyledBody>
    </WolfReefsContainer>
  );
}

export default WolfReef;
