import { useBank } from "../contexts/BankContext";

function OpenAccount() {
  const { dispatch, disabled } = useBank();

  function handleClick() {
    dispatch({
      type: "openAccount"
    });
  }

  return (
    <p>
      <button onClick={handleClick} disabled={!disabled}>
        Open Account
      </button>
    </p>
  );
}

export default OpenAccount;
