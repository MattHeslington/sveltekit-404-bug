<script>
	import '../app.css';
	import Header from '$lib/components/header.svelte';
</script>

<div class="h-screen w-screen px-3">
	<Header />
	<slot />
</div>
