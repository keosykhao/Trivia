import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Name from './components/Name'
import './App.css';
import Music from './components/Music'
import Main from './components/Main'
import { BrowserRouter } from 'react-router-dom';



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
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;


