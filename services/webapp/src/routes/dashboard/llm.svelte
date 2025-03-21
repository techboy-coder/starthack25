<script lang="ts">
	import { ask, getData } from '$lib/app/api';
	import { columns } from '$lib/app/constants';
	import { downsample } from '$lib/app/funcs';
	import { currentConfig } from '$lib/app/state.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input/index.js';

	let query = '';
	let answer = '';

	let loading = false;

	async function submit() {
		loading = true;
		let dpoint = await getData(currentConfig.chosenId, currentConfig.limit, currentConfig.skip);

		// @ts-ignore
		let x: number[] = downsample(
			dpoint.map((d) => Number(d[currentConfig.graphX])),
			20
		);

		// @ts-ignore
		let y: string[] = downsample(
			dpoint.map((d) => String(d[currentConfig.graphY])),
			20
		);

		console.log('X: ', x);
		console.log('Y: ', y);
		console.log('Columns: ', currentConfig.graphY);

		// @ts-ignore
		let response = await ask(query, x, y, currentConfig.graphY);

		loading = false;
		answer = response.response;
	}
</script>

<Card.Root class="flex flex-col space-y-4 border-2 border-border bg-muted/20 p-6">
	<h2 class="text-lg font-semibold">Smart AI Agent</h2>
	<p class="text-muted-foreground">Ask a question about the current system.</p>
	<div class="flex w-full space-x-4">
		<Input bind:value={query} placeholder="Ask a question" />
		{#if loading}
			<Button disabled>Loading...</Button>
		{:else}
			<Button onclick={submit}>Submit Question</Button>
		{/if}
	</div>
	<p class="text-muted-foreground">
		{answer || ''}
	</p>
</Card.Root>
