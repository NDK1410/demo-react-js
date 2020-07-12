import { put, takeEvery } from "redux-saga/effects"
import getItems from "../fetchAPI/getItems"
import * as types from "../contants"

function* getListItem(action) {
	try {
		const res = yield getItems();
		yield put({
			type: types.GET_ITEM_SUCCESS,
			payload: res
		})
	} catch (error) {
			yield put({
				type: types.GET_ITEM_FAILURE,
				payload: {
					errorMessage: error.message
				}
			})
	}
}

export const getItemSaga = [
	takeEvery(types.GET_ITEM_REQUEST, getListItem)
] 
