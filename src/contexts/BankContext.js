import { createContext, useContext, useReducer } from "react";

const BankContext = createContext();

const initialState = {
  status: "start",
  balance: 0,
  loan: 0,
  disabled: true
};

//state transitions: openAccount, deposit, withdraw, requestLoan, payLoan, closeAccount
function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return {
        ...state,

        balance: 500,
        disabled: false
      };
    case "deposit":
      return { ...state, balance: state.balance + 150 };
    case "withdraw":
      return { ...state, balance: state.balance - 50 };
    case "requestLoan":
      return {
        ...state,
        loan: state.loan === 0 ? state.loan + 5000 : state.loan,
        balance: state.loan === 0 ? state.balance + 5000 : state.balance
      };
    case "payLoan":
      if (state.balance > state.loan) {
        return { ...state, loan: 0, balance: state.balance - 5000 };
      } else {
        return { ...state, loan: 0 };
      }
    case "closeAccount":
      const canClose = state.loan === 0 && state.balance === 0;
      if (canClose) {
        console.log("can close");
        return { ...initialState };
      } else {
        console.log("can't close");
        return { ...state };
      }

    default:
      throw new Error("Action is unknown");
  }
}

function BankProvider({ children }) {
  const [{ balance, loan, disabled }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <BankContext.Provider
      value={{
        balance,
        loan,
        disabled,
        dispatch
      }}
    >
      {children}
    </BankContext.Provider>
  );
}
function useBank() {
  const context = useContext(BankContext);
  if (context === undefined)
    throw new Error("BankContext was used outside of the BankProvider");
  return context;
}

export { BankProvider, useBank };
