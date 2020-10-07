import React from "react";
import LeftSide from "./Components/LeftSide";
import MainSection from "./Components/MainSection";
import RightSide from "./Components/RightSide";
import AfterMain from "./Components/AfterMain";
import Six from "./Components/Six";
import Seven from "./Components/Seven";
import Eight from "./Components/Eight";
import Nine from "./Components/Nine";
import Footer from "./Components/Footer";
//React Router
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "./logo.png";

function App() {
  return (
    <div className="main">
      <Navbar bg="dark" expand="lg" className="navbar-dark">
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Innovation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Brands</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Career Opportunities</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/*Components Below in Heirachy*/}
      <center style={{ marginTop: "30px", marginDown: "30px" }}>
        <LeftSide />
        <MainSection />
        <RightSide />
        <div>
          <img
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjMzc0NzRmIj48cGF0aCBkPSJNMTM5LjAzMzMzLDgyLjc3NWMtOS4zMTY2NywtNi4wOTE2NyAtMTYuNDgzMzMsLTEwLjAzMzMzIC0yNC4zNjY2NywtMTguMjc1Yy0xLjQzMzMzLC0xLjQzMzMzIC0zLjIyNSwtMy4yMjUgLTMuOTQxNjcsLTMuMjI1Yy0wLjcxNjY3LC0wLjcxNjY3IC0yLjE1LDAgLTMuMjI1LDBjLTMuOTQxNjcsMCAtNi44MDgzMywtMS43OTE2NyAtMTAuMDMzMzMsLTMuMjI1YzMuNTgzMzMsLTAuMzU4MzMgNy41MjUsLTAuNzE2NjcgMTAuMzkxNjcsLTAuNzE2NjdjMTIuOSwwIDIyLjIxNjY3LDMuMjI1IDI4LjY2NjY3LDcuMTY2NjdjMi4xNSwtMi4xNSA1LjM3NSwtMy45NDE2NyA3LjE2NjY3LC02LjgwODMzYy0yLjE1LC0yLjUwODMzIC0zLjIyNSwtOC42IC0zLjk0MTY3LC0xMS44MjVjLTAuNzE2NjcsLTIuNTA4MzMgLTAuNzE2NjcsLTQuNjU4MzMgLTEuNDMzMzMsLTYuMDkxNjdjLTMuOTQxNjcsLTE0LjMzMzMzIC04LjYsLTI1LjQ0MTY3IC0xNi40ODMzMywtMzYuMTkxNjdjNy44ODMzMywxNS40MDgzMyAxNS4wNSwzMS4xNzUgMTQuMzMzMzMsNTMuNzVjLTYuNDUsLTIuMTUgLTI2LjUxNjY3LC0zLjU4MzMzIC0yOC42NjY2NywtMy41ODMzM2MtMy4yMjUsMCAtNy41MjUsMS4wNzUgLTEwLjc1LDEuMDc1YzEuNDMzMzMsLTIuMTUgMi4xNSwtNS4zNzUgNC42NTgzMywtNi4wOTE2N2MxLjQzMzMzLC0wLjcxNjY3IDMuMjI1LDAgNS4zNzUsMGM2LjQ1LDAgMTMuNjE2NjcsLTAuNzE2NjcgMTUuNDA4MzMsMS40MzMzM2MxLjQzMzMzLC0yLjE1IDQuNjU4MzMsLTIuODY2NjcgNS4zNzUsLTQuNjU4MzNjMCwtMC43MTY2NyAtMC43MTY2NywtMy45NDE2NyAtMS40MzMzMywtNi4wOTE2N2MtMC43MTY2NywtMi4xNSAtMS40MzMzMywtNC42NTgzMyAtMi4xNSwtNi4wOTE2N2MtMi41MDgzMywtMTAuNzUgLTcuNTI1LC0yMi41NzUgLTExLjQ2NjY3LC0zMS4xNzVsLTEuNDMzMzMsLTIuMTVjMy45NDE2NywxMy4yNTgzMyA3LjE2NjY3LDI2LjE1ODMzIDcuMTY2NjcsNDNjLTcuMTY2NjcsMCAtMTAuMDMzMzMsMCAtMTcuOTE2NjcsMGMtMi41MDgzMywyLjE1IC01LjAxNjY3LDUuNzMzMzMgLTcuMTY2NjcsNy4xNjY2N2MwLjcxNjY3LC0zLjIyNSAtMS43OTE2NywtNS4zNzUgLTMuNTgzMzMsLTYuODA4MzNjMC43MTY2NywxLjQzMzMzIDIuNTA4MzMsNS4zNzUgMS4wNzUsNy41MjVjLTEuNDMzMzMsMCAtMC43MTY2NywtMi4xNSAtMi4xNSwtMi4xNWMtMC43MTY2NywwLjcxNjY3IC0xLjc5MTY3LDEuMDc1IC0yLjUwODMzLDEuMDc1djB2MGMtMS4wNzUsMCAtMS43OTE2NywwIC0yLjUwODMzLC0xLjA3NWMtMS40MzMzMywwIC0wLjcxNjY3LDIuMTUgLTIuMTUsMi4xNWMtMS40MzMzMywtMi4xNSAwLjM1ODMzLC02LjA5MTY3IDEuMDc1LC03LjUyNWMtMi4xNSwxLjQzMzMzIC00LjMsMy41ODMzMyAtMy41ODMzMyw2LjgwODMzYy0yLjE1LC0xLjQzMzMzIC00LjMsLTUuMDE2NjcgLTcuMTY2NjcsLTcuMTY2NjdjLTcuODgzMzMsMCAtMTAuNzUsMCAtMTcuOTE2NjcsMGMwLC0xNi44NDE2NyAzLjIyNSwtMjkuNzQxNjcgNy4xNjY2NywtNDNsLTEuNDMzMzMsMi4xNWMtMy45NDE2Nyw4LjYgLTguNiwyMC43ODMzMyAtMTEuNDY2NjcsMzEuMTc1Yy0wLjcxNjY3LDEuNDMzMzMgLTEuNDMzMzMsMy45NDE2NyAtMi4xNSw2LjA5MTY3Yy0wLjcxNjY3LDIuMTUgLTEuNDMzMzMsNS4zNzUgLTEuNDMzMzMsNi4wOTE2N2MwLjcxNjY3LDIuMTUgMy45NDE2NywyLjg2NjY3IDUuMzc1LDQuNjU4MzNjMS40MzMzMywtMi4xNSA4LjYsLTEuNDMzMzMgMTUuNDA4MzMsLTEuNDMzMzNjMi4xNSwwIDMuOTQxNjcsLTAuNzE2NjcgNS4zNzUsMGMyLjUwODMzLDAuNzE2NjcgMy4yMjUsMy45NDE2NyA0LjY1ODMzLDYuMDkxNjdjLTMuMjI1LDAgLTcuNTI1LC0xLjA3NSAtMTAuNzUsLTEuMDc1Yy0yLjE1LDAgLTIyLjIxNjY3LDEuNDMzMzMgLTI4LjY2NjY3LDMuNTgzMzNjLTAuNzE2NjcsLTIyLjU3NSA2LjQ1LC0zOC4zNDE2NyAxNC4zMzMzMywtNTMuNzVjLTcuODgzMzMsMTAuNzUgLTEyLjU0MTY3LDIxLjg1ODMzIC0xNi40ODMzMywzNi41NWMtMC43MTY2NywxLjQzMzMzIC0wLjcxNjY3LDMuMjI1IC0xLjQzMzMzLDYuMDkxNjdjLTAuNzE2NjcsMy4yMjUgLTEuNzkxNjcsOS4zMTY2NyAtMy45NDE2NywxMS44MjVjMi4xNSwyLjUwODMzIDUuMzc1LDQuNjU4MzMgNy4xNjY2Nyw2LjgwODMzYzYuNDUsLTMuOTQxNjcgMTUuNzY2NjcsLTcuMTY2NjcgMjguNjY2NjcsLTcuMTY2NjdjMi41MDgzMywwIDYuNDUsMCAxMC4zOTE2NywwLjcxNjY3Yy0zLjIyNSwxLjQzMzMzIC02LjA5MTY3LDMuMjI1IC0xMC4wMzMzMywzLjIyNWMtMS40MzMzMywwIC0yLjUwODMzLC0wLjcxNjY3IC0zLjIyNSwwYy0wLjcxNjY3LDAgLTIuNTA4MzMsMi4xNSAtMy45NDE2NywzLjIyNWMtNy44ODMzMyw3Ljg4MzMzIC0xNS4wNSwxMi4xODMzMyAtMjQuMzY2NjcsMTguMjc1Yy0yLjUwODMzLDIuMTUgLTQuNjU4MzMsMy45NDE2NyAtNy44ODMzMywxLjQzMzMzYzAsMjYuNTE2NjcgNi4wOTE2Nyw0Ni4yMjUgMTQuNjkxNjcsNjQuMTQxNjdjMS4wNzUsMS40MzMzMyAzLjIyNSw1LjM3NSAzLjIyNSw1LjM3NWMtNi40NSwtMTUuNDA4MzMgLTEwLjc1LC0zMy4zMjUgLTEwLjc1LC01NC44MjVjMCwtMi4xNSAtMC43MTY2NywtNS4zNzUgMCwtNi44MDgzM2MwLjcxNjY3LC0yLjUwODMzIDQuNjU4MzMsLTYuMDkxNjcgNy4xNjY2NywtNy44ODMzM2M3LjE2NjY3LC02LjgwODMzIDEyLjU0MTY3LC05LjMxNjY3IDIwLjQyNSwtMTUuNDA4MzNjMS40MzMzMywtMS40MzMzMyAyLjUwODMzLC0yLjUwODMzIDMuOTQxNjcsLTMuMjI1YzEuNDMzMzMsLTAuNzE2NjcgNy44ODMzMywtMS43OTE2NyAxMC43NSwtMy4yMjVjLTMuMjI1LDMuMjI1IC03LjE2NjY3LDkuMzE2NjcgLTExLjEwODMzLDEyLjU0MTY3Yy0wLjcxNjY3LDAuNzE2NjcgLTEuNDMzMzMsMCAtMi41MDgzMywwYzAsMzIuMjUgMS40MzMzMyw1OS40ODMzMyAxMC4wMzMzMyw4Mi4wNTgzM2MyLjE1LDUuMzc1IDQuNjU4MzMsMTAuNzUgNy44ODMzMywxNC42OTE2N2MtMTEuODI1LC0yMS41IC0xMC43NSwtNTYuMjU4MzMgLTEwLjc1LC04OS41ODMzM2MtMi41MDgzMywtMi4xNSAtMC43MTY2NywtMy4yMjUgMS40MzMzMywtNS43MzMzM2MyLjUwODMzLC0yLjUwODMzIDUuNzMzMzMsLTkuMzE2NjcgOS4zMTY2NywtMTAuNzVjMCwxLjQzMzMzIC0wLjcxNjY3LDIuNTA4MzMgLTEuNDMzMzMsMy41ODMzM2MtMC43MTY2NywxLjA3NSAtMi4xNSwyLjg2NjY3IC0yLjE1LDMuNTgzMzNjLTAuNzE2NjcsMi41MDgzMyAwLjcxNjY3LDcuODgzMzMgMS40MzMzMywxMC43NWMyLjE1LDkuMzE2NjcgNC42NTgzMywyMC4wNjY2NyA3Ljg4MzMzLDI3LjIzMzMzYzEuNDMzMzMsMCAwLjcxNjY3LC0yLjg2NjY3IDEuNDMzMzMsLTMuNTgzMzN2MHYwYzAuNzE2NjcsMC43MTY2NyAwLDMuNTgzMzMgMS40MzMzMywzLjU4MzMzYzMuMjI1LC03LjE2NjY3IDYuMDkxNjcsLTE3LjkxNjY3IDcuODgzMzMsLTI3LjIzMzMzYzAuNzE2NjcsLTIuNTA4MzMgMi4xNSwtNy44ODMzMyAxLjQzMzMzLC0xMC43NWMwLC0wLjcxNjY3IC0xLjQzMzMzLC0yLjE1IC0yLjE1LC0zLjIyNWMtMC43MTY2NywtMS4wNzUgLTEuNDMzMzMsLTIuNTA4MzMgLTEuNDMzMzMsLTMuNTgzMzNjMy4yMjUsMS40MzMzMyA2LjQ1LDcuODgzMzMgOS4zMTY2NywxMC43NWMyLjE1LDIuNTA4MzMgMy45NDE2NywzLjk0MTY3IDEuNDMzMzMsNS43MzMzM2MwLDMzLjMyNSAxLjA3NSw2OC4wODMzMyAtMTAuNzUsODkuNTgzMzNjMy4yMjUsLTMuOTQxNjcgNi4wOTE2NywtOS4zMTY2NyA3Ljg4MzMzLC0xNC42OTE2N2M4LjYsLTIyLjkzMzMzIDEwLjAzMzMzLC01MC4xNjY2NyAxMC4wMzMzMywtODIuNDE2NjdjLTEuNDMzMzMsMCAtMi4xNSwwLjcxNjY3IC0yLjUwODMzLDBjLTMuOTQxNjcsLTMuMjI1IC03Ljg4MzMzLC05LjMxNjY3IC0xMS4xMDgzMywtMTIuNTQxNjdjMi44NjY2NywxLjQzMzMzIDkuMzE2NjcsMi41MDgzMyAxMC43NSwzLjIyNWMxLjQzMzMzLDAuNzE2NjcgMi41MDgzMywyLjE1IDMuOTQxNjcsMy4yMjVjNy44ODMzMyw2LjA5MTY3IDEyLjksOC45NTgzMyAyMC40MjUsMTUuNDA4MzNjMi41MDgzMywyLjE1IDYuNDUsNS4zNzUgNy4xNjY2Nyw3Ljg4MzMzYzAuNzE2NjcsMS40MzMzMyAwLDQuNjU4MzMgMCw2LjgwODMzYzAsMjEuNSAtMy45NDE2NywzOS40MTY2NyAtMTAuNzUsNTQuODI1YzAsMCAyLjE1LC0zLjk0MTY3IDMuMjI1LC02LjA5MTY3YzguNiwtMTcuOTE2NjcgMTQuNjkxNjcsLTM3LjYyNSAxNC42OTE2NywtNjQuMTQxNjdjLTMuMjI1LDIuODY2NjcgLTUuMzc1LDAuNzE2NjcgLTcuODgzMzMsLTEuMDc1eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
          />
        </div>
        <AfterMain />
      </center>
      <Container style={{ marginTop: "30px", marginDown: "30px" }}>
        <Row>
          <Col md={3}>
            <Six />
          </Col>
          <Col md={3}>
            <Seven />
          </Col>
          <Col md={3}>
            <Eight />
          </Col>
          <Col md={3}>
            <Nine />
          </Col>
        </Row>
      </Container>
      <center style={{ marginTop: "30px", backgroundColor: "white", padding: "20px", marginDown: "30px" }}>
        <Footer />
      </center>
    </div>
  );
}

export default App;
