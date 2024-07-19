<script>
	import { fetchData } from '$lib/utils/fetchData';

	let testData = null;

	async function fetchTestData() {
		try {
			testData = await fetchData();
			if (testData) {
				console.log('ALL CLIENT DATA', testData);
			} else {
				console.log('no client data');
			}
		} catch (error) {
			console.log('fetchData error', error);
		}
	}
</script>

<a href="/">back</a>
<h1>test data</h1>
<button on:click={fetchTestData} type="button" class="h-9 w-32 border border-gray-600">test</button>
{#if testData}
	<div>
		<h2>Data</h2>
		<pre>{JSON.stringify(testData, null, 2)}</pre>
	</div>
{/if}
