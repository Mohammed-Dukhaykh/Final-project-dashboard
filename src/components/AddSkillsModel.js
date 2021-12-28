import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import JobsContext from "../utils/jobsContext"
function AddSkillsModel(props) {
    const {show , setShow } = props
    const {addSkill} = useContext(JobsContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={addSkill}>
          <Modal.Header closeButton>
            <Modal.Title>Add Skill</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Name
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="skill" required />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={() => setShow(false)}>
              Add Skill
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default AddSkillsModel
