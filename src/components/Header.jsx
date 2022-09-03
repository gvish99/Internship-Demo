import React from "react";
function Header() {
  return (
    <header className="header">
      <nav className="nav flex-column">
        <a className="nav-link" href="#" style={{ color: "black" }}>
          Profile
        </a>
        <a className="nav-link active" href="#" style={{ color: "black" }}>
          Discover
        </a>
        <a className="nav-link" href="#" style={{ color: "black" }}>
          personal
        </a>
        <a className="nav-link" href="#" style={{ color: "black" }}>
          Community
        </a>
        <a className="nav-link" href="#" style={{ color: "black" }}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
