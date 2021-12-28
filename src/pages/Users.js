import { useContext } from "react"
import { Button, Table } from "react-bootstrap"
import UsersCell from "../components/UsersCell"
import JobsContext from "../utils/jobsContext"
import GroupAddIcon from "@mui/icons-material/GroupAdd"
import AddUserModel from "../components/AddUserModel"
import { useState } from "react"

function Users(props) {
  const { role } = props
  const { users } = useContext(JobsContext)
  const [show, setShow] = useState(false)

  return (
    <>
      <h1 style={{ marginTop: 10 }}>Admin</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          style={{ marginRight: 40, marginBottom: 10, display: "flex" }}
          variant="outline-primary"
          onClick={() => setShow(true)}
        >
          <span style={{ marginRight: 7 }}>Add Admin</span> <GroupAddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>Id</th>
            <th style={{ width: "18%" }}>Full Name</th>
            <th style={{ width: "24%" }}>Email</th>
            <th style={{ width: "18%" }}>Avatar</th>
            <th style={{ width: "9%" }}>Role</th>
            <th style={{ width: "30%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <>
              <UsersCell user={user} key={user._id} role="User" />
            </>
          ))}
        </tbody>
      </Table>
      <h1 style={{ marginTop: 10 }}>Users</h1>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>Id</th>
            <th style={{ width: "18%" }}>Full Name</th>
            <th style={{ width: "24%" }}>Email</th>
            <th style={{ width: "18%" }}>Avatar</th>
            <th style={{ width: "9%" }}>Role</th>
            <th style={{ width: "30%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <>
              <UsersCell role="Admin" user={user} key={user._id} />
            </>
          ))}
        </tbody>
      </Table>
      <AddUserModel show={show} setShow={setShow} />
    </>
  )
}

export default Users
