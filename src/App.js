import './App.css';
import HomeLayout from './components/Layout/HomeLayout';
import Meme from './components/Meme';
import { DappProvider } from './context/dappContext';

function App() {
  return (
    <DappProvider>

      <div className="App">
        <HomeLayout>
          <Meme />
        </HomeLayout>
      </div>
    </DappProvider>
  );
}

export default App;
