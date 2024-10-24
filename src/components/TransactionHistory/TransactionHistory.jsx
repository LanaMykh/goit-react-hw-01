import transStyles from "./TransactionHistory.module.css"

const TransactionHistory = ({items}) => {
  return (
  <table className={transStyles.table}>
    <thead className={transStyles.title}>
      <tr>
        <th className={transStyles.titleCells}>Type</th>
        <th className={transStyles.titleCells}>Amount</th>
        <th className={transStyles.titleCells}>Currency</th>
      </tr>
    </thead>
  
    <tbody>
      {items.map((item) => {
        return <tr key={item.id} className={transStyles.transItem}>
            <td className={transStyles.rowCells}>{item.type}</td>
            <td className={transStyles.rowCells}>{item.amount}</td>
            <td className={transStyles.rowCells}>{item.currency}</td>
        </tr>  
      })}
    </tbody>
</table>
  )
}

export default TransactionHistory