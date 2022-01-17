import './App.css';
import HomeLayout from './components/Layout/HomeLayout';
import Meme from './components/Meme';

function App() {
  return (
    <div className="App">
      <HomeLayout>
        <Meme />
      </HomeLayout>
    </div>
  );
}

export default App;
