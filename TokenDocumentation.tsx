import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { FaUsers, FaHandshake, FaUserTie, FaNetworkWired, FaShieldAlt, FaCoins } from "react-icons/fa";

const pieData = [
  { name: "Community & Empowerment", value: 40, icon: <FaUsers />, color: "#8B5CF6" },
  { name: "Strategic Partners", value: 20, icon: <FaHandshake />, color: "#EC4899" },
  { name: "Team & Development", value: 15, icon: <FaUserTie />, color: "#FACC15" },
  { name: "Ecosystem Support", value: 15, icon: <FaNetworkWired />, color: "#22D3EE" },
  { name: "Reserve", value: 5, icon: <FaShieldAlt />, color: "#10B981" },
  { name: "Liquidity", value: 5, icon: <FaCoins />, color: "#F97316" },
];

const tokenTable = [
  { category: "Community & Empowerment", percent: "40%", tokens: "40,000,000 USNT", notes: "تمكين المرأة والشباب، مسابقات، تعليم Web3", icon: <FaUsers /> },
  { category: "Strategic Partners", percent: "20%", tokens: "20,000,000 USNT", notes: "شركاء استراتيجيون ومستثمرون", icon: <FaHandshake /> },
  { category: "Team & Development", percent: "15%", tokens: "15,000,000 USNT", notes: "محجوز مع جدول Vesting", icon: <FaUserTie /> },
  { category: "Ecosystem Support", percent: "15%", tokens: "15,000,000 USNT", notes: "منح للمطورين، NFTs، تكاملات", icon: <FaNetworkWired /> },
  { category: "Reserve", percent: "5%", tokens: "5,000,000 USNT", notes: "ضمان استقرار المشروع على المدى الطويل", icon: <FaShieldAlt /> },
  { category: "Liquidity", percent: "5%", tokens: "5,000,000 USNT", notes: "لإطلاق العملة على PancakeSwap والمنصات الأخرى", icon: <FaCoins /> },
];

const securityInfo = [
  "الالتزام بمعيار BEP-20 على شبكة Binance Smart Chain.",
  "إجمالي العرض ثابت ولا يمكن تغييره بعد النشر.",
  "التحكم عبر محفظة متعددة التوقيع (Multi-Sig) لضمان الأمان الجماعي.",
  "قفل السيولة على PancakeSwap لضمان استقرار السوق.",
  "توزيع توكنات عادل وشفاف.",
  "توثيق الملكية والشفافية في أي تغييرات مستقبلية."
];

const TokenDocumentation: React.FC = () => (
  <div className="container mx-auto py-12 px-4">
    <h1 className="text-4xl font-bold text-center mb-8">USNT Token Documentation</h1>

    {/* PieChart */}
    <div className="flex justify-center mb-12">
      <PieChart width={400} height={400}>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip formatter={(value: number) => `${value}%`} />
        <Legend />
      </PieChart>
    </div>

    {/* Tokenomics Table */}
    <h2 className="text-2xl font-semibold mb-4">Tokenomics / توزيع التوكنات</h2>
    <div className="overflow-x-auto mb-12">
      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border">الفئة / Category</th>
            <th className="px-4 py-2 border">النسبة / Percent</th>
            <th className="px-4 py-2 border">عدد التوكنات / Tokens</th>
            <th className="px-4 py-2 border">ملاحظات / Notes</th>
          </tr>
        </thead>
        <tbody>
          {tokenTable.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-100 transition-colors duration-200">
              <td className="px-4 py-2 border flex items-center gap-2">{row.icon}{row.category}</td>
              <td className="px-4 py-2 border">{row.percent}</td>
              <td className="px-4 py-2 border">{row.tokens}</td>
              <td className="px-4 py-2 border">{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Security Section */}
    <h2 className="text-2xl font-semibold mb-4">Security Overview / وثيقة الأمان</h2>
    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-12">
      {securityInfo.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>

    <p className="text-gray-600 mb-2">
      لمزيد من التفاصيل، يرجى الرجوع إلى ملفات <a href="./Tokenomics.md" className="text-blue-600 underline">Tokenomics.md</a> و <a href="./SECURITY.md" className="text-blue-600 underline">SECURITY.md</a>.
    </p>
    <p className="text-gray-600">
      كل المحتويات محدثة لتعكس المعلومات الرسمية لتوكن USNT بشكل دقيق وشفاف.
    </p>
  </div>
);

export default TokenDocumentation;
