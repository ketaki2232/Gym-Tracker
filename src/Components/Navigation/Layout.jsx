import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
