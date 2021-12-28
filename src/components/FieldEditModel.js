import { useContext } from "react"
import { Button, Form, Modal , Row , Col } from "react-bootstrap"
import JobsContext from "../utils/jobsContext"
function FieldEditModel(props) {
    const {show , setShow , field} = props
    const {editField} = useContext(JobsContext)

  return (
    <>
      {" "}
      <Modal show={show} onHide={() => setShow(false)}>
        <Form className="mt-5" onSubmit={e => editField(e, field._id)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Skills</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Name
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="field" defaultValue={field.name} required />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="success" type="submit" onClick={() => setShow(false)}>
              Confirm Edit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default FieldEditModel
