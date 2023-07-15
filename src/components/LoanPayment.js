import { useBank } from "../contexts/BankContext";

function LoanPayment() {
  const { dispatch, disabled } = useBank();
  function handleClick() {
    dispatch({
      type: "payLoan"
    });
  }

  return (
    <p>
      <button onClick={handleClick} disabled={disabled}>
        Pay loan
      </button>
    </p>
  );
}

export default LoanPayment;
