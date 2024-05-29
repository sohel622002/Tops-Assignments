import React from "react";
import { NavLink } from "react-router-dom";
import { LinksData } from "./SidebarData";

export default function Sidebar() {
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <NavLink className="nav-link" to="/">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              Dashboard
            </NavLink>
            <div className="sb-sidenav-menu-heading">Interface</div>
            {LinksData.map((link) => (
              <div key={link.name}>
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${link.name}`}
                  aria-expanded="false"
                  aria-controls={`collapse${link.name}`}
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-columns" />
                  </div>
                  {link.name}
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </a>
                <div
                  className="collapse"
                  id={`collapse${link.name}`}
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    {link.subLinks.map((subLink) => (
                      <NavLink
                        className="nav-link"
                        to={subLink.page}
                        key={subLink.name}
                      >
                        {subLink.name}
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
