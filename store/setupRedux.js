import { createStore , combineReducers , applyMiddleware } from "redux";
import { Provider } from "react-redux";
import  ReduxThunk  from "redux-thunk";

//our reducer that combined
import firstScreenReducer from "./reducers/firstScreenReducer";
import helperReducer from "./reducers/helpersReducer";
const rootReducer = combineReducers({
    firstScreen : firstScreenReducer,
    helper:helperReducer,
  });
  
  const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export {Provider , store };