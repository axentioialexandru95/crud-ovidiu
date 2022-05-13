import { Modal, Button, Form, Row, Col } from "react-bootstrap";

function AddMovieModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Group className="mb-3" controlId="formBasicMovie">
                <Form.Label>Movie title</Form.Label>
                <Form.Control type="search" placeholder="Type movie name." />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicMovie">
                <Form.Label>Movie genre</Form.Label>
                <Form.Select>
                  <option>Select genre</option>
                  <option value="action">Action</option>
                  <option value="adventure">Adventure</option>
                  <option value="comedy">Comedy</option>
                  <option value="sf">SF</option>
                  <option value="drama">Drama</option>
                  <option value="animation">Animation</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicMovie">
                <Form.Control className="movie-rating" type="number" placeholder="Add movie rating." />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Submit movie</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddMovieModal;
