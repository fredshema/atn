import React from "react";

import { Form, InputGroup, Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import Table from "./table";

function Applications(props) {
  return (
    <section>
       <div className="row mb-3">
        <h5 className={`text-accent px-0 uppercase font-semibold`}>Applications</h5>
      </div>
      <div className="row">
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <div className="row items-end mb-3.5 ">
              <div className="pt-2.5 col">
                <h6 className={`text-accent font-semibold mb-0 min-w-max `}>
                  Applications (9)
                </h6>
              </div>
              <div className="pt-2.5 col-auto min-w-max flex flex-nowrap">
                <Form>
                  <Form.Group controlId="formBasicPassword">
                    <InputGroup>
                      <Form.Control
                        className="bg-accent-btn"
                        size="sm"
                        type="search"
                        placeholder="Search..."
                      />
                      <InputGroup.Text
                        id="basic-addon1"
                        className="bg-accent-btn"
                      >
                        <Search />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Form>
                <Button
                  variant="accent-btn"
                  size="sm"
                  className={`text-accent ml-2.5`}
                >
                  Refresh
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Table />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Applications;
