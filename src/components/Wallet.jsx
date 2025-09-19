import React, { useState } from "react";
import { ethers } from "ethers";

// جدول العملات المدعومة
const TOKENS = [
  { name: "NWTK", address: "0x6f5900e23D47fD8CE6fA86D2AF35007c6dcC8455", icon: "💎" },
  { name: "BNB", address: null, icon: "🟡" },
  { name: "USDT", address: "0x55d398326f99059fF775485246999027B3197955", icon: "💵" },
  { name: "USDC", address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", icon: "🟦" },
  { name: "BUSD", address: "0xe9e7cea3dedca5984780bafc599bd69add087d56", icon: "🟧" }
];

// ABI عام لعقود BEP-20
const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint amount) returns (bool)"
];

// ألوان لكل عملة
const COLORS = {
  NWTK: "#FFD700",
  BNB: "#F3BA2F",
  USDT: "#26A17B",
  USDC: "#2775CA",
  BUSD: "#F0B90B"
};

export default function Wallet() {
  const [address, setAddress] = useState("");
  const [balances, setBalances] = useState({});
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [transferData, setTransferData] = useState({ token: "NWTK", recipient: "", amount: "" });

  const connectWallet = async () => {
    if (window.ethereum) {
      const _provider = new ethers.BrowserProvider(window.ethereum);
      await _provider.send("eth_requestAccounts", []);
      const _signer = await _provider.getSigner();
      const _address = await _signer.getAddress();

      setProvider(_provider);
      setSigner(_signer);
      setAddress(_address);

      // قراءة جميع الأرصدة
      let _balances = {};
      for (let token of TOKENS) {
        if (token.name === "BNB") {
          const bnbBal = await _provider.getBalance(_address);
          _balances[token.name] = ethers.formatEther(bnbBal);
        } else {
          const contract = new ethers.Contract(token.address, ERC20_ABI, _provider);
          const bal = await contract.balanceOf(_address);
          _balances[token.name] = ethers.formatEther(bal);
        }
      }
      setBalances(_balances);
    } else {
      alert("يرجى تثبيت Metamask أولاً");
    }
  };

  const handleTransfer = async () => {
    if (!signer) return alert("يرجى الاتصال بالمحفظة أولاً");

    const { token, recipient, amount } = transferData;

    try {
      if (token === "BNB") {
        const tx = await signer.sendTransaction({
          to: recipient,
          value: ethers.parseEther(amount)
        });
        await tx.wait();
        alert("تم تحويل BNB بنجاح!");
      } else {
        const tokenInfo = TOKENS.find(t => t.name === token);
        const contract = new ethers.Contract(tokenInfo.address, ERC20_ABI, signer);
        const tx = await contract.transfer(recipient, ethers.parseEther(amount));
        await tx.wait();
        alert(`تم تحويل ${token} بنجاح!`);
      }

      // تحديث الرصيد بعد التحويل
      let _balances = { ...balances };
      for (let t of TOKENS) {
        if (t.name === "BNB") {
          const bnbBal = await provider.getBalance(address);
          _balances.BNB = ethers.formatEther(bnbBal);
        } else {
          const contract = new ethers.Contract(t.address, ERC20_ABI, provider);
          const bal = await contract.balanceOf(address);
          _balances[t.name] = ethers.formatEther(bal);
        }
      }
      setBalances(_balances);
      setTransferData({ ...transferData, recipient: "", amount: "" });
    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء التحويل. يرجى التأكد من صحة البيانات.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>محفظة نواة</h2>
      {!address ? (
        <button
          onClick={connectWallet}
          style={{ padding: "10px 15px", borderRadius: "8px", cursor: "pointer" }}
        >
          Connect Wallet
        </button>
      ) : (
        <>
          <p>العنوان: {address}</p>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
            {Object.keys(balances).map(token => {
              const tokenInfo = TOKENS.find(t => t.name === token);
              return (
                <div
                  key={token}
                  style={{
                    backgroundColor: COLORS[token] || "#ccc",
                    color: "#fff",
                    padding: "20px",
                    borderRadius: "12px",
                    minWidth: "150px",
                    textAlign: "center",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    transition: "transform 0.2s",
                    cursor: "pointer"
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <h3>{tokenInfo.icon} {token}</h3>
                  <p style={{ fontSize: "18px", fontWeight: "bold" }}>{balances[token] || 0}</p>
                  <button
                    style={{
                      marginTop: "10px",
                      padding: "8px 12px",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      backgroundColor: "#fff",
                      color: COLORS[token] || "#000",
                      fontWeight: "bold",
                      transition: "background-color 0.2s, color 0.2s"
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = COLORS[token];
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = "#fff";
                      e.currentTarget.style.color = COLORS[token] || "#000";
                    }}
                    onClick={() => setTransferData({ ...transferData, token })}
                  >
                    تحويل {token}
                  </button>
                </div>
              );
            })}
          </div>

          {/* نموذج التحويل */}
          <div
            style={{
              marginTop: "30px",
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              maxWidth: "400px"
            }}
          >
            <h3>تحويل {transferData.token}</h3>
            <input
              placeholder="العنوان المستلم"
              value={transferData.recipient}
              onChange={e => setTransferData({ ...transferData, recipient: e.target.value })}
              style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
            />
            <input
              placeholder="المبلغ"
              value={transferData.amount}
              onChange={e => setTransferData({ ...transferData, amount: e.target.value })}
              style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
            />
            <button
              onClick={handleTransfer}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                backgroundColor: "#2775CA",
                color: "#fff",
                fontWeight: "bold",
                transition: "background-color 0.2s"
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1a4e8c")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#2775CA")}
            >
              تحويل
            </button>
          </div>
        </>
      )}
    </div>
  );
}


