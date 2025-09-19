
import React from "react";
import TokenomicsChart from "./components/TokenomicsChart";

const tokenData = [
  { name: "Community Rewards", value: 30_000_000, description: "المكافآت المخصصة للمجتمع والمستخدمين." },
  { name: "Founders & Team", value: 15_000_000, description: "توزيع للأعضاء المؤسسين وفريق المشروع." },
  { name: "Strategic Partnerships", value: 10_000_000, description: "الشراكات الاستراتيجية مع المؤسسات الداعمة." },
  { name: "Reserve Fund", value: 20_000_000, description: "صندوق الاحتياطي لدعم استقرار العملة." },
  { name: "Ecosystem Development", value: 25_000_000, description: "تطوير النظام البيئي والمبادرات التقنية." },
];

const App: React.FC = () => (
  <div className="font-sans text-gray-900">
    {/* Navbar */}
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-700">USNT Token</h1>
        <div className="space-x-6">
          <a href="#tokenomics" className="hover:text-purple-500 transition">Tokenomics</a>
          <a href="#whitepaper" className="hover:text-purple-500 transition">Whitepaper</a>
          <a href="#community" className="hover:text-purple-500 transition">Community</a>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <section className="bg-purple-50 pt-28 pb-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">USNT - Universal Smart Nawah Token</h2>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-6">
        رمز رقمي ثقافي لتمكين المرأة والشباب، ودعم المشاريع الإبداعية عبر Web3 وNFTs.
      </p>
      <a href="#tokenomics" className="bg-purple-700 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-600 transition">
        اكتشف التوكنومكس
      </a>
    </section>

    {/* Tokenomics Section */}
    <section id="tokenomics" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Tokenomics</h2>
        <p className="text-gray-700 mb-12">
          توزيع توكن USNT يضمن دعم المجتمع، تطوير النظام البيئي، وتمكين فريق العمل والشراكات الاستراتيجية.
        </p>
      </div>
      <TokenomicsChart />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {tokenData.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-1">القيمة: {item.value.toLocaleString()}</p>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Whitepaper Section */}
    <section id="whitepaper" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">Whitepaper</h2>
      <p className="text-gray-700 mb-6">
        استكشف الورقة البيضاء لمشروع USNT Token للحصول على تفاصيل المشروع والتقنيات المستخدمة.
      </p>
      <a
        href="https://github.com/nawahtkui/nawah-usnt/blob/main/whitepapers/Nawah_Whitepaper_EN_Final_Updated.md"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-700 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-600 transition"
      >
        تحميل الورقة البيضاء
      </a>
    </section>

    {/* Community Section */}
    <section id="community" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4">Join the Community</h2>
      <p className="text-gray-700 mb-6">
        كن جزءًا من مجتمع USNT وشارك في المبادرات، NFTs، والمشاريع الرقمية النسائية والشبابية.
      </p>
      <a href="#" className="bg-purple-700 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-600 transition">
        انضم الآن
      </a>
    </section>

    {/* Footer */}
    <footer className="bg-white py-6 text-center border-t mt-12">
      <p className="text-gray-600 text-sm">&copy; 2025 USNT Token. جميع الحقوق محفوظة.</p>
    </footer>
  </div>
);

export default App;
