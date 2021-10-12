import React from "react";
import { Link, useLocation } from "react-router-dom";

function sidebar() {
  const GetPath = () => {
    return useLocation().pathname;
  };

  const routes = [
    { name: "Ressellers", path: "/admin/resellers" },
    { name: "Transactions", path: "/admin/transactions" },
    { name: "Products", path: "/admin/products" },
    { name: "Applications", path: "/admin/applications" },
    { name: "Documentation", path: "/admin/documentations" },
  ];

  const isActive = (path) => (path === GetPath() ? true : false);
  const logo = require("../../../assets/logo.png").default;

  return (
    <aside className="flex items-center justify-center flex-col h-full ">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navs flex-1 w-full mt-16">
        <ul className="px-0">
          {routes.map((route, i) => {
            return (
              <li key={i} className="my-2.5 mx-3.5">
                <Link
                  className={`py-2.5 px-3.5  rounded-lg cursor-pointer uppercase font-normal hover:bg-white no-underline w-100 block ${
                    isActive(route.path)
                      ? "text-primary-text bg-white"
                      : "text-white"
                  }`}
                  to={route.path}
                >
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default sidebar;
