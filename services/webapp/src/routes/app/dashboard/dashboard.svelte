<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Settings } from 'lucide-svelte';

	let chart: Chart;

	onMount(() => {
		// @ts-ignore
		const ctx = document.getElementById('lineChart').getContext('2d');

		chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June'],
				datasets: [
					{
						label: 'Energy Cost',
						data: [10, 20, 15, 25, 30, 40],
						borderColor: '#7c3aed',
						tension: 0.4
					}
				]
			},
			options: {
				responsive: true,
				plugins: {
					legend: {
						display: false
					},
					tooltip: {
						mode: 'index',
						intersect: false
					}
				},
				scales: {
					x: {
						title: {
							display: true,
							text: 'Months',
							color: '#ffffff'
						}
					},
					y: {
						title: {
							display: true,
							text: 'Values',
							color: '#ffffff'
						}
					}
				}
			}
		});

		return () => {
			chart.destroy();
		};
	});
</script>

<div class="flex w-full items-center justify-between px-4 pb-2">
	<h2 class="font-mono text-xl font-bold">Energy Cost</h2>
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
				<Sheet.Description>Configuration...</Sheet.Description>
			</Sheet.Header>
		</Sheet.Content>
	</Sheet.Root>
</div>
<canvas id="lineChart" class=" h-full w-full p-2 pt-4"></canvas>
