import { useState } from "react"
import { useContext } from "react"
import { Button, Table } from "react-bootstrap"
import JobsContext from "../utils/jobsContext"
import SchoolIcon from '@mui/icons-material/School';
import FieldsCell from "../components/FieldsCell";
import AddFieldModel from "../components/AddFieldModel";

function Fields() {
  const { fields } = useContext(JobsContext)
  const [show , setShow] = useState(false)

  return (
    <>
      <h1 style={{ marginTop: 10 }}>Fields</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          style={{ marginRight: 40, marginBottom: 10, display: "flex" }}
          variant="outline-primary"
          onClick={() => setShow(true)}
        >
          <span style={{ marginRight: 7 }}>Add Field</span> <SchoolIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>Id</th>
            <th style={{ width: "12%" }}>Field Name</th>
            <th style={{ width: "20%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fields.map(field => (
            <>
            <FieldsCell field={field} key={field._id}  />
            </>
          ))}
        </tbody>
      </Table>
      <AddFieldModel show={show} setShow={setShow} />
    </>
  )
}

export default Fields
