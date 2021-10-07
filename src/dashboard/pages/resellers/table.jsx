import React from "react";

import {
  CaretRightSquareFill,
  CaretLeftSquareFill,
} from "react-bootstrap-icons";

function Table(props) {
  return (
    <div>
      <div className="table-responsive rounded-top">
        <table className={`w-full`}>
          <thead className={`bg-gray-200 px-2 rounded shadow-sm`}>
            <tr>
              <th style={{ width: 1 + "px" }}>NO</th>
              <th>Application Name</th>
              <th>Destination</th>
              <th>Product ID</th>
              <th>Amount</th>
              <th>Date/Time</th>
            </tr>
          </thead>
          <tbody>
            {Array(9)
              .fill("")
              .map((_, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>Lorem, ipsum.</td>
                  <td>Lorem, ipsum dolor.</td>
                  <td>22-233</td>
                  <td>20,000 Frw</td>
                  <td>23/02/2020</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="row items-center justify-end flex-nowrap mt-3 px-3.5">
        <div className="col-auto">
          <CaretLeftSquareFill
            size={25}
            className="text-light cursor-pointer"
          />
        </div>
        <div className="col-auto">
          <CaretRightSquareFill
            size={25}
            className="text-light cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Table;
