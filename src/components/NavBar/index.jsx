import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle navbar visibility
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Add event listener to close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbarContainer = document.querySelector(".navbar-container");
      if (navbarContainer && !navbarContainer.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="navbar-container container">
        <input
          type="checkbox"
          name=""
          id=""
          onChange={toggleNavbar}
          checked={isOpen}
        />
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
