import { useBank } from "../contexts/BankContext";

function Loan() {
  // use global context to get balance
  const { loan } = useBank();
  return <p>Balance: {loan}</p>;
}

export default Loan;
