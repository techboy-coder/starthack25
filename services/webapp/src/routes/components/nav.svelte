<script>
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import Separator from '$lib/components/ui/separator/separator.svelte';
</script>

<!-- <nav class="m-auto flex w-full max-w-screen-2xl items-center justify-between"> -->
<nav
	class="container sticky top-0 z-10 flex items-center justify-between bg-background/10 py-4 backdrop-blur-lg"
>
	<div class="flex items-center space-x-2">
		<a
			href="/"
			class="inline-block text-lg font-black text-foreground transition-colors hover:text-white"
		>
			<span class="text-primary">{'> '}</span>{'HEATFLOW'}
		</a>
	</div>

	<div class="absolute left-1/2 -translate-x-1/2 transform">
		<nav class="text-md flex w-full items-center space-x-8">
			<a
				href="/app/dashboard"
				class="font-medium text-muted-foreground transition-colors hover:text-foreground"
			>
				Dashboard
			</a>
			<a
				href="/insights"
				class="font-medium text-muted-foreground transition-colors hover:text-foreground"
			>
				Insights
			</a>
			<a
				href="/api/docs"
				class="font-medium text-muted-foreground transition-colors hover:text-foreground"
			>
				Documentation
			</a>
		</nav>
	</div>

	<nav class="flex items-center space-x-4 lg:space-x-6">
		<Input type="search" placeholder="Search..." class="h-9 md:w-60" />
		<Button href="/login">Login</Button>
	</nav>
</nav>

<Separator />
