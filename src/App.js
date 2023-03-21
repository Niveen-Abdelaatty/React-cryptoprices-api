import {Routes, Route} from 'react-router-dom'

import Main from './pages/Main';
import Price from './pages/Price';
import Curriences from './pages/Currencies'

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/curriences' element={<Curriences />} />
        <Route path='/price' element={<Price />} />
      </Routes>
    </div>
  );
}

export default App;
