import Name from './components/Name'
import './App.css';
// import Music from './components/Music';
import Selctions from './components/Selections'

function App() {
  return (
    <div className="App">
      <h1>Trivia</h1>
      <Name />
      <Selctions />
     {/* <Music /> */}
    </div>
  );
}

export default App;
