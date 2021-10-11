import React from "react";
import { NavDropdown } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";

function NavBar() {
  return (
    <nav
      className={`bg-white rounded-lg  flex items-center justify-end ml-0 shadow-md py-3.5 px-4 `}
    >
      <div className={`user flex flex-nowrap items-center`}>
        <div className="profile">
          <PersonCircle size={20} />
        </div>
        <div className="details">
          <NavDropdown className="nav-text-accent" title="admin@test.com">
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
