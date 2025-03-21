<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();

	import * as Table from '$lib/components/ui/table/index.js';
	import * as Card from '$lib/components/ui/card';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import Dashboard from './charts/dashboard.svelte';
	import Flowscore from './flowscore/flowscore.svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import Llm from './llm.svelte';
</script>

<div class="container pt-20 text-foreground">
	<h2 class="text-4xl font-bold">Dynamic Performance Dashboard</h2>
	<p class="pt-4 text-lg text-muted-foreground">
		Welcome to the Dynamic Performance Dashboard. Here you can view the performance of your model in
		real-time.
	</p>
	<Tabs.Root value="graph" class="w-full py-6">
		<Tabs.List>
			<Tabs.Trigger value="graph">Graph</Tabs.Trigger>
			<Tabs.Trigger value="score">Score</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="graph">
			<div class="grid w-full grid-cols-1 gap-8 py-6">
				<Card.Root class="border-2 border-border bg-muted/20 p-6">
					{#await data.dpoint}
						Loading...
					{:then val}
						<Dashboard data={val}></Dashboard>
					{/await}
				</Card.Root>
				<div class="grid grid-cols-2 gap-8">
					<Card.Root class="border-2 border-border bg-muted/20 p-6 text-lg">
						<Table.Root>
							<Table.Caption class="font-bold text-foreground">Performance Scoreboard</Table.Caption
							>
							<Table.Header>
								<Table.Row>
									<Table.Head class="w-[100px]">Status</Table.Head>
									<Table.Head>Device</Table.Head>
									<Table.Head>Description</Table.Head>
									<Table.Head class="text-right">Cost</Table.Head>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								<Table.Row>
									<Table.Cell class="font-medium">
										<Badge variant="outline" class="bg-green-600">Engaged</Badge>
									</Table.Cell>
									<Table.Cell>Cooling Tower</Table.Cell>
									<Table.Cell>Energy savings you can see</Table.Cell>
									<Table.Cell class="text-nowrap text-right"><span>1324 CHF</span></Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell class="font-medium">
										<Badge variant="outline" class="bg-red-600">Critical</Badge>
									</Table.Cell>
									<Table.Cell>Fire & smoke solutions</Table.Cell>
									<Table.Cell>Technology that saves lives</Table.Cell>
									<Table.Cell class="text-nowrap text-right"><span>565 CHF</span></Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell class="font-medium">
										<Badge variant="outline" class="bg-green-600">Engaged</Badge>
									</Table.Cell>
									<Table.Cell>Heat Plant</Table.Cell>
									<Table.Cell>Heating system for maximum efficiency</Table.Cell>
									<Table.Cell class="text-nowrap text-right"><span>795 CHF</span></Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell class="font-medium">
										<Badge variant="outline" class="bg-primary">Engaged</Badge>
									</Table.Cell>
									<Table.Cell>Fire & smoke solutions</Table.Cell>
									<Table.Cell>Technology that saves lives</Table.Cell>
									<Table.Cell class="text-nowrap text-right"><span>565 CHF</span></Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell class="font-medium">
										<Badge variant="outline" class="bg-yellow-600">Maintenance</Badge>
									</Table.Cell>
									<Table.Cell>Solar Panel Array</Table.Cell>
									<Table.Cell>Harnessing the power of the sun</Table.Cell>
									<Table.Cell class="text-nowrap text-right"><span>2150 CHF</span></Table.Cell>
								</Table.Row>
							</Table.Body>
						</Table.Root>
					</Card.Root>
					<Llm></Llm>
				</div>
			</div>
		</Tabs.Content>
		<Tabs.Content value="score">
			<div class="grid w-full grid-cols-1 gap-4 py-6">
				<Card.Root class="border-2 border-border bg-muted/20 p-6">
					<Flowscore></Flowscore>
				</Card.Root>
			</div>
		</Tabs.Content>
	</Tabs.Root>
</div>
