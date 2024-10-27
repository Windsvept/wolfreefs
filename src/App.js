import background from './background.mp4';
import wolfReefLogo from './wolfReefLogo.jpg';
import './App.css';
import myVideo from './IMG_1945.mp4';
import mainImg from './mainPage.jpg'; 

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted style={{
          width: '100%',
          display: 'block',
          opacity: '1',
          position: 'absolute',
          zIndex: '.5'
        }}><source src={background} type="video/mp4"></source>
      </video>
      <header className="App-header">
        <img src={wolfReefLogo} className="mainLogo" alt="wolfReefLogo" style={{
          width: '45%',
          height: 'fit-content',
          display: 'block',
          position: 'relative'
        }} />
        <ul className="header-menu">
          <li>Home</li>
          <li>About Us</li>
          <li>Testimonials</li>
          <li>Contact Us</li>
        </ul>
      </header>
      <body>
      
        <div style={{
          display: 'flex',
          position: 'relative',
          marginTop: '600px',
          justifyContent: 'flex-end',
          marginRight: '50px',
          fontSize: '50px',
          flexDirection: 'column',
          textShadow: 'black 2px 0 10px'
        }}>
         <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: '200px'
        }}>Create Your</div>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}> Dream Aquarium</div>
        </div>

        <hr style={{
            height: '11px',
            width: '95%',
            marginTop: '25px',
            backgroundColor: 'gray',
            borderWidth: '0px'
        }}></hr>

<div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: ''
        }}>
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
            }}><source src={myVideo} type="video/mp4"></source>
        </video>
          </div>
          <div id="lipsum" style={{
            width: '45%',
            margin: '2.5%'
          }}>
           
          </div>
        </div>
        
      </body>
    </div>
  );
}

export default App;
