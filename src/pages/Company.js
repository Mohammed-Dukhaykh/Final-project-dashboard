import { useContext } from "react"
import { Button, Table } from "react-bootstrap"
import CompanyCell from "../components/CompanyCell"
import JobsContext from "../utils/jobsContext"

function Company() {
  const { company } = useContext(JobsContext)
  return (
    <>
      <h1 style={{ marginTop: 10 , marginBottom: 60 }}>Companies</h1>
      
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>Id</th>
            <th style={{ width: "12%" }}>Company Name</th>
            <th style={{ width: "15%" }}>Avatar</th>
            <th style={{ width: "15%" }}>CEO</th>
            <th style={{ width: "5%" }}>All Jobs</th>
            <th style={{ width: "9%" }}>HR Employees</th>
            <th style={{ width: "9%" }}>Users Employees </th>
            <th style={{ width: "9%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {company.map(oneCompany => (
            <>
              <CompanyCell company={oneCompany} key={oneCompany._id} />
            </>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Company
