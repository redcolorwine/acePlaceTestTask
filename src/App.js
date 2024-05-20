import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
import Info from './pages/Info/Info';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/info/:id' element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
