import { LOGIN, LOGOUT } from "./types";

const rootReducer = (state = { login: false }, action) => {
  switch (action.type) {
    case LOGIN: {
      return { ...state, login: true };
    }
    case LOGOUT: {
      return { ...state, login: false };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
