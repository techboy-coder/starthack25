<script lang="ts">
	import '../app.css';
	import Nav from './components/nav.svelte';
	let { children } = $props();
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import Footer from './components/footer.svelte';
</script>

<svelte:head>
	<meta name="theme-color" content="#000000" />
</svelte:head>

<Toaster />

<div class="dark min-h-screen bg-background">
	<Nav></Nav>
	{@render children()}
	<Footer />
</div>
