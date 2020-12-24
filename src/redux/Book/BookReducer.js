import {BUY_BOOK} from "./BookType";

const initialState = {
    numberOfBook: 15
}

const bookReducer = (state= initialState, action) => {
    switch (action.type) {
        case "BUY_BOOK" :
            return {
                ...state,
                numberOfBook: state.numberOfBook - action.payload
            }
        default: return state;
    }
}

export default bookReducer;
