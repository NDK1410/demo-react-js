import React, { Component } from "react";
class Items extends Component {
	constructor(){
		super();
		this.state = {
			inputAdd: "",
			objUpdate: {
				id: 0,
				name: ""
			}
		}
	}


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
				<input onChange={
					(event) => { this.setState({inputAdd: event.target.value})}
				}/>

				<button onClick={
					() => {
						this.props.addDispatch(this.state.inputAdd)
					}
				}> ADD </button>
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
