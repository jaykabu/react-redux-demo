import {BUY_BOOK} from "./BookType";

const initialState = {
    numberOfBook: 10
}

const bookReducer = (state= initialState, action) => {
    switch (action.type) {
        case "BUY_BOOK" :
            return {
                ...state,
                numberOfBook: state.numberOfBook - 1
            }
        default: return state;
    }
}

export default bookReducer;
