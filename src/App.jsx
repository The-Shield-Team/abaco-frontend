import React, { useState } from "react";
import {
  Alert,
  Card,
  Col,
  Row,
  Container,
  Form,
  Button,
  Accordion,
} from "react-bootstrap";
import axios from "axios";

function App() {
  const [result, setResult] = useState(false);

  const suma = () => {
    const primerNumero = document.getElementById("primerNumeroSuma").value;
    const segundoNumero = document.getElementById("segundoNumeroSuma").value;

    const xmlData = `
      <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <Add xmlns="http://abaco.org/">
            <a>${primerNumero}</a>
            <b>${segundoNumero}</b>
          </Add>
        </soap:Body>
      </soap:Envelope>
      `;

    const config = {
      headers: {
        "Content-Type": "text/xml",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios
      .post(
        "https://calculator20230403202631.azurewebsites.net/abacoService.asmx?",
        xmlData,
        {
          headers: {
            "Content-Type": "text/xml",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            Allow: "GET, HEAD, OPTIONS, TRACE",
          },
        }
      )
      .then(function(response) {
        console.log(response);
        console.log(response.data);
        setResult(response.data);
      });
  };
  const resta = () => {
    const primerNumero = document.getElementById("primerNumeroResta").value;
    const segundoNumero = document.getElementById("segundoNumeroResta").value;

    const xmlData = `
      <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <Substract xmlns="http://abaco.org/">
            <a>${primerNumero}</a>
            <b>${segundoNumero}</b>
          </Substract>
        </soap:Body>
      </soap:Envelope>
      `;

    const config = {
      headers: {
        "Content-Type": "text/xml",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios
      .post(
        "https://calculator20230403202631.azurewebsites.net/abacoService.asmx?",
        xmlData,
        {
          headers: {
            "Content-Type": "text/xml",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            Allow: "GET, HEAD, OPTIONS, TRACE",
          },
        }
      )
      .then(function(response) {
        console.log(response);
        console.log(response.data);
        setResult(response.data);
      });
  };
  const multiplicacion = () => {
    const primerNumero = document.getElementById("primerNumeroMultiplicacion").value;
    const segundoNumero = document.getElementById("segundoNumeroMultiplicacion").value;

    const xmlData = `
      <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <Multiply xmlns="http://abaco.org/">
            <a>${primerNumero}</a>
            <b>${segundoNumero}</b>
          </Multiply>
        </soap:Body>
      </soap:Envelope>
      `;

    const config = {
      headers: {
        "Content-Type": "text/xml",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios
      .post(
        "https://calculator20230403202631.azurewebsites.net/abacoService.asmx?",
        xmlData,
        {
          headers: {
            "Content-Type": "text/xml",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            Allow: "GET, HEAD, OPTIONS, TRACE",
          },
        }
      )
      .then(function(response) {
        console.log(response);
        console.log(response.data);
        setResult(response.data);
      });
  };
  const division = () => {
    const primerNumero = document.getElementById("primerNumeroDivision").value;
    const segundoNumero = document.getElementById("segundoNumeroDivision").value;

    const xmlData = `
      <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <Divide xmlns="http://abaco.org/">
            <a>${primerNumero}</a>
            <b>${segundoNumero}</b>
          </Divide>
        </soap:Body>
      </soap:Envelope>
      `;

    const config = {
      headers: {
        "Content-Type": "text/xml",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios
      .post(
        "https://calculator20230403202631.azurewebsites.net/abacoService.asmx?",
        xmlData,
        {
          headers: {
            "Content-Type": "text/xml",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            Allow: "GET, HEAD, OPTIONS, TRACE",
          },
        }
      )
      .then(function(response) {
        console.log(response);
        console.log(response.data);
        setResult(response.data);
      });
  };
  return (
    <Container>
      <br />
      <Card>
        <Card.Header>Abaco</Card.Header>
        <Card.Body>
          <Row>
            <Col>
            {result !== false ? (
                      <>
                        <Alert variant="success">
                          Última consulta:
                          <br />
                          El resultado es {result}
                        </Alert>
                      </>
                    ) : (
                      <></>
                    )}
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Suma</Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Primer número</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Primer número"
                          id="primerNumeroSuma"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicSegundo número"
                      >
                        <Form.Label>Segundo número</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Segundo número"
                          id="segundoNumeroSuma"
                        />
                      </Form.Group>

                      <Button onClick={() => suma()} variant="primary">
                        Calcular
                      </Button>
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Resta</Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Primer número</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Primer número"
                          id="primerNumeroResta"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicSegundo número"
                      >
                        <Form.Label>Segundo número</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Segundo número"
                          id="segundoNumeroResta"
                        />
                      </Form.Group>

                      <Button onClick={() => resta()} variant="primary">
                        Calcular
                      </Button>
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Multiplicación</Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Primer número</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Primer número"
                          id="primerNumeroMultiplicacion"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicSegundo número"
                      >
                        <Form.Label>Segundo número</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Segundo número"
                          id="segundoNumeroMultiplicacion"
                        />
                      </Form.Group>

                      <Button onClick={() => multiplicacion()} variant="primary">
                        Calcular
                      </Button>
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>División</Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Primer número</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Primer número"
                          id="primerNumeroDivision"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicSegundo número"
                      >
                        <Form.Label>Segundo número</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Segundo número"
                          id="segundoNumeroDivision"
                        />
                      </Form.Group>

                      <Button onClick={() => division()} variant="primary">
                        Calcular
                      </Button>
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
