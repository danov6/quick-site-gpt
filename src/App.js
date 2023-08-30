import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
