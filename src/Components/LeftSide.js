import React from "react";
import Table from "react-bootstrap/Table";

const myText = (
  <div>
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
          <td>Daniel</td>
          <td>Asiedu</td>
          <td>@kojoasumani</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Kojo</td>
          <td>Asumani</td>
          <td>@kojo</td>
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

function leftSide() {
  return <div className="left-content">{myText}</div>;
}

export default leftSide;
