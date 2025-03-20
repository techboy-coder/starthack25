<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Settings } from 'lucide-svelte';
	import { currentConfig, IDs } from '$lib/app/state.svelte';
	import * as Select from '$lib/components/ui/select/index.js';
	import { invalidateAll } from '$app/navigation';
	import { Input } from '$lib/components/ui/input/index.js';
	import Chooser from './chooser.svelte';

	let ids = IDs;
</script>

<Sheet.Root>
	<Sheet.Trigger>
		<Button variant="outline">
			<Settings></Settings>
			Configure
		</Button>
	</Sheet.Trigger>
	<Sheet.Content class="dark">
		<Sheet.Header>
			<Sheet.Title>Configure</Sheet.Title>
			<Sheet.Description class="space-y-8 py-4">
				<!-- Choose ID -->
				<div class="">
					<h3 class="py-2 font-mono text-lg font-bold">Choose ID</h3>
					<Select.Root type="single" bind:value={currentConfig.chosenId}>
						<Select.Trigger class="">{currentConfig.chosenId || 'Select ID...'}</Select.Trigger>
						<Select.Content>
							{#each ids as id}
								<Select.Item value={id}>{id}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>

				<div class="">
					<!-- Choose Limit -->
					<h3 class="py-2 font-mono text-lg font-bold">Choose Limit</h3>

					<div class="flex w-full max-w-sm flex-col gap-1.5">
						<Input type="number" id="limit" placeholder="Limit" bind:value={currentConfig.limit} />
						<p class="text-sm text-muted-foreground">
							The larger the limit, the longer the data takes to load
						</p>
					</div>
				</div>
				<!-- Choose Int Column -->
				<div class="w-full">
					<!-- Choose Limit -->
					<h3 class="py-2 font-mono text-lg font-bold">Choose Limit</h3>
					<Chooser></Chooser>
				</div>

				<!-- Choose Int Column -->
				<div class="">
					<!-- Choose Limit -->
					<h3 class="py-2 font-mono text-lg font-bold">Downsampling</h3>

					<div class="flex w-full max-w-sm flex-col gap-1.5">
						<Input
							type="number"
							id="datapoints"
							placeholder="Datapoints"
							bind:value={currentConfig.amount}
						/>
						<p class="text-sm text-muted-foreground">
							Choose the amount of data points to display using downsampling
						</p>
					</div>
				</div>

				<Button variant="default" onclick={() => invalidateAll()} class="my-8">Apply</Button>
			</Sheet.Description>
		</Sheet.Header>
	</Sheet.Content>
</Sheet.Root>
