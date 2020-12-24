import {createStore , applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {composeWithDevTools} from "redux-devtools-extension";
import bookReducer from "./Book/BookReducer";

const store = createStore(bookReducer,composeWithDevTools(applyMiddleware(logger)));

export default store;
