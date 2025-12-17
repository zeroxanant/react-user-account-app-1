import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/login";
import Register from "./Components/Register";
import Dashboard from "./Components/dashboard";
import Navbar from "./Components/navbar";

const isAuthenticated = () => {
  return localStorage.getItem("loggedIn") === "true";
};


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
