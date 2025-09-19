import React, { useState } from "react";
import web3 from "./walletUtils";

const NWTKAddress = "DEPLOYED_CONTRACT_ADDRESS";
const NWTKAbi = [
  "function transfer(address to, uint amount) returns (bool)"
];

export default function Transfer({ fromAccount, onTransfer }) {
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = async () => {
    if (!fromAccount) return alert("Connect wallet first!");
    const contract = new web3.eth.Contract(NWTKAbi, NWTKAddress);
    try {
      await contract.methods.transfer(toAccount, web3.utils.toWei(amount, "ether")).send({ from: fromAccount });
      alert("Transfer successful!");
      if (onTransfer) onTransfer(); // إعادة تحديث الرصيد تلقائيًا
    } catch (err) {
      console.error(err);
      alert("Transfer failed!");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Recipient Address"
        value={toAccount}
        onChange={(e) => setToAccount(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleTransfer}>Send Tokens</button>
    </div>
  );
}
