import React from "react";
import { renderRoutes } from "react-router-config";

import Sidebar from "./components/sidebar/sidebar";
import NavBar from "./components/navbar/navbar.jsx";

const Dashboard = (props) => {
  const { route } = props;
  return (
    <div className="dashboard d-flex flex-row flex-nowrap h-screen">
      <div className="sidebar m-2">
        <Sidebar />
      </div>
      <div className="content flex-1 overflow-auto max-h-screen px-2 py-3">
        <div className="navigation">
          <NavBar />
        </div>
        <main className="flex-1 py-4 px-3 mt-3 rounded">{renderRoutes(route.routes)}</main>
      </div>
    </div>
  );
};

export default Dashboard;
