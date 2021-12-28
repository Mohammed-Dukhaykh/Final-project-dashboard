import { Modal , ListGroup , Button } from "react-bootstrap"

function SkillsViewModel(props) {
    const {skill , show , setShow} = props
  return (
    <>
      {" "}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View Skills</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup.Item>
            <strong> Name:</strong> {skill.skill}
          </ListGroup.Item>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SkillsViewModel
