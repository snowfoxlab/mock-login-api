# mock-login-api

A simple mock login helper for frontend developers. Generate fake JWT tokens, user roles, usernames, and emails for testing your frontend auth flow — no backend required.

Perfect for React, Next.js, Expo, or any modern web app.

## Installation

```bash
npm install @snowfoxlab/mock-login-api
```

### Local Development

```bash
# Clone this repo
git clone https://github.com/snowfoxlab/mock-login-api.git
cd mock-login-api
npm install

# Link to your project
npm link
cd /path/to/your-project
npm link mock-login-api
```

## Quick Start

```javascript
import { login, getUser, logout } from "mock-login-api";

// Log in a mock user
const user = login({
  username: "boss",
  role: "admin",
  email: "boss@example.com",
});

console.log("✅ Logged in:", user);
// Output: { token: 'mock-jwt-token-...', username: 'boss', role: 'admin', email: 'boss@example.com' }

// Get current user
console.log("👤 Current user:", getUser());

// Logout
logout();
console.log("🔒 After logout:", getUser()); // null
```

## API Reference

| Function                           | Description               | Returns                            |
| ---------------------------------- | ------------------------- | ---------------------------------- |
| `login({ username, role, email })` | Log in a mock user        | `{ token, username, role, email }` |
| `getUser()`                        | Get the current mock user | User object or `null`              |
| `logout()`                         | Clear the mock user data  | `void`                             |

## React Example

```jsx
import React, { useState } from "react";
import { login, getUser, logout } from "mock-login-api";

export default function App() {
  const [user, setUser] = useState(getUser());

  const handleLogin = () => {
    const loggedInUser = login({
      username: "admin",
      role: "administrator",
      email: "admin@company.com",
    });
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <div>
      <h1>Mock Login Demo</h1>

      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <p>Role: {user.role}</p>
          <p>Email: {user.email}</p>
          <p>Token: {user.token}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Not logged in</p>
          <button onClick={handleLogin}>Login as Admin</button>
        </div>
      )}
    </div>
  );
}
```

## Use Cases

- **Frontend Development**: Test auth flows without a backend
- **Component Testing**: Mock user states in Storybook or Jest
- **Demos & Prototypes**: Show auth functionality quickly
- **CI/CD Testing**: Safe mock data for automated tests

## Features

- ⚡ **Zero Setup** — Works immediately after install
- 🔒 **Safe** — No real authentication, perfect for demos
- 🪶 **Lightweight** — Zero dependencies
- 🧩 **Framework Agnostic** — Works with any JavaScript framework
- 🎯 **TypeScript Ready** — Full type support included

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

For major changes, please open an issue first to discuss what you would like to change.

## License

MIT © [Snowfoxlab](https://github.com/snowfoxlab)

## Author

**[Bikash Adhikari](https://github.com/bikashadhikari07/)**  
Published under [Snowfoxlab](https://github.com/snowfoxlab)
