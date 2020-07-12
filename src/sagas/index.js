import { all } from "redux-saga/effects"
import { getItemSaga } from "./getItemSaga"
function* rootSaga() {
	yield all([
		...getItemSaga
	]);
}
export default rootSaga;
