import Name from './components/Name'
import './App.css';
import Music from './components/Music';
import Selctions from './components/Selections'
import Main from './components/Main'

function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: `url("http://3diphonewallpaper.com/wp-content/uploads/2020/03/Wallpapers-iPhone-Cool-Anime.jpg")` 
    }}>
      <h1>Annie May Trivia</h1>
      <Name />
      <Main />
      
     <Music />
    </div>
  );
}

export default App;


