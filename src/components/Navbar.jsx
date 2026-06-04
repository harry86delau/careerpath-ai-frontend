import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/logo.png";

const navClass = ({ isActive }) => (isActive ? "active" : undefined);

export default function Navbar() {
  return (
    <nav className="cp-navbar">
      <Link to="/" className="cp-logo">
        <img src={logoImg} alt="" className="cp-logo-img" />
        <span className="cp-logo-text">careerpath.ai</span>
      </Link>
      <div className="cp-nav-links">
        <NavLink to="/eksplor" className={navClass}>
          eksplor
        </NavLink>
        <NavLink to="/tes" className={navClass}>
          tes
        </NavLink>
        <NavLink to="/profil" className={navClass}>
          profil
        </NavLink>
      </div>
    </nav>
  );
}
