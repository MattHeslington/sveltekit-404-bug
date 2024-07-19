export async function fetchData() {
	const response = await fetch('/api/test-call');

	if (!response.ok) {
		throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
	}

	const data = await response.json();
	return data;
}
