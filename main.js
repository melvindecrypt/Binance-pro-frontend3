
const API_BASE = "https://binance-pro-backend2.onrender.com";

// Load users into dashboard
async function loadUsers() {
  try {
    const res = await fetch(`${API_BASE}/api/users`);
    const users = await res.json();
    console.log("Loaded users:", users);
    // Render users to UI here if needed
  } catch (err) {
    console.error("Error loading users:", err);
  }
}

// Approve KYC for a user
async function approveKYC(userId) {
  try {
    const res = await fetch(`${API_BASE}/api/kyc/verify/${userId}`, {
      method: "POST"
    });
    const result = await res.text();
    alert("KYC approved: " + result);
  } catch (err) {
    console.error("KYC approval error:", err);
  }
}

// Add virtual funds to a user's wallet (admin only)
async function addFunds(userId, coin, amount) {
  try {
    const res = await fetch(`${API_BASE}/api/wallet/add/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ coin, amount })
    });
    const result = await res.text();
    alert("Funds added: " + result);
  } catch (err) {
    console.error("Add funds error:", err);
  }
}

// Example on page load
window.onload = () => {
  loadUsers();
};
