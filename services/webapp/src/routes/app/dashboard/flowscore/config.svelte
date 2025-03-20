<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Settings } from 'lucide-svelte';
	import { currentConfig, IDs } from '$lib/app/state.svelte';
	import * as Select from '$lib/components/ui/select/index.js';
	import { invalidateAll } from '$app/navigation';

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

				<Button variant="default" onclick={() => invalidateAll()} class="my-8">Apply</Button>
			</Sheet.Description>
		</Sheet.Header>
	</Sheet.Content>
</Sheet.Root>
