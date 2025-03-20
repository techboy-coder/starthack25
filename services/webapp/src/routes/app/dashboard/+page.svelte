<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	import * as Card from '$lib/components/ui/card';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import Dashboard from './dashboard.svelte';
</script>

<div class="text-foreground container py-20">
	<h2 class="text-4xl font-bold">Dashboard</h2>
	<Tabs.Root value="graph" class="w-full py-6">
		<Tabs.List>
			<Tabs.Trigger value="table">Data</Tabs.Trigger>
			<Tabs.Trigger value="graph">Graph</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="table">We'll display the tables here...</Tabs.Content>
		<Tabs.Content value="graph">
			<div class="grid w-full grid-cols-1 gap-4 py-6">
				<Card.Root class="border-border bg-muted/20 border-2 p-6">
					{#await data.data}
						Loading...
					{:then val}
						<Dashboard data={val}></Dashboard>
					{/await}
				</Card.Root>
			</div>
		</Tabs.Content>
	</Tabs.Root>
</div>
