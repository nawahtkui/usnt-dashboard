import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const data = [
  { name: "Community & Empowerment", value: 40 },
  { name: "Strategic Partners", value: 20 },
  { name: "Team & Development", value: 15 },
  { name: "Ecosystem Support", value: 15 },
  { name: "Reserve", value: 5 },
  { name: "Liquidity", value: 5 },
];

const COLORS = ["#8B5CF6", "#EC4899", "#FACC15", "#22D3EE", "#10B981", "#F97316"];

const tokenTable = [
  { category: "Community & Empowerment", percent: "40%", tokens: "40,000,000 USNT", notes: "تمكين المرأة والشباب، مسابقات، تعليم Web3" },
  { category: "Strategic Partners", percent: "20%", tokens: "20,000,000 USNT", notes: "شركاء استراتيجيون ومستثمرون" },
  { category: "Team & Development", percent: "15%", tokens: "15,000,000 USNT", notes: "محجوز مع جدول Vesting" },
  { category: "Ecosystem Support", percent: "15%", tokens: "15,000,000 USNT", notes: "منح للمطورين، NFTs، تكاملات" },
  { category: "Reserve", percent: "5%", tokens: "5,000,000 USNT", notes: "ضمان استقرار المشروع على المدى الطويل" },
  { category: "Liquidity", percent: "5%", tokens: "5,000,000 USNT", notes: "لإطلاق العملة على PancakeSwap والمنصات الأخرى" },
];

const TokenomicsPage: React.FC = () => (
  <div className="container mx-auto py-12 px-4">
    <h2 className="text-3xl font-bold text-center mb-8">USNT Tokenomics</h2>

    <div className="flex flex-col md:flex-row justify-center items-start gap-12">
      {/* PieChart */}
      <div className="flex justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `${value}%`} />
          <Legend />
        </PieChart>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 text-left">
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
              <tr key={idx} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{row.category}</td>
                <td className="px-4 py-2 border">{row.percent}</td>
                <td className="px-4 py-2 border">{row.tokens}</td>
                <td className="px-4 py-2 border">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Economic Impact */}
    <div className="mt-12 text-gray-700">
      <h3 className="text-2xl font-semibold mb-4">Real Economic Impact</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>استخدام USNT مباشرة في شراء منتجات وخدمات مشاريع النساء والشباب.</li>
        <li>إعادة بيع المنتجات داخل المنصة أو في الأسواق الرقمية الأخرى.</li>
        <li>دعم البرمجيات والتطبيقات والأدوات الرقمية التي يطورها الشباب والمبدعات.</li>
        <li>المشاركة كشريك أو مستثمر في المشاريع الصغيرة والمتوسطة داخل النظام البيئي لـ USNT.</li>
        <li>تمثيل التوكنات حق المشاركة في أرباح المشاريع أو المنتجات المعاد بيعها.</li>
        <li>تعزيز التمكين المالي والرقمي للمرأة والشباب وربط التوكن بالأنشطة الإنتاجية والإبداعية.</li>
      </ul>
    </div>
  </div>
);

export default TokenomicsPage;
