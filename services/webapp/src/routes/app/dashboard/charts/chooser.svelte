<script lang="ts">
	import Check from '@lucide/svelte/icons/check';
	import ChevronsUpDown from '@lucide/svelte/icons/chevrons-up-down';
	import { tick } from 'svelte';
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils.js';
	import { currentConfig } from '$lib/app/state.svelte';
	import { columns } from '$lib/app/constants';

	let open = $state(false);
	let value = $state('');
	let triggerRef = $state<HTMLButtonElement>(null!);

	// we want to only choose from "columns" which hava datatype number
	const numCols = columns.filter((col) => col.basetype === 'int' || col.basetype === 'real');

	const selectedValue = currentConfig.graphY;

	// We want to refocus the trigger button when the user selects
	// an item from the list so users can continue navigating the
	// rest of the form with the keyboard.
	function closeAndFocusTrigger() {
		open = false;
		tick().then(() => {
			triggerRef.focus();
		});
	}

	function customFilter(commandValue: string, search: string, commandKeywords?: string[]): number {
		return commandValue.includes(search) ? 1 : 0;
	}
</script>

<!-- Make popover where we choose from numCols -->
<!-- currentConfig.graphY is the binded value... -->

<Popover.Root bind:open>
	<Popover.Trigger bind:ref={triggerRef}>
		<Button variant="outline" class="w-full justify-between" role="combobox" aria-expanded={open}>
			{selectedValue || 'Select a column...'}
			<ChevronsUpDown class="opacity-50" />
		</Button>
	</Popover.Trigger>
	<Popover.Content class="p-0">
		<Command.Root>
			<Command.Input placeholder="Search column..." class="" />
			<Command.List>
				<Command.Empty>No column found.</Command.Empty>
				<Command.Group>
					{#each numCols as col}
						<Command.Item
							value={col.name}
							onSelect={() => {
								currentConfig.graphY = col.name;
								closeAndFocusTrigger();
							}}
						>
							<Check class={cn(selectedValue !== col.name && 'text-transparent')} />
							{col.description || col.name}
						</Command.Item>
					{/each}
				</Command.Group>
			</Command.List>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
