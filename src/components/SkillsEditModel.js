import { useContext } from "react"
import { Button, Form, Modal , Row , Col } from "react-bootstrap"
import JobsContext from "../utils/jobsContext"

function SkillsEditModel(props) {
  const { show, setShow , skills } = props
  const {editSkills} = useContext(JobsContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form className="mt-5" onSubmit={e => editSkills(e, skills._id)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Skills</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Name
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="skills" defaultValue={skills.skill} required />
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

export default SkillsEditModel
