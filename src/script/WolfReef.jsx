import styled from "styled-components";
import '../css/WolfReefs.css';

import Header from './Header';
import Landing from './Landing';
import AboutUs from './AboutUs';
import Misc from './Misc';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';

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
  `;

  return (
    <WolfReefsContainer>
      <Header />
      <StyledBody>
        <Landing />
        <AboutUs />
        <Testimonials />
        <ContactUs />

        <Misc />
      </StyledBody>
    </WolfReefsContainer>
  );
}

export default WolfReef;
