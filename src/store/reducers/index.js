import { combineReducers } from "redux";

import usersReducer from "./usersReducer";
import adminReducer from "./adminReducer";

const rootReducer = combineReducers({
  usersReducer: usersReducer,
  adminReducer: adminReducer,
});

export default rootReducer;
