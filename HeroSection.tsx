import React from "react";

const HeroSection: React.FC = () => (
  <section className="text-center py-20 bg-gradient-to-b from-yellow-100 to-purple-100">
    <h2 className="text-4xl font-bold mb-4">Welcome to Nawah</h2>
    <p className="text-lg mb-8">
      USNT – The unique stable and utility token for empowerment and culture.
    </p>
    <button className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition">
      Buy USNT
    </button>
  </section>
);

export default HeroSection;