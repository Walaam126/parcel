import * as types from "../actions/types";

// SIGN IN
export const signin = (adminData, history) => {
  history.replace("/home");
  return { type: types.SET_ADMIN, payload: adminData };
};

// SIGN OUT
export const signout = () => {
  return { type: types.SET_ADMIN, payload: null };
};
