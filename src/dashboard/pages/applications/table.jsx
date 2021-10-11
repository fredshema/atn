import React from "react";

import { Badge } from "react-bootstrap";
import { Files } from "react-bootstrap-icons";

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
              <th className="fit-width">NO</th>
              <th className="fit-width">Application Name</th>
              <th>Token</th>
              <th className="text-center">Type</th>
            </tr>
          </thead>
          <tbody>
            {Array(9)
              .fill("")
              .map((_, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>Lorem, ipsum.</td>
                  <td>
                    <Badge className="bg-accent-btn text-accent w-full">
                      <div className="flex items-center">
                        <span className="flex-1 text-left text-base font-medium">
                          xxx-xxx-xxx-xxx-xxx
                        </span>
                        <Files
                          size={15}
                          className="text-primary cursor-pointer"
                        />
                      </div>
                    </Badge>
                  </td>
                  <td className="text-center">xxx-xxx</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="row items-center justify-end flex-nowrap mt-3 px-3.5">
        <div className="col-auto flex flex-nowrap items-center">
          <span className="whitespace-nowrap mr-2.5 small">Per Page</span>
          <select className="form-select form-select-sm">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
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
