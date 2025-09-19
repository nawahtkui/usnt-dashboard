import React from "react";

const milestones = [
  { quarter: "Q1 2025", desc: "Platform launch & USNT integration" },
  { quarter: "Q2 2025", desc: "NFT campaigns & community rewards" },
  { quarter: "Q3 2025", desc: "Mobile wallet & DApp features" },
  { quarter: "Q4 2025", desc: "Global partnerships & expansion" },
];

const Roadmap: React.FC = () => (
  <section className="py-16 px-6 bg-gray-50" id="roadmap">
    <h3 className="text-3xl font-bold text-center mb-12">Roadmap</h3>
    <ul className="space-y-6 max-w-3xl mx-auto">
      {milestones.map((m, i) => (
        <li key={i} className="border-l-4 border-purple-700 pl-4">
          <strong className="text-purple-700">{m.quarter}</strong>: {m.desc}
        </li>
      ))}
    </ul>
  </section>
);

export default Roadmap;