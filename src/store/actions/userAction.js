import * as types from "../actions/types";

//create user
export const createUser = (newUser) => ({
  type: types.CREATE_USER,
  payload: { newUser },
});

//update user
export const updateUser = (updatedUser) => ({
  type: types.UPDATE_USER,
  payload: { updatedUser },
});

//delete user
export const deleteUser = (userId) => ({
  type: types.DELETE_USER,
  payload: { userId },
});
