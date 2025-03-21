<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();

	import * as Card from '$lib/components/ui/card';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { mockHVACData, type HVACData } from './data';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { toast } from 'svelte-sonner';
	import Msgform from './msgform.svelte';

	function getStatusBadgeClass(status: HVACData['status']) {
		switch (status) {
			case 'Todo':
				return 'bg-primary text-white';
			case 'WIP':
				return 'bg-yellow-600 text-white';
			case 'Done':
				return 'bg-green-500 text-white';
			case 'Review':
				return 'bg-purple-500 text-white';
			default:
				return 'bg-gray-500 text-white'; // Default case for unexpected values
		}
	}

	// Helper function for priority badge color
	function getPriorityBadgeClass(priority: HVACData['priority']) {
		switch (priority) {
			case 'Low':
				return 'bg-green-600 text-white'; // Less intense green
			case 'Medium':
				return 'bg-yellow-600 text-white';
			case 'High':
				return 'bg-red-600 text-white';
			case 'Critical':
				return 'bg-red-800 text-white'; // Darker red for critical
			default:
				return 'bg-gray-600 text-white';
		}
	}
</script>

<div class="container pt-20 text-foreground">
	<h2 class="text-4xl font-bold">Smart Insights</h2>
	<p class="pt-4 text-lg text-muted-foreground">
		Stay informed with real-time alerts and actionable insights to optimize your model’s performance
		instantly.
	</p>
	<div class="grid w-full grid-cols-1 gap-4 py-8">
		<Card.Root class="border-2 border-border bg-muted/20 p-6">
			<Table.Root>
				<Table.Caption>A list of your recent notifications and actionable insights</Table.Caption>
				<Table.Header>
					<Table.Row>
						<Table.Head class="w-[150px]">ID</Table.Head>
						<Table.Head class="w-[350px]">Title</Table.Head>
						<Table.Head class="w-[700px]">Description</Table.Head>
						<Table.Head>Status</Table.Head>
						<Table.Head class="">Priority</Table.Head>
						<Table.Head class="text-right">Details</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each mockHVACData as item (item.id)}
						<Table.Row>
							<Table.Cell class="font-medium">{item.id}</Table.Cell>
							<Table.Cell>
								<Badge variant="secondary" class="mr-2">{item.type}</Badge>
								{item.shortDescription}
							</Table.Cell>
							<Table.Cell>{item.details}</Table.Cell>
							<Table.Cell>
								<Badge variant="outline" class={getStatusBadgeClass(item.status)}>
									{item.status}
								</Badge>
							</Table.Cell>
							<Table.Cell class="text-right">
								<Badge variant="outline" class={getPriorityBadgeClass(item.priority)}>
									{item.priority}
								</Badge>
							</Table.Cell>
							<Table.Cell>
								<Sheet.Root>
									<Sheet.Trigger>
										<Button variant="outline" class="border-2 border-muted bg-muted/35" size="sm"
											>Details</Button
										>
									</Sheet.Trigger>
									<Sheet.Content class=" dark">
										<Sheet.Header class=" h-full">
											<Sheet.Title>
												{item.type} - {item.shortDescription}
											</Sheet.Title>
											<Sheet.Description class=" flex h-full flex-col items-start justify-between">
												<div class="">
													<div class="py-4">
														<h4 class="text-base font-medium text-primary">Details</h4>
														<p class="">
															{item.details}
														</p>
													</div>
													<div class="py-4">
														<h4 class="text-base font-medium text-primary">Description</h4>
														<p class="">
															{item.longDescription}
														</p>
													</div>
													<div class="flex flex-col py-4">
														<h4 class="text-base font-medium text-primary">Have a question?</h4>
														<p class="pb-4">
															If you have any questions, please reach out to our support team. You
															can add a comment below to get in touch with us.
														</p>
														<Msgform></Msgform>
													</div>
												</div>
												<Alert.Root class="bg-muted/30 text-muted-foreground">
													<Alert.Title class="pb-2 font-bold text-foreground"
														>Priority: <Badge
															variant="outline"
															class={getPriorityBadgeClass(item.priority)}
														>
															{item.priority}
														</Badge>
													</Alert.Title>
													<Alert.Description>
														{item.cta}
													</Alert.Description>
												</Alert.Root>
											</Sheet.Description>
										</Sheet.Header>
									</Sheet.Content>
								</Sheet.Root>
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</Card.Root>
	</div>
</div>
