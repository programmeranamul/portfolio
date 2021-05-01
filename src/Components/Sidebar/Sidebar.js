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
    <aside className="side-menu d-flex flex-column justify-content-between position-fixed">
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
      <div className="d-flex justify-content-center mb-3">
        <button className="btn btn-primary">Download CV</button>
      </div>
      {/* <footer className="py-2">
                <p className="text-center text-white m-0">© 2020 anamul.com</p>
            </footer> */}
    </aside>
  );
};

export default Sidebar;
