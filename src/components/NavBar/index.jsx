import { Link } from 'react-router-dom';
import './navbar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
        </ul>
        <h1 className="logo1">Navbar</h1>
      </div>
    </nav>
  );
}
