import { Link } from "react-router-dom";

const NavItem = ({ icon, label, path }) => {
  return (
    <Link to={path} className="nav-item">
      <span>{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export default NavItem;
