<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<section
	class="container flex flex-col items-center justify-center space-y-4 pt-40 text-center text-foreground"
>
	<h1 class="text-6xl font-bold">
		ANALYZE COMPARE OPTIMIZE <br />
		<span class="text-primary">AI-Driven Analysis</span>
	</h1>
	<p class="text-2xl text-muted-foreground">
		Experience the future of HVAC performance monitoring with our cutting-edge
		<b>Dynamic Performance Dashboard</b> and <b>Smart Alerts & Insights</b> powered by Machine
		Learning.
		<br />
		Maximize efficiency, minimize costs, and predict maintenance needs before failures occur.
	</p>

	<div class="flex space-x-4 py-4">
		<Button href="/app/dashboard" variant="default">Try the Dashboard</Button>
		<Button href="/alerts" variant="outline">Explore Smart Alerts</Button>
	</div>

	<img
		src="/appdemo.png"
		alt="Dynamic Performance Dashboard"
		class="rounded-lg py-4 ring-2 ring-primary/50"
	/>
</section>
