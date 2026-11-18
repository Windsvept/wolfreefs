import styled from "styled-components";
import '../css/WolfReefs.css';

import { Headers } from './Headers';
import Header from './Header';
import Landing from './Landing';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import Footer from './Footer';

// The whole page is one body of water: lighter near the top, darker as you scroll down
const WolfReefsContainer = styled('div')`
  position: relative;
  min-height: 100vh;
  color: var(--text);
  overflow-x: hidden;
  background: linear-gradient(
    180deg,
    var(--water-surface) 0%,
    var(--water-mid) 28%,
    var(--water-deep) 62%,
    var(--water-abyss) 100%
  );
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
