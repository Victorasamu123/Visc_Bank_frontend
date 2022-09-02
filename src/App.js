import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Signin from './components/Signin';
import DashBoard from './components/DashBoard';
import Deposits from './components/Deposits';
import FundAccount from './components/FundAccount';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
      <Route path='/deposits' element={<Deposits/>}/>
      <Route path='/fundaccount' element={<FundAccount/>}/>
    </Routes>
    </>
  );
}

export default App;
