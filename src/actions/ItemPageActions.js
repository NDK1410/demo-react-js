import * as types from "../contants"

export function getListItem(payload) {
	return {
		type: types.GET_ITEM_REQUEST,
		payload
	}
}
