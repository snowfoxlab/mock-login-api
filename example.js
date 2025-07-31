// Mock localStorage for Node.js
global.localStorage = {
  _storage: {},

  setItem(key, value) {
    this._storage[key] = value.toString();
  },

  getItem(key) {
    return this._storage.hasOwnProperty(key) ? this._storage[key] : null;
  },

  removeItem(key) {
    delete this._storage[key];
  },

  clear() {
    this._storage = {};
  },
};

// Import your mock-login-api module
import { login, getUser, getToken, logout, clear } from "./index.js";

console.log("🔹 Starting mock-login-api Node.js test");

// Log in a mock user
const user = login({
  username: "snowfoxlab",
  role: "admin",
  email: "contact@snowfoxlab.com.np",
});
console.log("✅ Logged in:", user);

// Get current user info
console.log("👤 Current user:", getUser());

// Get only the token string
console.log("🔑 Current token:", getToken());

// Logout user
logout();
console.log("🔒 After logout, user:", getUser());

// Test clear() (alias to logout)
login({
  username: "tempUser",
  role: "user",
  email: "temp@snowfoxlab.com.np",
});
console.log("✅ Logged in new user:", getUser());

clear();
console.log("🧹 After clear(), user:", getUser());

console.log("🔹 End of test");
