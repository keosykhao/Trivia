import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Name from './components/Name'
import './App.css';
import Music from './components/Music'
import Main from './components/Main'
import { BrowserRouter } from 'react-router-dom';
import TriviaComponent from './components/TriviaComponent';



function App() {
  return (
    <BrowserRouter>
    <div className="app" style={{ 
      backgroundImage: `url("/cherryblossom.png")` 
    }}>
     
      <Header />
      <Music />
      <Name />
      <Main />
      <TriviaComponent />
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;

// This is a test
