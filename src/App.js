import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {Container, Col, Row, Nav, Navbar, NavItem, NavbarText, Jumbotron} from "reactstrap";
import CardSort from "./components/cardSort/CardSort"
import DataValidation from "./components/dataValidation/DataValidation"

function App() {
  return (

    <BrowserRouter>
    <Navbar color="light" light>
      <Nav>
        <NavItem className="mx-2">
            <Link to="/cardSort"><NavbarText>Card Sort</NavbarText></Link>
        </NavItem>
        <NavItem className="mx-2">
            <Link to="/dataValidation"><NavbarText>Data Validation</NavbarText></Link>
        </NavItem>
        <NavItem className="mx-2">
          <a href="/teamIntroduction.html"><NavbarText>Team Introduction</NavbarText></a>
        </NavItem>
      </Nav>
    </Navbar>

      <Jumbotron fluid>
        <Container>
          <h1 class="display-4">MetroNet Developer Test</h1>
        </Container>
      </Jumbotron>

      <Container className="my-4">
        <Row>
          <Col>
          <Switch>
            <Route exact path="/cardSort" component={CardSort} />
            <Route exact path="/dataValidation" component={DataValidation} />
          </Switch>
          </Col>
        </Row>
      </Container>

    </BrowserRouter>
  );
}

export default App;
