import { createStore , combineReducers , applyMiddleware } from "redux";
import { Provider } from "react-redux";
import  ReduxThunk  from "redux-thunk";

//our reducer that combined
import firstScreenReducer from "./reducers/firstScreenReducer";

const rootReducer = combineReducers({
    firstScreen : firstScreenReducer
  });
  
  const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export {Provider , store };