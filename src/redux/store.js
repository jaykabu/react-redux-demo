import {createStore} from 'redux';
import bookReducer from "./Book/BookReducer";

const store = createStore(bookReducer)

export default store;
