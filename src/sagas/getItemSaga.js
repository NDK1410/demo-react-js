import { put, takeEvery } from "redux-saga/effects"
import getItems from "../fetchAPI/getItems"
import addItems from "../fetchAPI/addItems"
import deleteItems from "../fetchAPI/deleteItems"
import updateItems from "../fetchAPI/updateItems"
import searchItems from "../fetchAPI/searchItems"
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

function* updateItemActions(action) {
	try {
		yield updateItems(action.payload.dataUpdate);
		console.log(action.payload);
		yield put ({
			type: types.UPDATE_ITEM_SUCCESS
		})
		if(action.payload.textSearch !== ""){
			yield put ({
				type: types.SEARCH_ITEM_REQUEST,
				payload: action.payload.textSearch
			})
		}
	} catch (error) {
		yield put ({
			type: types.UPDATE_ITEM_FAILURE,
			payload: {
				errorMessage: error.message
			}
		})
	}
}

function* searchItemActions(action) {
	try {
		const listDataSearch = yield searchItems(action.payload);
		console.log(action.payload);
		yield put ({
			type: types.SEARCH_ITEM_SUCCESS,
			payload: { listData: listDataSearch, textSearch: action.payload}
		})
	} catch (error) {
		yield put ({
			type: types.SEARCH_ITEM_FAILURE,
			payload: {
				errorMessage: error.message
			}
		})
	}
}


export const getItemSaga = [
    takeEvery(types.GET_ITEM_REQUEST, getListItem),
	takeEvery(types.ADD_ITEM_REQUEST, addItemActions),
	takeEvery(types.DELETE_ITEM_REQUEST, deleteItemActions),
	takeEvery(types.UPDATE_ITEM_REQUEST, updateItemActions),
	takeEvery(types.SEARCH_ITEM_REQUEST, searchItemActions)
] 
