import * as types from "../actions/types";

const initialState = {
  admin: null,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ADMIN:
      return { ...state, admin: action.payload };

    default:
      return state;
  }
};

export default adminReducer;
