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
import Transfer from './components/Transfer';
import Wallets from './components/Wallets';
import History from './components/History';
import TransferHistory from './components/TransferHistory';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
      <Route path='/deposits' element={<Deposits/>}/>
      <Route path='/fundaccount' element={<FundAccount/>}/>
      <Route path="/transfer"  element={<Transfer/>}/>
      <Route path="/wallet" element={<Wallets/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/transferhistory" element={<TransferHistory/>}/>
    </Routes>
    </>
  );
}

export default App;
