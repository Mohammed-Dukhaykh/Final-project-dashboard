import { Button, Modal, ListGroup, Table } from "react-bootstrap"

function CompanyViewModel(props) {
  const { company, show, setShow } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Company</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup.Item>
          <strong>Company Name:</strong> {company.companyName}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Avatar:</strong>{" "}
          <img src={company.avatar} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
        </ListGroup.Item>
        <hr />
        <ListGroup.Item>
          <h2>Company CEO :</h2>
          <hr />
          <img
            style={{ height: "80px", width: "80px" }}
            class="rounded-circle"
            src={company.CEO.avatar}
            data-holder-rendered="true"
          />
          <strong>
            {" "}
            {company.CEO.firstName} {company.CEO.lastName}
          </strong>
        </ListGroup.Item>
        <ListGroup.Item>
          <h2>Company HR :</h2>
          <hr />
          {company.HR.map(user => (
            <>
              <div style={{ marginBottom: "5px" }}>
                <img
                  style={{ height: "80px", width: "80px" }}
                  class="rounded-circle"
                  src={user.avatar}
                  data-holder-rendered="true"
                />

                <strong>
                  {" "}
                  {user.firstName} {user.lastName}
                </strong>
              </div>{" "}
              <br />
            </>
          ))}
        </ListGroup.Item>
        <ListGroup.Item>
          <h2>Company Users :</h2>
          <hr />
          {company.Users.map(user => (
            <>
              <div style={{ marginBottom: "5px" }}>
                <img
                  style={{ height: "80px", width: "80px" }}
                  class="rounded-circle"
                  src={user.avatar}
                  data-holder-rendered="true"
                />

                <strong>
                  {" "}
                  {user.firstName} {user.lastName}
                </strong>
              </div>{" "}
              <br />
            </>
          ))}
        </ListGroup.Item>
        <ListGroup.Item>
          <h2>Posts :</h2>
          <hr />
          {company.posts.map(post => (
            <img src={post.photo} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          ))}
        </ListGroup.Item>
        <ListGroup.Item>
          <h2>Company Jobs:</h2>
          <Table>
            <thead>
              <tr>
                <th style={{ width: "18%" }}>Title</th>
                <th style={{ width: "20%" }}>Description</th>
                <th style={{ width: "9%" }}>Users Apply</th>
              </tr>
            </thead>
            <tbody>
              {company.jobs.map(job => (
                <tr>
                  <td>{job.title}</td>
                  <td>{job.description}</td>
                  <td>{job.usersApply.length}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ListGroup.Item>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CompanyViewModel
