import usersList from "../../usersList";

const initialState = {
  users: usersList,
  loading: true,
};
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "FETCH_USER":
    //   state.loading = false;
    //   return {
    //     ...state,
    //     users: action.payload.users,
    //   };
    case "CREATE_USER":
      return {
        ...state,
        users: [...state.users, action.payload.newUser],
      };
    case "UPDATE_USER":
      const index = state.users.findIndex(
        (user) => user.id === action.payload.updatedUser.id
      );
      state.users[index] = action.payload.updatedUser;
      return state;
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.userId),
      };
    default:
      return state;
  }
};

export default usersReducer;
