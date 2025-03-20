<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import { currentConfig, fscoredata } from '$lib/app/state.svelte';
	import Config from './config_id.svelte';
	import { downsample } from '$lib/app/funcs';

	import type { FlowScore } from '$lib/app/types';
	let data = fscoredata!;

	let labels: number[] = data?.map((d) => d.AbsFlow_Fb_m3s);
	let values: number[] = data?.map((d) => d.score);

	let chart: Chart;
	onMount(() => {
		// @ts-ignore
		const ctx = document.getElementById('lineChart').getContext('2d');

		chart = new Chart(ctx, {
			type: 'scatter',
			data: {
				labels: downsample(labels, currentConfig.amount),
				datasets: [
					{
						label: currentConfig.graphY,
						data: downsample(values, currentConfig.amount),
						borderColor: '#f97316',
						tension: 0,
						backgroundColor: '#f9731622',
						fill: true
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
							display: false
						}
					},
					y: {
						title: {
							display: false
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
	<div class="">
		<h2 class="font-mono text-xl font-bold">FlowScore</h2>
		<div class="">
			<span class="font-mono">Selected Device:</span>
			{currentConfig.chosenId}
		</div>
	</div>
	<Config></Config>
</div>
<canvas id="lineChart" class=" h-full w-full p-2 pt-4"></canvas>
