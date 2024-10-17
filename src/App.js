import aquarium from './Aquarium.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{
            fontSize: 'xxx-large',
            textAlign: 'center',
            width: '100%'
          }}>
            Wolf Reefs
        </h1>
        <div>Aquarium Service &amp; Maintenance</div>
        <p>Make your dream Aquarium come true</p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: ''
        }}>
          <img src={aquarium} className="" alt="Aquarium" style={{
            width: '45%',
            height: 'fit-content',
            display: 'block'
          }} />
          <div id="lipsum" style={{
            width: '45%',
            margin: '2.5%'
          }}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta tellus vel tortor viverra tempus quis facilisis orci. Nunc vitae sem purus. Donec pulvinar ex et ipsum ultrices posuere. Donec viverra, purus non rutrum porttitor, quam dolor consectetur lectus, nec porttitor purus tellus sed massa. Phasellus fermentum augue ac libero faucibus, ornare eleifend purus tristique. Ut rhoncus ultrices risus in tincidunt. Sed in erat consectetur ex auctor dignissim non vitae ligula. Proin odio est, suscipit ut quam a, eleifend hendrerit turpis. In sollicitudin, nulla eu aliquam ultricies, felis massa commodo eros, quis pellentesque nisl leo quis turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eget pharetra mauris, et dictum tortor. Nam finibus rutrum consectetur.
            </p>
            <p>
            Donec et diam auctor urna euismod dictum. Sed porttitor, elit vel tristique ornare, sem arcu tincidunt ex, ut consectetur risus sem nec leo. Mauris facilisis, lorem et euismod molestie, augue nisl vulputate nulla, nec gravida purus elit in neque. Aliquam erat volutpat. Fusce id nisi et nisl finibus viverra. Nulla id tortor nulla. Phasellus commodo massa consequat tellus bibendum, fringilla convallis purus tempor. Sed in tempor dolor.
            </p>
            <p>
            Vivamus ut justo dignissim, consectetur orci at, ultricies sem. In maximus dignissim odio, vitae hendrerit elit viverra in. Nullam vehicula quam orci, vitae gravida tortor ornare ac. Aenean ante enim, molestie eleifend efficitur sit amet, mattis sed mi. Maecenas pharetra sed leo quis tempor. Phasellus eu diam lobortis, iaculis mi et, pretium mi. Nam dapibus quam a lectus tempor mollis. Fusce mollis ultrices mauris, in venenatis tellus gravida vel.
            </p>
          </div>
        </div>

        <hr style={{
            height: '11px',
            width: '95%',
            marginTop: '25px',
            backgroundColor: 'gray',
            borderWidth: '0px'
        }}></hr>
        <p>
        Aenean convallis nisl id tellus cursus, eu volutpat turpis ultricies. Aenean vitae nisi in est vulputate sodales. In augue justo, convallis nec diam ut, ultricies bibendum urna. Morbi lacus neque, consectetur eget diam eget, pretium porttitor risus. Cras egestas suscipit lacus. Morbi vitae dolor convallis, bibendum nulla sit amet, porta nunc. Donec malesuada convallis viverra. Nullam at congue diam. Aliquam auctor eros non egestas auctor.
        </p>
        <p>
        Pellentesque iaculis rhoncus lectus, vel scelerisque tellus vehicula efficitur. Nulla metus velit, posuere et ullamcorper ut, ullamcorper vitae sem. Curabitur molestie diam eu massa fringilla, id blandit quam lacinia. Nulla vel sem et massa gravida ultrices id sed arcu. Etiam in magna sed velit dignissim euismod id nec purus. Sed eget elementum mi. Morbi quis diam id enim convallis scelerisque. Praesent bibendum erat at orci tincidunt condimentum.
        </p>
        
      </header>
    </div>
  );
}

export default App;
