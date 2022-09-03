import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Copyright ⓒ {year}</p>
      <p>Developed by G Vishwanath Yashaswi</p>
    </footer>
  );
}

export default Footer;
