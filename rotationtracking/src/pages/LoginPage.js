import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Loginpage.css'; // Import CSS file for styling

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook

  const handleLogin = () => {
    // Check if the credentials match the admin account
    if (username === 'admin' && password === 'password') {
      // If credentials match, navigate to the dashboard
      navigate('/dashboard');
    } else {
      // If credentials do not match, display an error message
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container"> {/* Container div with custom CSS class */}
      <h2>Login</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
