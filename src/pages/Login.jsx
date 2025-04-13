import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in!");
      // TODO: Navigate to dashboard or homepage
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Welcome Back, Our Beloved Blood Donor!</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label htmlFor="email">
              <i className="fa fa-envelope icon" aria-hidden="true"></i>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">
              <i className="fa fa-lock icon" aria-hidden="true"></i>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to all statements in <a href="#">Terms of service</a>
            </label>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="signup-link">
          Don’t have an account? <Link to="/signup">Create one</Link>
        </p>
      </div>

      <div className="login-right">
        <img
          src="https://images.unsplash.com/photo-1606220691263-836b98e65b4b"
          alt="Blood Donation Theme"
        />
      </div>
    </div>
  );
}

export default Login;
