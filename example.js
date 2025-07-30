import { login, getUser, logout } from "./index.js";

const u = login({
  username: "snowfoxlab",
  role: "admin",
  email: "contact@snowfoxlab.com.np",
});
console.log("✅ Logged in:", u);

console.log("👤 Current user:", getUser());

logout();
console.log("🔒 After logout:", getUser());
