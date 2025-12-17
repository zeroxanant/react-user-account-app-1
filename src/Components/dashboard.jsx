import { useState } from "react";
import { getUser, updateUser } from "../utils/auth";


const Dashboard = () => {
  const user = getUser();

  const [form, setForm] = useState({ ...user });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    updateUser(form);
    setMessage("Profile updated successfully");
  };

  return (
    <div className="center-screen">
      <div className="dashboard-card">
        <h4 className="text-center mb-4">My Profile</h4>
        <p className="text-center text-muted mb-4">
  Welcome back, {form.name}
</p>


        {message && <p className="text-success text-center">{message}</p>}

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Full Name</label>
            <input className="form-control" name="name" value={form.name} onChange={handleChange} />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" name="email" value={form.email} onChange={handleChange} />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Phone</label>
            <input className="form-control" name="phone" value={form.phone} onChange={handleChange} />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">City</label>
            <input className="form-control" name="city" value={form.city} onChange={handleChange} />
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label">Bio</label>
          <textarea className="form-control" name="bio" rows="3" value={form.bio} onChange={handleChange} />
        </div>

        <button className="btn btn-warning w-100" onClick={handleUpdate}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
