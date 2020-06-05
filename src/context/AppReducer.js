// AppReducer: how we speficy application state changes in response to certain actions to our store/context

export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      // REDUCER is way to change state and send it down to component
      // done by creating a new state and sending that down
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        // SPREAD takes out all values from array and puts them (below)
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
