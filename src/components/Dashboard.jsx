import React, { useState } from "react";
import Wallet from "./Wallet";
import Transfer from "./Transfer";

export default function Dashboard() {
  const [connectedAccount, setConnectedAccount] = useState("");
  const [refreshFlag, setRefreshFlag] = useState(false);

  const triggerRefresh = () => setRefreshFlag(!refreshFlag); // عكس القيمة لإطلاق useEffect

  return (
    <div>
      <h1>Nawah Dashboard</h1>
      <Wallet onConnect={setConnectedAccount} refreshFlag={refreshFlag} />
      {connectedAccount && <Transfer fromAccount={connectedAccount} onTransfer={triggerRefresh} />}
    </div>
  );
}

