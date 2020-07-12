import React, { Component } from "react"
import Items from "../components/Items"
import { connect } from "react-redux"
import * as actions from "../actions/ItemPageActions"

class ItemPageContainer extends Component {
	componentDidMount() {
		this.props.initLoad()
	}

	render() {
		return (
			<Items {...this.props} />
		)
	}
}

const mapStateToProps = (state) => {
	console.log("listItem", state.items.listItem)
	return {
		items: state.items.listItem
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		initLoad: () => {
			dispatch(actions.getListItem())
		},
		addDispatch: (data) => {
			console.log("day la add dispatch tai container: ", data)
			dispatch(actions.addItemActions(data))
		},
		deleteDispatch: (data) => {
			console.log("xoa du lieu: ", data)
			dispatch(actions.deleteItemAction(data))
		},
		updateDispatch: (data) => {
			console.log("update du lieu: ", data)
			dispatch(actions.updateItemAction(data))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)
