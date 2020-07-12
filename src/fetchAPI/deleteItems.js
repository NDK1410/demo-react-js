export default function callAPI(id){

	return new Promise ((resolve, reject) => {
		const url = `http://localhost:3001/items/${id}`
		fetch(url, {
			method: "DELETE"
		})
		.then((response) => response.json())
		.then((res) => {
			console.log('resss', res)
			resolve(res);
		})
		.catch((error) => {
			reject(error);
		});
	});
}
