# User Authentication Project

This project implements a user authentication system where users can log in with a username and password. Upon successful authentication, users gain access to the system. The project is built using the following technologies:

- **Backend**: Node.js, Express.js
- **Frontend**: React.js, Vite.js
- **Database**: MongoDB

---
## Project Structure

```
project-root/
├── client/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── ContextProvider/
│   │   │   │   └── Context.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Error.jsx
│   │   │   ├── Footer.css
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.css
│   │   │   ├── Header.jsx
│   │   │   ├── Homepage.css
│   │   │   ├── Homepage.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── mix.css
│   │   ├── index.css
│   │   ├── index.jsx
│   │   └── main.jsx
│   └── vite.config.js
└── server/
    ├── .env
    ├── .gitignore
    ├── app.js
    ├── db/
    │   └── conn.js
    ├── middleware/
    │   └── authenticate.js
    ├── models/
    │   └── userSchema.js
    ├── package.json
    └── routes/
        └── router.js
```

This updated project structure includes the additional files and directories you mentioned and is formatted for better readability.
```

---

## Backend

The backend is developed using Node.js and Express.js, with MongoDB as the database kindly add your env.

### Required Packages

Install the necessary dependencies for the server:

```bash
npm install bcrypt bcryptjs cookie-parser cors dotenv express jsonwebtoken mongoose validator
```

---

## Frontend

The frontend is built using React.js and Vite.js.

### Required Packages

Install the necessary dependencies for the client:

```bash
npm install react react-dom react-router-dom
npm install -D @eslint/js @types/react @types/react-dom @vitejs/plugin-react eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh globals vite
```

---

## Features

- User registration and login
- Password encryption using bcrypt
- JWT-based authentication
- Persistent login with cookies
- Responsive design with React

---

## Getting Started

### Backend Setup

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the `.env` file with your MongoDB URI and JWT secret.
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.

---

## License

This project is licensed under the MIT License.

---