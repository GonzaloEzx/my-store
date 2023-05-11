import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h3 className="navbar__title">Las Colecciones</h3>
      </Link>
      <ul className="navbar__collection">
        <NavLink
          to={`/category/celular`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          <li className="navbar__collection-item">
            <a href="#">Celulares</a>
          </li>
        </NavLink>
        <NavLink
          to={`/category/tablet`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          <li className="navbar__collection-item">
            <a href="#">Tablets</a>
          </li>
        </NavLink>
        <NavLink
          to={`/category/notebook`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          <li className="navbar__collection-item">
            <a href="#">Notebooks</a>
          </li>
        </NavLink>
        <NavLink to="/cart">
          <CartWidget />
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
