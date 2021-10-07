import React from "react";
import { PersonCircle } from "react-bootstrap-icons";

function NavBar() {
  return (
    <nav
      className={`bg-white rounded-lg  flex items-center justify-end ml-0 shadow-md py-4 px-4 `}
    >
      <div className={`user flex flex-nowrap items-center`}>
        <div className="profile mr-1.5">
          <PersonCircle size={20} />
        </div>
        <div className="details">
          <span>admin@test.com</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
