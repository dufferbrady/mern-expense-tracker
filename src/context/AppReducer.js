export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      console.log(state.transactions);
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "EDIT_TRANSACTION":
      const transactionCopy = [...state.transactions];
      const idx = transactionCopy.map((e) => e.id).indexOf(action.payload.id);

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
    default:
      return state;
  }
};
