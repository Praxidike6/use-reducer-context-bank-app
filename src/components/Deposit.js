import { useBank } from "../contexts/BankContext";

function Deposit() {
  const { dispatch, disabled } = useBank();
  function handleClick() {
    dispatch({
      type: "deposit"
    });
  }
  return (
    <p>
      <button onClick={handleClick} disabled={disabled}>
        Deposit 150
      </button>
    </p>
  );
}

export default Deposit;
