function CellJobStatistic(props) {
  const { job } = props
  return (
    <>
      <tr>
        {" "}
        <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
          {job.owner.companyName}
        </td>
        <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{job.title}</td>
      </tr>
    </>
  )
}

export default CellJobStatistic
