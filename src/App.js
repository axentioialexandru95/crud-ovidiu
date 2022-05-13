import {
  Navbar,
  Container,
  Form,
  Button,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddMovieModal from "./modal.js";
import React from "react";

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="App">
      <AddMovieModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></AddMovieModal>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CRUD Movies project</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Axentioi Ovidiu-Vasile</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="search">
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Button
                  className="btn-modal"
                  variant="primary"
                  onClick={() => setModalShow(true)}
                >
                  Add Movie
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>

      <Container className="search">
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Group className="mb-3" controlId="formBasicMovie">
                <Form.Label>Search movies</Form.Label>
                <Form.Control
                  type="search"
                  placeholder="Type any movie you want to find."
                />
                <Form.Text className="text-muted">
                  We'll show the movies we have.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Button
                  className="search-submit"
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>

      <Container className="filter">
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Group className="mb-3" controlId="formBasicMovie">
                <Form.Select>
                  <option>Filter genre</option>
                  <option value="action">Action</option>
                  <option value="adventure">Adventure</option>
                  <option value="comedy">Comedy</option>
                  <option value="sf">SF</option>
                  <option value="drama">Drama</option>
                  <option value="animation">Animation</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
        </Form>
      </Container>
      <Container className="filter">
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Group className="mb-3" controlId="formBasicMovie">
                <Form.Select>
                  <option>Sort by views</option>
                  <option value="asc">Ascendent</option>
                  <option value="desc">Descendent</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
        </Form>
      </Container>

      <Container className="table">
        <Row>
          <Col md="6" lg="3">
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/11572738/pexels-photo-11572738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Views: 4153</ListGroupItem>
                  <ListGroupItem>Action, Adventure, Comedy</ListGroupItem>
                </ListGroup>
                <Card.Footer>
                  <Row className="action-buttons">
                    <Col>
                      <Button
                        className="search-submit"
                        variant="primary"
                        type="submit"
                      >
                        Edit
                      </Button>
                    </Col>
                    <Col style={{textAlign: 'right'}}>
                      <Button
                        className="search-submit"
                        variant="danger"
                        type="submit"
                      >
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="3">
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/11572738/pexels-photo-11572738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Views: 4153</ListGroupItem>
                  <ListGroupItem>Action, Adventure, Comedy</ListGroupItem>
                </ListGroup>
                <Card.Footer>
                  <Row className="action-buttons">
                    <Col>
                      <Button
                        className="search-submit"
                        variant="primary"
                        type="submit"
                      >
                        Edit
                      </Button>
                    </Col>
                    <Col style={{textAlign: 'right'}}>
                      <Button
                        className="search-submit"
                        variant="danger"
                        type="submit"
                      >
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="3">
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/11572738/pexels-photo-11572738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Views: 4153</ListGroupItem>
                  <ListGroupItem>Action, Adventure, Comedy</ListGroupItem>
                </ListGroup>
                <Card.Footer>
                  <Row className="action-buttons">
                    <Col>
                      <Button
                        className="search-submit"
                        variant="primary"
                        type="submit"
                      >
                        Edit
                      </Button>
                    </Col>
                    <Col style={{textAlign: 'right'}}>
                      <Button
                        className="search-submit"
                        variant="danger"
                        type="submit"
                      >
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="3">
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/11572738/pexels-photo-11572738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Views: 4153</ListGroupItem>
                  <ListGroupItem>Action, Adventure, Comedy</ListGroupItem>
                </ListGroup>
                <Card.Footer>
                  <Row className="action-buttons">
                    <Col>
                      <Button
                        className="search-submit"
                        variant="primary"
                        type="submit"
                      >
                        Edit
                      </Button>
                    </Col>
                    <Col style={{textAlign: 'right'}}>
                      <Button
                        className="search-submit"
                        variant="danger"
                        type="submit"
                      >
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
