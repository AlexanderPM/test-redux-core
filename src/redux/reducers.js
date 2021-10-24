import { UPDATE_STATE_REDUX_CORE } from "./constants";

const initialState = {
    firstName: "---",
    lastName: "---",
    age: "---"
}


function basicReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_STATE_REDUX_CORE:
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
                age: action.age
            };
        default:
            return state;
    }

}

export default basicReducer;