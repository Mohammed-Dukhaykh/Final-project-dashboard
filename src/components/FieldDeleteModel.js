import { useContext } from "react"
import { Modal, Button } from "react-bootstrap"
import JobsContext from "../utils/jobsContext"
function FieldDeleteModel(props) {
    const {show , setShow , fieldId} = props
    const {deleteField} = useContext(JobsContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Genre</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this Genre ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deleteField(fieldId)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default FieldDeleteModel
