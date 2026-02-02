"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/`)
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("Backend not reachable"));
  }, []);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Dashboard</h1>

      <p><strong>Backend status:</strong> {status}</p>

      <hr style={{ margin: "20px 0" }} />

      <button>Connect Shopify Store</button>
    </main>
  );
}
