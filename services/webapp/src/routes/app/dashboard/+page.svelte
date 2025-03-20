<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	import * as Card from '$lib/components/ui/card';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import Dashboard from './charts/dashboard.svelte';
	import Table from './table/table.svelte';
	import Flowscore from './flowscore/flowscore.svelte';
</script>

<div class="container py-20 text-foreground">
	<h2 class="text-4xl font-bold">Dashboard</h2>
	<Tabs.Root value="graph" class="w-full py-6">
		<Tabs.List>
			<Tabs.Trigger value="graph">Graph</Tabs.Trigger>
			<Tabs.Trigger value="score">Score</Tabs.Trigger>
			<Tabs.Trigger value="table">Data</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="graph">
			<div class="grid w-full grid-cols-1 gap-4 py-6">
				<Card.Root class="border-2 border-border bg-muted/20 p-6">
					{#await data.dpoint}
						Loading...
					{:then val}
						<Dashboard data={val}></Dashboard>
					{/await}
				</Card.Root>
			</div>
		</Tabs.Content>
		<!-- <Tabs.Content value="score">
			<div class="grid w-full grid-cols-1 gap-4 py-6">
				<Card.Root class="border-2 border-border bg-muted/20 p-6">
					<Flowscore data={data.fscore}></Flowscore>
				</Card.Root>
			</div>
		</Tabs.Content> -->
		<Tabs.Content value="table">
			{#await data.dpoint}
				Loading...
			{:then val}
				<Table data={val}></Table>
			{/await}
		</Tabs.Content>
	</Tabs.Root>
</div>
