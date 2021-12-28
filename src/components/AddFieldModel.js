import { useContext } from "react"
import JobsContext from "../utils/jobsContext"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"

function AddFieldModel(props) {
    const {show , setShow} = props
    const {addField} = useContext(JobsContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={addField}>
          <Modal.Header closeButton>
            <Modal.Title>Add Field</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Name
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="field" required />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={() => setShow(false)}>
              Add Field
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default AddFieldModel
