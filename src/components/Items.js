import React, { Component } from "react";

class Items extends Component {
	constructor() {
		super();
		this.state = {
			currentPage: 1,
			perPage: 3,
			inputAdd: "",
			objUpdate: {
				id: 0,
				name: ""
			},
			textSearch: ""
		}
	}

	chosePage = (event) => {
		this.setState({
			currentPage: Number(event.target.id)
		});
	}

	select = (event) => {
		this.setState({
			perPage: event.target.value
		})
	}

	render() {
		let listData = []
		const currentPage = this.state.currentPage;
		const perPage = this.state.perPage;
		const indexOfLastNews = currentPage * perPage;
		const indexOfFirstNews = indexOfLastNews - perPage;
		const currentTodos = listData.slice(indexOfFirstNews, indexOfLastNews);
		const renderTodos = currentTodos.map((item, key) => {
			return (
				<tr key={key}>
					<th>{item.id}</th>
					<th>{item.name}</th>
					<th>
						<button onClick={
							() => {
								this.props.deleteDispatch({ dataDelete: item.id, textSearch: this.props.textSearch })
							}
						}> Delete </button>
					</th>

					<th>
						<button onClick={(e) => { this.setState({ objUpdate: item }) }}> Select </button>
					</th>
				</tr>
			)
		});
		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(listData.length / perPage); i++) {
			pageNumbers.push(i);
		}
		return (
			<div>
				<div>

					<input value={this.state.textSearch} onChange={
						(e) => {
							this.setState({
								textSearch: e.target.value
							})
						}
					} />

					<button onClick={
						() => {
							this.props.searchDispatch(this.state.textSearch)
						}
					}>  Search </button>
				</div>

				<input onChange={
					(event) => { this.setState({ inputAdd: event.target.value }) }
				} />

				<button onClick={
					() => {
						this.props.addDispatch(this.state.inputAdd)
					}
				}> Add </button>


				<div>
					<input value={this.state.objUpdate.name} onChange={
						(event) => {
							this.setState({
								objUpdate: {
									...this.state.objUpdate,
									name: event.target.value
								}
							})
						}
					} />

					<button onClick={
						() => {
							this.props.updateDispatch({ dataUpdate: this.state.objUpdate, textSearch: this.props.textSearch })
						}
					}>  Edit </button>
				</div>

				<table>
					<tbody>
						<tr>
							<th>ID</th>
							<th>Name</th>
						</tr>
						{renderTodos}
					</tbody>
					<div className="news-per-page">
						<select defaultValue="0" onChange={this.select} >
							<option value="0" disabled>Get by</option>
							<option value="3">3</option>
							<option value="5">5</option>
							<option value="7">7</option>
						</select>
					</div>
				</table>

				<div className="pagination-custom">
					<ul id="page-numbers">
						{	
							pageNumbers.map(number => {
								if (this.state.currentPage === number) {
									return (
										<li key={number} id={number} className="active">
											{number}
										</li>
									)
								}
								else {
									return (
										<li key={number} id={number} onClick={this.chosePage} >
											{number}
										</li>
									)
								}
							})
						}
					</ul>
				</div>

			</div>
		);
	}
}

export default Items;
