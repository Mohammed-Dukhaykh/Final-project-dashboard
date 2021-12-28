import { useContext, useState } from "react"
import { Button, Table } from "react-bootstrap"
import SkillsCell from "../components/SkillsCell"
import JobsContext from "../utils/jobsContext"
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddSkillsModel from "../components/AddSkillsModel";

function Skills() {
  const { skills } = useContext(JobsContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Skills</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          style={{ marginRight: 40, marginBottom: 10, display: "flex" }}
          variant="outline-primary"
          onClick={() => setShow(true)}
        >
          <span style={{ marginRight: 7 }}>Add Skills</span> <AssignmentIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>Id</th>
            <th style={{ width: "12%" }}>Skill Name</th>
            <th style={{ width: "20%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {skills.map(skill => (
            <>
              <SkillsCell skill={skill} key={skill._id} />
            </>
          ))}
        </tbody>
      </Table>
      <AddSkillsModel show={show} setShow={setShow} />
    </>
  )
}

export default Skills
