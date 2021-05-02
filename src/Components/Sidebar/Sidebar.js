import React from "react";
import "./Sidebar.css";
import logo from "../../image/logo1.jpg";
import { NavLink } from "react-router-dom";

const menuItems = [
  { text: "Home", to: "/home" },
  { text: "About", to: "/about" },
  { text: "Service", to: "/service" },
  { text: "Portfolio", to: "/portfolio" },
  { text: "Blog", to: "/blog" },
  { text: "Contact", to: "/contact" },
];

const Sidebar = () => {
  return (
    <aside className="side-menu d-flex flex-column justify-content-between">
      <div className="logo text-center pt-4 pb-3">
        <img src={logo} alt="Logo" className="w-75 rounded-circle" />
      </div>
      <nav>
        {menuItems.map((menuItem) => (
          <NavLink
            key={menuItem.text}
            to={menuItem.to}
            activeClassName="active"
          >
            {menuItem.text}
          </NavLink>
        ))}
      </nav>

      <footer className="d-flex justify-content-center mb-3">
        <a
          href="https://drive.google.com/uc?export=download&id=1PhF-IyNOHMdZKFx94dttD1zhIMNLnhNd"
          className="btn button-background-color"
        >
          Download CV
        </a>
      </footer>
    </aside>
  );
};

export default Sidebar;
