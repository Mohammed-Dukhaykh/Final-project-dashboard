import { useState } from "react"
import { Button } from "react-bootstrap"
import CompanyDeleteModel from "./CompanyDeleteModel"
import CompanyViewModel from "./CompanyViewModel"

function CompanyCell(props) {
  const { company } = props
  const [viewshow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  return (
    <>
      <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
        <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{company._id}</td>
        <td>{company.companyName}</td>
        <td>
          <img
            class="rounded-circle"
            style={{ objectFit: "cover" }}
            width={100}
            height={100}
            src={company.avatar}
            data-holder-rendered="true"
          />
        </td>
        <td>
          <img
            class="rounded-circle"
            style={{ objectFit: "cover" }}
            width={100}
            height={100}
            src={company.CEO.avatar}
            data-holder-rendered="true"
          />
          <br />
          <strong>
            {" "}
            {company.CEO.firstName} {company.CEO.lastName}{" "}
          </strong>
        </td>
        <td>{company.jobs.length}</td>
        <td>{company.HR.length}</td>
        <td>{company.Users.length}</td>
        <td>
          <Button
            style={{ width: "100px" }}
            variant="outline-primary"
            className="me-2"
            onClick={() => setViewShow(true)}
          >
            View
          </Button>
          <Button style={{ width: "100px" }} variant="outline-danger" onClick={() => setDeleteShow(true)}>
            Delete
          </Button>{" "}
        </td>
        <CompanyViewModel company={company} show={viewshow} setShow={setViewShow} />
        <CompanyDeleteModel company={company} show={deleteShow} setShow={setDeleteShow} companyId={company._id} />
      </tr>
    </>
  )
}

export default CompanyCell
