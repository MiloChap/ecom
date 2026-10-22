export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      if (state.find((item) => item.id === action.product.id)) {
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...state, { ...action.product, quantity: 1 }];

    case "INCREMENT":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item,
      );

    case "DECREMENT":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item,
      );

    case "REMOVE":
      return state.filter((item) => item.id !== action.id);

    case "CLEAR":
      return [];

    default:
      return state;
  }
}
