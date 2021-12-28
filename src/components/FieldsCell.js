import { useState } from "react"
import { Button } from "react-bootstrap"
import FieldDeleteModel from "./FieldDeleteModel"
import FieldEditModel from "./FieldEditModel"
import FieldViewModel from "./FieldViewModel"

function FieldsCell(props) {
    const {field} = props
    const [viewShow , setViewShow] = useState(false)
    const [editShow , setEditShow] = useState(false)
    const [deleteShow , setDeleteShow] = useState(false)
  return (
    <>
      <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
        <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{field._id}</td>
        <td>{field.name}</td>
        <td>
          <Button
            style={{ width: "100px" }}
            variant="outline-primary"
            className="me-2"
            onClick={() => setViewShow(true)}
          >
            View
          </Button>
          <Button style={{ width: "100px" }} variant="outline-success" onClick={() => setEditShow(true)}>
            Edit
          </Button>{" "}
          <Button style={{ width: "100px" }} variant="outline-danger" onClick={() => setDeleteShow(true)}>
            Delete
          </Button>{" "}
        </td>
        <FieldViewModel show={viewShow} setShow={setViewShow} field={field} />
        <FieldEditModel show={editShow} setShow={setEditShow} field={field} />
        <FieldDeleteModel show={deleteShow} setShow={setDeleteShow} fieldId={field._id} />
      </tr>
    </>
  )
}

export default FieldsCell
