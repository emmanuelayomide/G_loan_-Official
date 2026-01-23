import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';
import './Login.css';

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  // DEFAULT CREDENTIALS
  const DEFAULT_EMAIL = "CurtisKriner@gmail.com";
  const DEFAULT_PASSWORD = "Kriner@1k";

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
      localStorage.setItem('isAuthenticated', 'true');
      setAuth(true);
      navigate('/dashboard');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-glass-card">
        <div className="login-header">
          <div className="logo-circle">✦</div>
          <h1>Welcome Back</h1>
                   <h1>G_LOAN</h1>
          <p>Enter your credentials to access the Dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          {error && <div className="error-msg">{error}</div>}
          
          <div className="input-group">
            <Mail className="input-icon" size={18} />
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="input-group">
            <Lock className="input-icon" size={18} />
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <div className="eye-toggle" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          <div className="form-options">
            <label><input type="checkbox" /> Remember me</label>
            {/* <span className="forgot-link">Forgot password?</span> */}
          </div>

          <button type="submit" className="login-btn">Sign In</button>
        </form>

        {/* <p className="login-footer">Don't have an account? <span>Contact Admin</span></p> */}
      </div>
    </div>
  );
};

export default Login;