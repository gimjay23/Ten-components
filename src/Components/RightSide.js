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
          <td>Pre</td>
          <td>Mest</td>
          <td>@premest</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Melt</td>
          <td>Water</td>
          <td>@meltwater</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Bruno Mars</td>
          <td>@bmars</td>
        </tr>
      </tbody>
    </Table>
  </div>
);

function rightSide() {
  return <div className="right-content">{myText}</div>;
}

export default rightSide;
