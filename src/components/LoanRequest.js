import { useBank } from "../contexts/BankContext";

function LoanRequest() {
  const { dispatch, disabled } = useBank();
  function handleClick() {
    dispatch({
      type: "requestLoan"
    });
  }

  return (
    <p>
      <button onClick={handleClick} disabled={disabled}>
        Request a loan of 5000
      </button>
    </p>
  );
}

export default LoanRequest;
