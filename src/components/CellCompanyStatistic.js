function CellCompanyStatistic(props) {
    const {company} = props
  return (
    <>
      
        <tr>
          <td>
            {" "}
            <img style={{height:"80px" , width:"80px"}} class="rounded-circle" src={company.avatar} data-holder-rendered="true" />
          </td>
          <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
            {company.companyName}
          </td>
        </tr>
      
    </>
  )
}

export default CellCompanyStatistic
