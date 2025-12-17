import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../utils/auth";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    bio: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, city, password } = form;

    if (!name || !email || !phone || !city || !password) {
      setError("Please fill all required fields");
      return;
    }

    registerUser(form);
    navigate("/login");
  };

  return (
    <div className="center-screen">
      <div className="auth-card">
        <h4 className="auth-title">Create Account</h4>

        {error && <p className="text-danger text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input className="form-control mb-3" name="name" placeholder="Full Name *" onChange={handleChange} />
          <input className="form-control mb-3" name="email" placeholder="Email *" onChange={handleChange} />
          <input className="form-control mb-3" name="phone" placeholder="Phone *" onChange={handleChange} />
          <input className="form-control mb-3" name="city" placeholder="City *" onChange={handleChange} />
          <textarea className="form-control mb-3" name="bio" placeholder="Short Bio" onChange={handleChange} />
          <input type="password" className="form-control mb-4" name="password" placeholder="Password *" onChange={handleChange} />

          <button className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
