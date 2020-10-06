import React from "react";
import Table from "react-bootstrap/Table";

function mainSection () {
  return (
    <div className="main-content">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mario</td>
            <td>Brother</td>
            <td>@mario</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Luigi</td>
            <td>Brother</td>
            <td>@luigi</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@moneyheist</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default mainSection