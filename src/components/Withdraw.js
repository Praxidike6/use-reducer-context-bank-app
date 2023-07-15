import { useBank } from "../contexts/BankContext";

function Withdraw() {
  const { dispatch, disabled } = useBank();
  function handleClick() {
    dispatch({
      type: "withdraw"
    });
  }

  return (
    <>
      <p>
        <button onClick={handleClick} disabled={disabled}>
          Withdraw 50 <span></span>
        </button>
      </p>
    </>
  );
}

export default Withdraw;
