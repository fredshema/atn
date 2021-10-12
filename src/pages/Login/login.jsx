import React from "react";
import { useHistory } from "react-router-dom";

import { Form, Button } from "react-bootstrap";

function Login(props) {
  const logo = require("../../assets/logo.png").default;
  const img = require("../../assets/undraw_remotely_2j6y.svg").default;

  let history = useHistory();

  function authenticate(e) {
    e.preventDefault();
    history.push({ pathname: "/admin" });
  }

  return (
    <div className="content login ">
      <nav>
        <div className="brand p-2">
          <img src={logo} alt="logo" className=" rounded" />
        </div>
      </nav>
      <div className="container py-5">
        <div
          className="row flex-nowrap px-3 items-center justify-center"
          style={{ minHeight: 350 + "px" }}
        >
          <div className="col-12 col-sm-2 col-md-5 col-lg-6 d-none d-md-block">
            <img src={img} alt="screen" className="img-fluid" />
          </div>
          <div className="col-12 col-sm-10 col-md-1 col-lg-1 contents">
            <div
              className="w-full mx-auto align-self-center"
              style={{ maxWidth: 350 + "px" }}
            >
              <div className="mb-4">
                <h3>SIGN IN</h3>
              </div>
              <Form onSubmit={authenticate}>
                <div className="form-group first my-4">
                  <input
                    type="text"
                    className="form-control rounded"
                    id="username"
                    required
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-group last my-4">
                  <input
                    type="password"
                    className="form-control rounded"
                    id="password"
                    required
                    placeholder="Enter Password"
                  />
                </div>

                <div className="d-flex mb-4 align-items-center">
                  <span className="ml-auto">
                    <span className="forgot-pass">Forgot Password</span>
                  </span>
                </div>
                <Button
                  type="submit"
                  variant="accent"
                  className="w-full text-white"
                >
                  LOGIN
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
