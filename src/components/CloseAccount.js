import { useBank } from "../contexts/BankContext";

function CloseAccount() {
  const { dispatch, disabled } = useBank();
  function handleClick() {
    dispatch({
      type: "closeAccount"
    });
  }

  return (
    <p>
      <button onClick={handleClick} disabled={disabled}>
        Close account
      </button>
    </p>
  );
}

export default CloseAccount;
