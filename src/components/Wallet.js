import React, { useState } from "react";
import { getContract } from "../Blockchain.js";

function Wallet() {
  const [balance, setBalance] = useState(0);

  const fetchBalance = async () => {
    const contract = await getContract();
    if (contract) {
      const bal = await contract.balanceOf("0x0000000000000000000000000000000000000000");
      setBalance(bal.toString());
    } else {
      alert("نسخة تجريبية - العقد غير موجود");
    }
  };

  return (
    <div>
      <h3>محفظة المستخدم</h3>
      <p>رصيدك: {balance}</p>
      <button onClick={fetchBalance}>تحديث الرصيد</button>
    </div>
  );
}

export default Wallet;
