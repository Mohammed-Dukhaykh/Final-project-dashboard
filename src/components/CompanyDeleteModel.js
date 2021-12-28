import { useContext } from "react"
import JobsContext from "../utils/jobsContext"
import { Button, Modal } from "react-bootstrap"

function CompanyDeleteModel(props) {
    const {show , setShow , companyId} = props
    const {deleteCompany} = useContext(JobsContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this Company ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deleteCompany(companyId)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CompanyDeleteModel
