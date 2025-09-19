import React from "react";

const Header: React.FC = () => (
  <header className="flex justify-between items-center p-6 bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-400 text-white">
    <h1 className="text-2xl font-bold">Nawah</h1>
    <nav className="space-x-6">
      <a href="#tokenomics">USNT</a>
      <a href="#features">Features</a>
      <a href="#roadmap">Roadmap</a>
      <a href="#nfts">NFTs</a>
    </nav>
  </header>
);

export default Header;