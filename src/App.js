import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import {Container, Col, Row} from "reactstrap";
import CardSort from "./components/cardSort/CardSort"
import DataValidation from "./components/dataValidation/DataValidation"

function App() {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h1 className="text-center">MetroNet Developer Test</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardSort />
        </Col>
      </Row>
      <Row>
        <Col>
          <DataValidation />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
