
import React from "react";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#1a1a1a", color: "white", fontFamily: "sans-serif" }}>
      <section style={{ textAlign: "center", padding: "4rem 2rem", background: "linear-gradient(to bottom, #a3e635, #65a30d)" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Newbies with US</h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>Let's Carry You With US — Copy trades and grow with confidence.</p>
        <button style={{ backgroundColor: "white", color: "#65a30d", fontSize: "1rem", padding: "0.75rem 2rem", borderRadius: "0.5rem", border: "none" }}>
          Start Copying My Trades →
        </button>
      </section>

      <section style={{ padding: "4rem 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", textAlign: "center" }}>
        <div style={{ backgroundColor: "#1f2937", padding: "2rem", borderRadius: "0.5rem" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem" }}>1. Sign Up</h3>
          <p>Register with our partnered broker to begin.</p>
        </div>
        <div style={{ backgroundColor: "#1f2937", padding: "2rem", borderRadius: "0.5rem" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem" }}>2. Fund Your Account</h3>
          <p>Deposit any amount you're comfortable with.</p>
        </div>
        <div style={{ backgroundColor: "#1f2937", padding: "2rem", borderRadius: "0.5rem" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem" }}>3. Copy Trades</h3>
          <p>Watch my trades execute in your account automatically.</p>
        </div>
      </section>

      <section style={{ backgroundColor: "#0f172a", padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>Why Follow Me?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
          <div style={{ backgroundColor: "#1f2937", padding: "2rem", borderRadius: "0.5rem" }}>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Verified Results</h3>
            <p>See real, consistent performance with transparency.</p>
          </div>
          <div style={{ backgroundColor: "#1f2937", padding: "2rem", borderRadius: "0.5rem" }}>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Beginner Friendly</h3>
            <p>Perfect for those new to forex. No experience needed.</p>
          </div>
          <div style={{ backgroundColor: "#1f2937", padding: "2rem", borderRadius: "0.5rem" }}>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Community Support</h3>
            <p>Join a group of like-minded learners and investors.</p>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "1rem", fontSize: "0.875rem", color: "#9ca3af" }}>
        © 2025 Newbies with US. All rights reserved.
      </footer>
    </div>
  );
}
