const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "A":
      return { ...state };
    default:
      return state;
  }
};

export default authReducer;
