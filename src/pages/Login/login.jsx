import React from "react";
import { useHistory } from "react-router-dom";

import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";

function Login(props) {
  const logo = require("../../assets/logo.png").default;

  let history = useHistory();

  function authenticate(e) {
    e.preventDefault();
    history.push({ pathname: "/admin" });
  }

  return (
    <section className="bg-primary h-screen">
      <div className="row mx-0 items-center justify-center h-100">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <div className="card p-4 shadow">
            <div className="logo flex items-center justify-center mb-2">
              <img src={logo} alt="" className="rounded" />
            </div>
            {/* <h3 className="text-center">LOGIN</h3> */}
            <Form onSubmit={authenticate}>
              <FormGroup className="mb-3">
                <FormLabel className="small font-semibold mb-1">
                  Email
                </FormLabel>
                <FormControl required></FormControl>
              </FormGroup>
              <FormGroup className="mb-3">
                <FormLabel className="small font-semibold mb-1">
                  Password
                </FormLabel>
                <FormControl required type="password"></FormControl>
              </FormGroup>
              <FormGroup>
                <Button type="submit" block className="w-100 text-white">
                  LOGIN
                </Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
