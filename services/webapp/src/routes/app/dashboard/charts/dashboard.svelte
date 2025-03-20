<script lang="ts">
	import type { DataPoints } from '$lib/app/types';
	let { data }: { data: DataPoints } = $props();
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import * as hdate from 'human-date';
	import { currentConfig } from '$lib/app/state.svelte';
	import Config from './config.svelte';
	import { columns } from '$lib/app/constants';
	import { downsample } from '$lib/app/funcs';

	let labels: string[] = data.map((d) => {
		const formattedDate = String(d.year_month_day).replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
		const date = new Date(formattedDate);
		String(d.year_month_day);
		return hdate.prettyPrint(date, { showTime: false });
	});

	// @ts-ignore
	let values: number[] = data.map((d) => Number(d[currentConfig.graphY]));

	let chart: Chart;

	onMount(() => {
		// @ts-ignore
		const ctx = document.getElementById('lineChart').getContext('2d');

		chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: downsample(labels, currentConfig.amount),
				datasets: [
					{
						label: currentConfig.graphY,
						data: downsample(values, currentConfig.amount),
						borderColor: '#f97316',
						tension: 0.4,
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
							display: true,
							text: 'Months',
							color: '#ffffff'
						},
						ticks: {
							autoSkip: true,
							maxTicksLimit: 5
						}
					},
					y: {
						title: {
							display: true,
							text: currentConfig.graphY,
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
	<div class="">
		<h2 class="font-mono text-xl font-bold">
			{columns.find((c) => c.name === currentConfig.graphY)?.description}
		</h2>
		<div class="">
			<span class="font-mono">Selected Device:</span>
			{currentConfig.chosenId}
		</div>
	</div>
	<Config></Config>
</div>
<canvas id="lineChart" class=" h-full w-full p-2 pt-4"></canvas>
