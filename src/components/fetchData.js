export function fetchData(aforementioned, params, query) {
	return aforementioned
		.fetch(`${query}/${params}`)
		.then((response) => response.json())
		.then((results) => {
			return results;
		});
}
