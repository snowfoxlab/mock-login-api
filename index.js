/**
 * mock-login-api
 * A simple mock login helper for frontend developers.
 * Generates fake JWT-like tokens, user roles, usernames, and emails for testing frontend auth flows.
 * No backend needed.
 */

/**
 * Generate a fake JWT-like token with a random string and timestamp.
 * @returns {string} A fake token string.
 */
function generateToken() {
  return `mock-${Math.random().toString(36).substr(2)}.${Date.now()}`;
}

/**
 * Log in a mock user by saving user info and a fake token to localStorage.
 *
 * @param {Object} options - User details
 * @param {string} options.username - Username string
 * @param {string} options.role - User role string (e.g., 'admin', 'user')
 * @param {string} options.email - User email string
 * @returns {Object} Logged-in user info with token, username, role, and email
 *
 * @example
 * login({ username: 'boss', role: 'admin', email: 'boss@example.com' });
 */
export function login({ username, role, email }) {
  const token = generateToken();
  const user = { token, username, role, email };
  localStorage.setItem("mockUser", JSON.stringify(user));
  return user;
}

/**
 * Get the current logged-in mock user from localStorage.
 *
 * @returns {Object|null} User info object or null if not logged in.
 *
 * @example
 * getUser(); // { token, username, role, email } or null
 */
export function getUser() {
  const userJson = localStorage.getItem("mockUser");
  if (!userJson) return null;
  try {
    return JSON.parse(userJson);
  } catch {
    return null;
  }
}

/**
 * Get the current mock auth token string.
 *
 * @returns {string|null} The token string or null if not logged in.
 *
 * @example
 * getToken(); // "mock-abc123.1691212233456" or null
 */
export function getToken() {
  const user = getUser();
  return user ? user.token : null;
}

/**
 * Log out the current user by clearing stored data from localStorage.
 *
 * @returns {void}
 *
 * @example
 * logout();
 */
export function logout() {
  localStorage.removeItem("mockUser");
}

/**
 * Clear all stored mock user data from localStorage.
 * Alias for logout but semantically clearer in some test cases.
 *
 * @returns {void}
 *
 * @example
 * clear();
 */
export function clear() {
  localStorage.removeItem("mockUser");
}
