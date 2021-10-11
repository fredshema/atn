import React from "react";
import DashboardLayout from "../dashboard/dashboardLayout";
import BlankLayout from "../pages/blankLayout";

import {
  Resellers,
  Transactions,
  Products,
  Applications,
  Documentations,
} from "../dashboard/pages/index";

import { Login } from "../pages/index";

import { Redirect } from "react-router-dom";

const routes = [
  {
    component: BlankLayout,
    routes: [
      {
        name: "Index",
        path: "/",
        exact: true,
        render: () => <Redirect to="/login" />,
      },
      {
        name: "Login",
        path: "/login",
        component: Login,
      },
      {
        name: "Dashboard",
        path: "/admin",
        component: DashboardLayout,
        routes: [
          {
            name: "Dashboard",
            path: "/admin",
            exact: true,
            render: () => <Redirect to="/admin/resellers" />,
          },
          {
            name: "Resellers",
            path: "/admin/resellers",
            component: Resellers,
          },
          {
            name: "Transactions",
            path: "/admin/transactions",
            component: Transactions,
          },
          {
            name: "Products",
            path: "/admin/products",
            component: Products,
          },
          {
            name: "Applications",
            path: "/admin/applications",
            component: Applications,
          },
          {
            name: "Documentations",
            path: "/admin/documentations",
            component: Documentations,
          },
        ],
      },
      {
        name: "Logout",
        path: "/logout",
        exact: true,
        render: () => <Redirect to="/login" />,
      },
    ],
  },
];

export default routes;
