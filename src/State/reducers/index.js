import {combineReducers} from "redux";
import quantityChanger from "./quantityChanger"

const reducers = combineReducers({
    quantity: quantityChanger
})

export default reducers