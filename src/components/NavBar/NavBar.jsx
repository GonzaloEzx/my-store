import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <h3>my TechStore website</h3>
      </Link>
      <div className="Categories">
        <NavLink
          to={`/category/celular`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Celulares
        </NavLink>
        <NavLink
          to={`/category/tablet`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Tablets
        </NavLink>
        <NavLink
          to={`/category/notebook`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Notebooks
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
