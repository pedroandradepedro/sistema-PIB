import { Nav } from "react-bootstrap";
import { FaHome, FaTools, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark text-white">
      <div className="sidebar-header p-3 border-bottom border-secondary">
        <h4 className="m-0">
          <FaTools className="icon"></FaTools>
          PIBSys
        </h4>
      </div>

      <Nav className="flex-column mt-3">
        <Nav.Item>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link py-3 ${isActive ? "active bg-primary" : ""}`
            }
          >
            <FaHome className="icon"></FaHome>
            Home
          </NavLink>

          <NavLink
            to="/membros"
            className={({ isActive }) =>
              `nav-link py-3 ${isActive ? "active bg-primary" : ""}`
            }
          >
            <FaUser className="icon"></FaUser>
            Membros
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
