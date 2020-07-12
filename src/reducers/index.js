import { combineReducers } from "redux"
import ItemPageReducer from "./ItemPageReducer"
export default combineReducers({
	items: ItemPageReducer
})
