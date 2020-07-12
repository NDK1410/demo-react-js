import React, { Component } from "react";
import ItemContainer from "../containers/ItemPageContainer"

class ItemPage extends Component {
	render() {
		return (
			<div>
				<h1>Items Page</h1>
				<ItemContainer />
			</div>
		)
	}
}

export default ItemPage;
