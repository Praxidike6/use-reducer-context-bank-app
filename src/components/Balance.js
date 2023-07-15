import { useBank } from "../contexts/BankContext";

function Balance() {
  // use global context to get balance
  const { balance } = useBank();
  return <p>Balance: {balance}</p>;
}

export default Balance;
