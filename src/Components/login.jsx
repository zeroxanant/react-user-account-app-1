import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../utils/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    if (!loginUser(email, password)) {
      setError("Invalid email or password");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="center-screen">
      <div className="auth-card">
        <h4 className="auth-title">Welcome Back</h4>

        {error && <p className="text-danger text-center">{error}</p>}

        <form onSubmit={handleLogin}>
          <input className="form-control mb-3" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" className="form-control mb-4" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

          <button className="btn btn-success w-100">Login</button>
        </form>

        <p className="text-center mt-3 mb-0">
          New here? <Link to="/register">Create account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
