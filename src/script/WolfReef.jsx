import styled from "styled-components";
import '../css/WolfReefs.css';

import { Headers } from './Headers';
import Header from './Header';
import Landing from './Landing';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import Footer from './Footer';

const WolfReefsContainer = styled('div')`
  min-height: 100vh;
  background-color: var(--bg);
  color: var(--text);
  overflow-x: hidden;
`;

export const WolfReef = () => {

  return (
    <WolfReefsContainer data-testid="test">
      <Headers />
      <Header />
      <main>
        <Landing />
        <AboutUs />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </WolfReefsContainer>
  );
}

export default WolfReef;
