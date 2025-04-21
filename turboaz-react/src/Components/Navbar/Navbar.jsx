import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="main">
      <div className="turbo-az-div">
        <Link className="turbo-az" to="/">
          TURBO.AZ
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
