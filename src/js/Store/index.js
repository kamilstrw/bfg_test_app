import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import Questions from 'Store/Questions'

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const Reducers = combineReducers({
	Questions
});	

export default createStore(Reducers, enhancer);
