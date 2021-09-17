const initialState = {
  token: ''
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "MESSAGE_FROM_FATHER":
      return {
        token: [...state.token, messageWithFatherLove]
      };
    default:
      return state;
  }
}
