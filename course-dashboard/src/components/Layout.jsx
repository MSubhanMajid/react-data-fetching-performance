import { Link, Outlet } from "react-router-dom";
import {useAuth} from "../context/AuthContext";

function Layout() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: "16px",
          padding: "16px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/dashboard">Dashboard</Link>
        {isLoggedIn ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
      <div style={{ padding: "16px" }}>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
