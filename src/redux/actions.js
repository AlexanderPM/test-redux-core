import { UPDATE_STATE_REDUX_CORE } from "./constants";

function updateStoreReduxCore(firstName, lastName, age) {
    return {
        type: UPDATE_STATE_REDUX_CORE,
        firstName: firstName,
        lastName: lastName,
        age: age
    }
}
export default updateStoreReduxCore;