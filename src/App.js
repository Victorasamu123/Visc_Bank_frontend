import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </>
  );
}

export default App;
