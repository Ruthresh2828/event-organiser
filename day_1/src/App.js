// import logo from './logo.svg';

import Container from './components/Container';
import backgroundVideo from './backgroundVideo.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
      <video src={backgroundVideo} autoPlay loop muted className='background-video'></video>
      <header>
        <Container />
        </header>
    </div>
  );
}

export default App;