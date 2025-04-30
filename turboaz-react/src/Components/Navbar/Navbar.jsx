import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="main">
      <div style={{ paddingTop: "10px" }} className="container">
        <div className="turbo-az-div">
          <Link className="turbo-az" to="/">
            TURBO.AZ
          </Link>
        </div>
        <div className="turboaz-form">
          <Link to="/autos/new" className="button-form">
            <span className="plus-form-icon">+</span> Yeni elan
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
