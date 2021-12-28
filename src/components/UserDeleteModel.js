import { useContext } from "react"
import JobsContext from "../utils/jobsContext"
import { Button, Modal } from "react-bootstrap"

function UserDeleteShow(props) {
  const { show, setShow , userId } = props
  const {deleteUser} = useContext(JobsContext)
  
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this User ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deleteUser(userId)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UserDeleteShow
