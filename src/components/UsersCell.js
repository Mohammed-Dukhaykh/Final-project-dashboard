import { useState } from "react"
import { Button } from "react-bootstrap"
import UserDeleteShow from "./UserDeleteModel"
import UserViewModel from "./UserViewModel"

function UsersCell(props) {
  const { user, role } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  if (user.role == role) return user == user
  console.log(user.role)
  return (
    <>
      <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
        <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{user._id}</td>
        <td>
          {user.firstName} {user.lastName}
        </td>
        <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{user.email}</td>
        <td>
          <img
            class="rounded-circle"
            style={{ objectFit: "cover" }}
            width={100}
            height={100}
            src={user.avatar}
            data-holder-rendered="true"
          />
        </td>
        <td>{user.role}</td>
        <td>
          <Button variant="outline-primary" className="me-2" onClick={() => setViewShow(true)}>
            View
          </Button>
          {user.role != "Admin" ? (
            <>
            
              <Button variant="outline-danger" onClick={() => setDeleteShow(true)}>
                Delete
              </Button>{" "}
            </>
          ) : null}
        </td>
        <UserViewModel user={user} show={viewShow} setShow={setViewShow} />
        <UserDeleteShow show={deleteShow} setShow={setDeleteShow} userId={user._id} />
      </tr>
    </>
  )
}

export default UsersCell
