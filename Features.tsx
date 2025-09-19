import React from "react";

const features = [
  { title: "Empowerment", desc: "Supporting women and youth projects" },
  { title: "NFTs & Art", desc: "Cultural and creative digital assets" },
  { title: "Decentralized", desc: "Fast and secure Web3 platform" },
  { title: "Rewards", desc: "Earn USNT for participation" },
];

const Features: React.FC = () => (
  <section className="py-16 px-6 bg-white" id="features">
    <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((f, i) => (
        <div key={i} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;