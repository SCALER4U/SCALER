export default function Dashboard() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Dashboard</h1>
      <p>Next: connect Shopify and show your sales here.</p>

      <button style={{ padding: "10px 14px", marginTop: 12 }}>
        Connect Shopify Store
      </button>

      <div style={{ marginTop: 24 }}>
        <h3>Sales Overview</h3>
        <ul>
          <li>Today: —</li>
          <li>This week: —</li>
          <li>This month: —</li>
        </ul>
      </div>
    </main>
  );
}
