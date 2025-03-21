<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<section
	class="container flex flex-col items-center justify-center space-y-4 pt-40 text-center text-foreground"
>
	<h1 class="text-6xl font-bold">A New Era of Energy Management</h1>
	<p class="text-2xl text-muted-foreground">
		Leverage our Dynamic Performance Dashboard and AI-powered Smart Alerts & Insights to optimize
		energy efficiency, reduce costs, and anticipate maintenance needs before failures happen.
	</p>

	<div class="flex space-x-4 py-4 font-bold">
		<Button href="/dashboard" variant="default">Get Started</Button>
		<Button href="/contact" variant="outline">Contact Us</Button>
	</div>

	<img
		src="/appdemo.png"
		alt="Dynamic Performance Dashboard"
		class="rounded-lg shadow-2xl shadow-primary/20 ring-4 ring-primary/50"
	/>
</section>
