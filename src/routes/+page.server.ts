export async function load({ fetch, locals }) {
	const response = await fetch('https://www.example.com/')
	const json = await response.json()
	console.log(json)

	return {
		response: json.response,
		locals,
	}
}