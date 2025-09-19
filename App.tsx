
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import TokenomicsChart from "./components/TokenomicsChart";
import Roadmap from "./components/Roadmap";
import NFTsGallery from "./components/NFTsGallery";
import Footer from "./components/Footer";

const App: React.FC = () => (
  <div className="font-sans">
    <Header />
    <HeroSection />
    <Features />
    <TokenomicsChart />
    <Roadmap />
    <NFTsGallery />
    <Footer />
  </div>
);

export default App;
