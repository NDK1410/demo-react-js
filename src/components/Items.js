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
						<th>
							<button onClick={
								() => {
									this.props.deleteDispatch(item.id)
								}
							}> Delete </button>
						</th>

						<th>
							<button onClick={(e) => {this.setState({objUpdate : item})}}> Select </button>
						</th>
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

<div>
					<input value={this.state.objUpdate.name} onChange={
						(event) => { this.setState({objUpdate:{
							...this.state.objUpdate,
							name: event.target.value
						} })}
					}/>

					<button onClick={
						() => {
							this.props.updateDispatch(this.state.objUpdate)
						}
					}>  Edit </button>
				</div>

				<table>
					<tbody>
						<tr>
						   <th>ID</th>
						   <th>Name</th>
						</tr>
						{listData}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Items;
