import {Routes, Route} from 'react-router-dom'

import Main from './pages/Main';
import Price from './pages/Price';
import Curriences from './pages/Currencies'

import NavBar from './components/NavBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/curriences' element={<Curriences />} />
        <Route path='/price/:symbol' element={<Price />} />
      </Routes>
    </div>
  );
}

export default App;
