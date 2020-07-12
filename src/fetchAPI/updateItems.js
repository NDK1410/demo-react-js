export default function callAPI(data){

	return new Promise ((resolve, reject) => {
		const url = `http://localhost:3001/items/${data.id}`
		fetch(url, {
			method: "PUT",
			headers: {"Content-Type": "Application/json"},
			body: JSON.stringify({name: data.name})
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
