import { Card, CardColumns, Col, Row, Table } from "react-bootstrap"
import ApartmentIcon from "@mui/icons-material/Apartment"
import { useContext } from "react"
import JobsContext from "../utils/jobsContext"
import PeopleIcon from "@mui/icons-material/People"
import WorkIcon from "@mui/icons-material/Work"
import CardHeader from "react-bootstrap/esm/CardHeader"
import LeaderboardIcon from "@mui/icons-material/Leaderboard"
import PhotoIcon from "@mui/icons-material/Photo"
import CellUserStatistic from "../components/CellUserStatistic"
import CellCompanyStatistic from "../components/CellCompanyStatistic"
import CellJobStatistic from "../components/CellJobStatistic"

function Home() {
  const { users, company, jobs, posts } = useContext(JobsContext)
  if (!users) return <h1>... loading</h1>

  return (
    <>
      <h1>Dashboard Site</h1>
      <hr />

      <Row>
        <div
          style={{ display: "flex", alignItems: "center", gap: "19px", marginBottom: "25px", justifyContent: "center" }}
        >
          <h2 style={{ fontSize: "40px" }}>Site Statistics</h2>
          <LeaderboardIcon sx={{ fontSize: 70 }} />
        </div>
        <Col md={3}>
          <Card style={{ backgroundColor: "white" }}>
            <Card.Body style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ fontSize: "29px" }}>
                <center>
                  <Card.Title>Users</Card.Title>
                  <Card.Text>{users.length}</Card.Text>
                </center>
              </div>
              <PeopleIcon sx={{ fontSize: 70 }} />
            </Card.Body>
            <CardHeader style={{ backgroundColor: "black" }}>
              <Card.Text style={{ color: "white", textAlign: "center", fontSize: "20px" }}>Users</Card.Text>
            </CardHeader>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ backgroundColor: "white" }}>
            <Card.Body style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ fontSize: "29px" }}>
                <center>
                  <Card.Title>Company</Card.Title>
                  <Card.Text>{company.length}</Card.Text>
                </center>
              </div>
              <ApartmentIcon sx={{ fontSize: 70 }} />
            </Card.Body>
            <CardHeader style={{ backgroundColor: "black" }}>
              <Card.Text style={{ color: "white", textAlign: "center", fontSize: "20px" }}>Company</Card.Text>
            </CardHeader>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ backgroundColor: "white", color: "black" }}>
            <Card.Body style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ fontSize: "29px" }}>
                <center>
                  <Card.Title>Jobs</Card.Title>
                  <Card.Text>{jobs.length}</Card.Text>
                </center>
              </div>
              <WorkIcon sx={{ fontSize: 70 }} />
            </Card.Body>
            <CardHeader style={{ backgroundColor: "black" }}>
              <Card.Text style={{ color: "white", textAlign: "center", fontSize: "20px" }}>Jobs</Card.Text>
            </CardHeader>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ backgroundColor: "white", color: "black" }}>
            <Card.Body style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ fontSize: "29px" }}>
                <center>
                  <Card.Title>Posts</Card.Title>
                  <Card.Text>{posts.length}</Card.Text>
                </center>
              </div>
              <PhotoIcon sx={{ fontSize: 70 }} />
            </Card.Body>
            <CardHeader style={{ backgroundColor: "black" }}>
              <Card.Text style={{ color: "white", textAlign: "center", fontSize: "20px" }}>Jobs</Card.Text>
            </CardHeader>
          </Card>
        </Col>
      </Row>
      <hr />
      <div
        style={{ display: "flex", alignItems: "center", gap: "19px", marginBottom: "25px", justifyContent: "center" }}
      >
        <h2 style={{ fontSize: "40px" }}>Users</h2>
        <PeopleIcon sx={{ fontSize: 70 }} />
      </div>

      <Table style={{ width: "50%", position: "relative", left: "24%" }} striped bordered hover size="sm">
        <thead style={{ backgroundColor: "black", color: "white", textAlign: "center" }}>
          <tr>
            <th width="19%">Avatar</th>
            <th width="30%">First Name</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {users.map(user => (
            <CellUserStatistic key={user._id} user={user} />
          ))}
        </tbody>
      </Table>
      <hr />
      <div
        style={{ display: "flex", alignItems: "center", gap: "19px", marginBottom: "25px", justifyContent: "center" }}
      >
        <h2 style={{ fontSize: "40px" }}>Company</h2>
        <ApartmentIcon sx={{ fontSize: 70 }} />
      </div>

      <Table style={{ width: "50%", position: "relative", left: "24%" }} striped bordered hover size="sm">
        <thead style={{ backgroundColor: "black", color: "white", textAlign: "center" }}>
          <tr>
            <th width="19%">Avatar</th>
            <th width="30%">Company Name</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {company.map(oneCompany => (
            <CellCompanyStatistic key={oneCompany._id} company={oneCompany} />
          ))}
        </tbody>
      </Table>
      <hr />
      <div
        style={{ display: "flex", alignItems: "center", gap: "19px", marginBottom: "25px", justifyContent: "center" }}
      >
        <h2 style={{ fontSize: "40px" }}>Jobs</h2>
        <WorkIcon sx={{ fontSize: 70 }} />
      </div>

      <Table style={{ width: "50%", position: "relative", left: "24%" }} striped bordered hover size="sm">
        <thead style={{ backgroundColor: "black", color: "white", textAlign: "center" }}>
          <tr>
            <th width="30%">Company Name</th>
            <th width="30%">Job Title</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {jobs.map(job => (
            <CellJobStatistic key={job._id} job={job} />
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Home
