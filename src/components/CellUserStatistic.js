function CellUserStatistic(props) {
  const { user } = props
  return (
    <>
      <tr>
        <td>
          {" "}
          <img style={{height:"100px" , width:"100px"}} class="rounded-circle"  src={user.avatar} data-holder-rendered="true" />
        </td>
        <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
          {user.firstName} {user.lastName}
        </td>
      </tr>
    </>
  )
}

export default CellUserStatistic
