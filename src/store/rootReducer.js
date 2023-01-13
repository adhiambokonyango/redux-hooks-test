import { combineReducers } from "redux";
import reduceReducers from "reduce-reducers";
import { reducer as user_login } from "./user_management/user_login";

import { reducer as component_rendering } from "./component_rendering";
import { reducer as counter_item } from "./counter";



// =============================================================
// The rootReducer object aggregates our earlier reducers into a
// single reducer that holds our entire immutable application
// (theme) state.
// =============================================================

const rootReducer = reduceReducers(
  combineReducers({
    user_login,
      component_rendering,
      counter_item

  })
);

export default rootReducer;
