import { put, takeEvery } from "redux-saga/effects"
import getItems from "../fetchAPI/getItems"
import addItems from "../fetchAPI/addItems"
import deleteItems from "../fetchAPI/deleteItems"
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

function* addItemActions(action) {
	try { 
		yield addItems(action.payload);
		yield put({
			type: types.ADD_ITEM_SUCCESS
		})
		yield put({
			type: types.GET_ITEM_REQUEST
		})
	} catch (error) {
		yield put({
			type: types.ADD_ITEM_FAILURE,
			payload: {
				errorMessage: error.message
			}
		})
	}
}

function* deleteItemActions(action) {
	try {
		yield deleteItems(action.payload);
		yield put ({
			type: types.DELETE_ITEM_SUCCESS
		})
		yield put ({
			type: types.GET_ITEM_REQUEST
		})
	} catch (error) {
		yield put ({
			type: types.DELETE_ITEM_FAILURE,
			payload: {
				errorMessage: error.message
			}
		})
	}
}


export const getItemSaga = [
    takeEvery(types.GET_ITEM_REQUEST, getListItem),
	takeEvery(types.ADD_ITEM_REQUEST, addItemActions),
	takeEvery(types.DELETE_ITEM_REQUEST, deleteItemActions)
] 
