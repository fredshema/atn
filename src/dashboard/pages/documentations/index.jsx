import React from "react";

import { Button } from "react-bootstrap";

function Documentations(props) {
  return (
    <section>
      <div className="row bg-white rounded-lg py-4 px-3.5">
        <div className="col-12 col-md-10 col-lg-7 col-xl-8">
          <h5 className="font-bold text-accent">Make Transactions</h5>
          <p style={{ fontSize: 14 + "px" }}>
            In order to see all transactions in your database you can use the
            transactionsList query. You can see a live example of this query
            including{" "}
            <span className="text-primary fit-width">
              all available output parameters.
            </span>
          </p>
          <h5 className="font-bold text-accent mt-4">Query</h5>
          <p style={{ fontSize: 14 + "px" }}>
            To query your transactions you need to call the
            transactionsListQuery alongside some attributes. Optionally you can
            add
            <span className="text-primary fit-width"> pagination</span> and
            filters.
          </p>
          <h5 className="font-bold text-accent mt-4">Filter</h5>
          <p style={{ fontSize: 14 + "px" }}>
            To query your transactions you need to call the
            transactionsListQuery alongside some attributes. Optionally you can
            add
            <span className="text-primary fit-width"> pagination</span> and
            filters.
          </p>
          <div className="border-top border-bottom py-2.5">
            <div className="row  items-center flex-nowrap">
              <div className="col-auto">
                <Button size="sm" variant="primary" className="text-white">
                  Post
                </Button>
              </div>
              <p className="text-truncate flex-1 mb-0 small">
                http://143.110.147.37:8000/reseller/api/v1/transaction
              </p>
              <div className="col-auto">
                <Button size="sm" variant="accent">
                  Copy
                </Button>
              </div>
            </div>
          </div>
          <h5 className="font-bold text-accent mt-4">Headers</h5>
          <div className="div small bg-gray-300 p-3 opacity-90">
            <span className="font-bold font-back">AUTHORIZATION:</span> BEARER
            [API KEY]
          </div>
          <h5 className="font-bold text-accent mt-4">Arguments</h5>
          <div className="box p-3.5 border rounded my-3">
            <h6>
              Amount &nbsp; <span className="text-primary">Int</span>{" "}
            </h6>
            <p className="small mb-0 font-thin">
              Amount to be charged (count) or send
            </p>
          </div>
          <div className="box p-3.5 border rounded my-3">
            <h6>
              resellerProductId &nbsp;{" "}
              <span className="text-primary">String</span>{" "}
            </h6>
            <p className="small mb-0 font-thin">
              Reseller ID that facilitates in the assigning product
            </p>
          </div>
          <div className="box p-3.5 border rounded my-3">
            <h6>
              destination &nbsp; <span className="text-primary">String</span>{" "}
            </h6>
            <p className="small mb-0 font-thin">
              To where you are about to send certain amount to{" "}
            </p>
          </div>
        </div>
        <div className="col-12 col-md-10 col-lg-5 col-xl-4">
          <div className="row flex-column">
            <div className="col pb-3">
              <div className="card">
                <div className="card-body">
                  <Button pill variant="accent" size="sm">
                    Request
                  </Button>
                  <pre className="mt-3 small">
                    {"{"} <br />
                    <div className="pl-3">
                      "amount": 100, <br />
                      "resellerProductId": "123456", <br />
                      "destination": "(123) 999 999 999", <br />
                      "resellerAccountId": "123456" <br />
                    </div>
                    {"}"}
                  </pre>
                </div>
              </div>
            </div>
            <div className="col pb-3">
              <div className="card">
                <div className="card-body">
                  <Button pill variant="accent" size="sm">
                    Request
                  </Button>
                  <pre className="mt-3 small">
                    {"{"} <br />
                    <div className="pl-3">
                      "detail": {"{"} <br />
                      <div className="pl-3">
                        "id": 1, <br />
                        "resellerAccountId": "123456", <br />
                        "resellerProductId": <br />
                        "123456", <br />
                        "amount": 100, <br />
                        "destination": "(123) 999 999 999", <br />
                        "created_at": "2021-01-01" <br />
                      </div>
                      {"}"} <br />
                    </div>
                    {"}"} <br />
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Documentations;
