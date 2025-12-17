import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <span className="navbar-brand fw-semibold">User Account App</span>
      {user && (
        <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
