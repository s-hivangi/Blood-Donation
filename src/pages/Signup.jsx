import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import "../styles/Signup.css"; 

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registered Successfully!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h2>Become a Life Saver Today!</h2>
        <div className="input-group">
          <i className="fa fa-envelope icon"></i>
          <input type="email" placeholder="Your email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <i className="fa fa-lock icon"></i>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="terms">
          <input type="checkbox" /> I agree to the <a href="#">terms and conditions</a>
        </div>
        <button className="signup-btn" onClick={handleSignup}>Sign Up</button>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
      <div className="signup-right">
        <img src="/signup-banner.png" alt="Signup Banner" />
      </div>
    </div>
  );
}


export default Signup;
