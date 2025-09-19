// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ethers } from 'ethers';
import Home from './screens/Home';
import Wallet from './screens/Wallet';
import Mining from './screens/Mining';
import Swap from './screens/Swap';
import Profile from './screens/Profile';

// عنوان العقد الذكي USNT
const USNT_CONTRACT_ADDRESS = "0xYourUSNTContractAddress";
const USNT_ABI = [
  // أدخل ABI للعقد هنا
];

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [userAddress, setUserAddress] = useState('');
  const [usntContract, setUsntContract] = useState(null);
  const [balance, setBalance] = useState('0');

  // اتصال بمحفظة MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const _provider = new ethers.providers.Web3Provider(window.ethereum);
        await _provider.send("eth_requestAccounts", []);
        const _signer = _provider.getSigner();
        const _userAddress = await _signer.getAddress();
        const _contract = new ethers.Contract(USNT_CONTRACT_ADDRESS, USNT_ABI, _signer);

        setProvider(_provider);
        setSigner(_signer);
        setUserAddress(_userAddress);
        setUsntContract(_contract);
      } catch (err) {
        console.error("خطأ في الاتصال بالمحفظة:", err);
      }
    } else {
      alert("يرجى تثبيت MetaMask أولاً!");
    }
  };

  // قراءة رصيد USNT
  const fetchBalance = async () => {
    if (usntContract && userAddress) {
      const _balance = await usntContract.balanceOf(userAddress);
      setBalance(ethers.utils.formatUnits(_balance, 18));
    }
  };

  useEffect(() => {
    if (usntContract && userAddress) {
      fetchBalance();
    }
  }, [usntContract, userAddress]);

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Nawah Wallet</h1>
          {!userAddress && <button onClick={connectWallet}>Connect Wallet</button>}
          {userAddress && <p>Connected: {userAddress}</p>}
        </header>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/wallet">Wallet</Link> |{" "}
          <Link to="/mining">Mining</Link> |{" "}
          <Link to="/swap">Swap</Link> |{" "}
          <Link to="/profile">Profile</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home balance={balance} />} />
          <Route path="/wallet" element={<Wallet balance={balance} usntContract={usntContract} userAddress={userAddress} />} />
          <Route path="/mining" element={<Mining userAddress={userAddress} usntContract={usntContract} />} />
          <Route path="/swap" element={<Swap userAddress={userAddress} signer={signer} />} />
          <Route path="/profile" element={<Profile userAddress={userAddress} usntContract={usntContract} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

