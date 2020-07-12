import React, { Component } from "react";
class Items extends Component {
	state = { name: "" }
	render() {
		let listData = []
		if (this.props.items) {
			listData = this.props.items.map((item, key) => {
				return (
					<tr key={key}>
						<th>{ item.id }</th>
						<th>{ item.name }</th>
					</tr>
				)
			})
		}
		return (
			<div>
				<table>
					<tbody>
						<th>ID</th>
						<th>Name</th>
						{listData}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Items;
