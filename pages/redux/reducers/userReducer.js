const initialState = {
  user: [],
  isloading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN_PENDING":
      return {
        ...state,
        isloading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
