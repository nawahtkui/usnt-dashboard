import React from "react";

const nfts = [
  { title: "Nour Al-Hikma", img: "/src/assets/images/nft1.png" },
  { title: "Wisdom Light", img: "/src/assets/images/nft2.png" },
  { title: "Empowerment Art", img: "/src/assets/images/nft3.png" },
];

const NFTsGallery: React.FC = () => (
  <section className="py-16 px-6 bg-white" id="nfts">
    <h3 className="text-3xl font-bold text-center mb-12">NFTs Gallery</h3>
    <div className="grid md:grid-cols-3 gap-8 justify-center items-center">
      {nfts.map((nft, i) => (
        <div key={i} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
          <img src={nft.img} alt={nft.title} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h4 className="font-semibold text-lg">{nft.title}</h4>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default NFTsGallery;