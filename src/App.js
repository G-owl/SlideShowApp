import MainPage from './pages/MainPage';
import 'bulma/css/bulma.css';
import './App.css';
import { useState } from 'react';
import SlideShow from './pages/SlideShow';

function App() {
  const [mainPage, setMainPage] = useState(true);
  return (
    <div className="App">
      {mainPage ? <MainPage onNext={() => setMainPage(false)} /> : <SlideShow />}
    </div>
  );
}

export default App;
