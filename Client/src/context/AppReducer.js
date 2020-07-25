export default (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case "EDIT_TRANSACTION":
      const transactionCopy = [...state.transactions];
      const idx = transactionCopy.map((el) => el.id).indexOf(action.payload.id);

      transactionCopy.splice(idx, 1, action.payload);

      return {
        ...state,
        transactions: transactionCopy,
        modal: false,
      };
    case "SHOW_MODAL":
      return {
        ...state,
        modal: action.payload1,
        editTransaction: state.transactions.filter(
          (transaction) => transaction.id === action.payload2
        ),
      };
    case "ERROR_TRANSACTIONS":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
