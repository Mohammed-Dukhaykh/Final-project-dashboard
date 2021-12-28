import { useState } from "react"
import { Button } from "react-bootstrap"
import SkillsDeleteModel from "./SkillsDeleteModel"
import SkillsEditModel from "./SkillsEditModel"
import SkillsViewModel from "./SkillsViewModel"

function SkillsCell(props) {
  const { skill } = props
  const [viewShow , setViewShow] = useState(false)
  const [editShow , setEditShow] = useState(false)
  const [deleteShow , setDeleteShow] = useState(false)
  return (
    <>
      <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
        <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{skill._id}</td>
        <td>{skill.skill}</td>
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
        <SkillsViewModel show={viewShow} setShow={setViewShow} skill={skill} />
        <SkillsEditModel show={editShow} setShow={setEditShow} skills={skill} />
        <SkillsDeleteModel show={deleteShow} setShow={setDeleteShow} skillsId={skill._id} />
      </tr>
    </>
  )
}

export default SkillsCell
