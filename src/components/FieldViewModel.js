import { Modal , ListGroup , Button } from "react-bootstrap"
function FieldViewModel(props) {
    const {show , setShow , field} = props
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View Field</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup.Item>
            <strong> Name:</strong> {field.name}
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

export default FieldViewModel
