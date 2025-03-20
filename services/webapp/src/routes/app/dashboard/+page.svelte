<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import Dashboard from './dashboard.svelte';
</script>

<div class="container py-20 text-foreground">
	<h2 class="text-4xl font-bold">Dashboard</h2>
	<Tabs.Root value="graph" class="w-full py-6">
		<Tabs.List>
			<Tabs.Trigger value="table">Data</Tabs.Trigger>
			<Tabs.Trigger value="graph">Graph</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="table">We'll display the tables here...</Tabs.Content>
		<Tabs.Content value="graph">
			<div class="grid w-full grid-cols-2 gap-4 py-6">
				<Card.Root class="border-2 border-border bg-muted/20 p-6">
					<Dashboard></Dashboard>
				</Card.Root>
				<Card.Root class="border-2 border-border bg-muted/20 p-8">
					<h2 class="text-2xl font-bold">Other Info?</h2>
					<div class="">
						<Card.Content class="">
							<canvas id="lineChart" class=""></canvas>
						</Card.Content>
					</div>
				</Card.Root>
			</div>
		</Tabs.Content>
	</Tabs.Root>
</div>
