// @ts-check

/**
 * @typedef {Object} MockUser
 * @property {string} token
 * @property {string} username
 * @property {string} role
 * @property {string} email
 */

/** @type {MockUser | null} */
let mockUser = null;

/**
 * @param {Partial<MockUser>} param0
 * @returns {MockUser}
 */
export function login({
  username = "guest",
  role = "user",
  email = "guest@example.com",
}) {
  const token = `mock-${Math.random().toString(36).substring(2)}`;
  mockUser = { token, username, role, email };

  if (typeof localStorage !== "undefined") {
    localStorage.setItem("mockUser", JSON.stringify(mockUser));
  }

  return mockUser;
}

/**
 * @returns {MockUser | null}
 */
export function getUser() {
  if (mockUser) return mockUser;
  if (typeof localStorage !== "undefined") {
    const saved = localStorage.getItem("mockUser");
    if (saved) return JSON.parse(saved);
  }
  return null;
}

/**
 * @returns {void}
 */
export function logout() {
  mockUser = null;
  if (typeof localStorage !== "undefined") {
    localStorage.removeItem("mockUser");
  }
}
