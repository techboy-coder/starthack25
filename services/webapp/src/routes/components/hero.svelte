<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<section
	class="container flex flex-col items-center justify-center space-y-4 pt-40 text-center text-foreground"
>
	<h1 class="text-6xl font-bold">
		Solve your problem by <br /> using our
		<span class="text-primary">solution</span>
	</h1>
	<p class="text-2xl text-muted-foreground">
		Have you ever wondered how to solve X by doing Y? Well, you're in the right place!
		<br />
		This next generation app will help you solve X by doing Y. It's that simple!
	</p>

	<div class="flex space-x-4 py-4">
		<Button href="/login" variant="default">Get started</Button>
		<Button href="/login" variant="outline">Get started</Button>
	</div>

	<img src="/appdemo.png" alt="Hero" class="rounded-lg py-4 ring-2 ring-primary/50" />
</section>
