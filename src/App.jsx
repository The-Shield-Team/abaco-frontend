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
  const [resultSuma, setResultSuma] = useState(false);
  const [resultResta, setResultResta] = useState(false);
  const [resultMultiplicacion, setResultMultiplicacion] = useState(false);
  const [resultDivision, setResultDivision] = useState(false);

  const suma = () => {
    const primerNumero = document.getElementById("primerNumeroSuma").value;
    const segundoNumero = document.getElementById("segundoNumeroSuma").value;

    const bodyData = {
      numero1: parseInt(primerNumero),
      numero2: parseInt(segundoNumero),
    };

    axios
      .post("http://20.121.116.27/calc/suma", bodyData)
      .then(function(response) {
        console.log(response);
        console.log(response.data);
        setResult(response.data.resultado);
        setResultSuma(response.data.resultado);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  
  const resta = () => {
    const primerNumero = document.getElementById("primerNumeroResta").value;
    const segundoNumero = document.getElementById("segundoNumeroResta").value;

    const bodyData = {
      numero1: parseInt(primerNumero),
      numero2: parseInt(segundoNumero),
    };

    axios
      .post("http://20.121.116.27/calc/resta", bodyData, {
        headers: {
          'content-type': 'application/json',
          'mode': 'no-cors'
      })
      .then(function(response) {
        console.log(response);
        console.log(response.data);
        setResult(response.data.resultado);
        setResultResta(response.data.resultado);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const multiplicacion = () => {
    const primerNumero = document.getElementById("primerNumeroMultiplicacion")
      .value;
    const segundoNumero = document.getElementById("segundoNumeroMultiplicacion")
      .value;

    const bodyData = {
      numero1: parseInt(primerNumero),
      numero2: parseInt(segundoNumero),
    };

    axios
      .post("http://20.121.116.27/calc/multiplicacion", bodyData)
      .then(function(response) {
        console.log(response);
        console.log(response.data);
        setResult(response.data.resultado);
        setResultMultiplicacion(response.data.resultado);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const division = () => {
    const primerNumero = document.getElementById("primerNumeroDivision").value;
    const segundoNumero = document.getElementById("segundoNumeroDivision")
      .value;

      const bodyData = {
        numero1: parseInt(primerNumero),
        numero2: parseInt(segundoNumero),
      };
  
      axios
        .post("http://20.121.116.27/calc/division", bodyData)
        .then(function(response) {
          console.log(response);
          console.log(response.data);
          setResult(response.data.resultado);
          setResultDivision(response.data.resultado);
        })
        .catch((e) => {
          console.log(e);
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
                    {result}
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
                    {resultSuma !== false ? (
                      <>
                        <br />
                        <Alert variant="success">
                          El resultado es {resultSuma}
                        </Alert>
                      </>
                    ) : (
                      <></>
                    )}
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
                    {resultResta !== false ? (
                      <>
                        <br />
                        <Alert variant="success">
                          El resultado es {resultResta}
                        </Alert>
                      </>
                    ) : (
                      <></>
                    )}
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

                      <Button
                        onClick={() => multiplicacion()}
                        variant="primary"
                      >
                        Calcular
                      </Button>
                    </Form>
                    {resultMultiplicacion !== false ? (
                      <>
                        <br />
                        <Alert variant="success">
                          El resultado es {resultMultiplicacion}
                        </Alert>
                      </>
                    ) : (
                      <></>
                    )}
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
                    {resultDivision !== false ? (
                      <>
                        <br />
                        <Alert variant="success">
                          El resultado es {resultDivision}
                        </Alert>
                      </>
                    ) : (
                      <></>
                    )}
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
