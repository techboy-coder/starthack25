<script lang="ts">
	import '../app.css';
	import Nav from './components/nav.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<meta name="theme-color" content="#000000" />
</svelte:head>

<div class="dark min-h-screen bg-background">
	<Nav></Nav>
	{@render children()}
</div>
