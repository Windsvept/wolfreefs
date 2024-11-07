import styled, { css } from "styled-components";

import mainImg from '../images/mainPage.jpg'; 

export const Misc = () => {
    const Breakpoint = css`
        font-size: 40px;

        @media (max-width: 1300px) {
            font-size: 30px;
        }
        
        @media (max-width: 850px) {
            font-size: 20px;
        }
    `;


    const StyledH1 = styled('h1')`
        margin-top: 150px;

        @media (max-width: 850px) {
            margin-top: 250px;
        }

        @media (max-width: 650px) {
            margin-top: 100px;
        }

        ${Breakpoint}
    `;

    return (
        <div style={{
            display: 'none',
            justifyContent: 'center',
            alignItems: ''
          }}>

            <StyledH1>
                Testing
            </StyledH1>
            <div  style={{
              width: '45%',
              display: 'flex',
              flexDirection: 'column'
            }}>
                <img src={mainImg} className="" alt="Aquarium" style={{
                width: '100%',
                display: 'block'
                }} />
              <video controls autoPlay loop muted style={{
                width: '100%',
                display: 'block'
              }}><source src="https://r2.wolfreefs.com/IMG_1945.mp4" type="video/mp4"></source>
          </video>
            </div>
            <div id="lipsum" style={{
              width: '45%',
              margin: '2.5%'
            }}>
             
            </div>
          </div>
    )
}

export default Misc;