<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { AudioWaveform } from 'lucide-svelte';
</script>

<section class="container grid grid-cols-2 gap-8 py-16 pt-40 text-foreground">
	<div class="flex flex-col justify-center">
		<div class="flex flex-col gap-y-2">
			<h3 class="text-lg font-medium text-primary">Benefits</h3>
			<h2 class="text-3xl font-bold">Smart HVAC Optimization</h2>
			<p class="text-pretty text-lg text-muted-foreground">
				Our web app leverages data analysis to enhance HVAC system efficiency,
				optimize energy use, and reduce maintenance costs through predictive insights. Empowering
				facility managers, engineers, and investors with a powerful decision-making tool.
			</p>
		</div>
	</div>
	<!-- grid 2x2 with benefits -->
	<div class="grid grid-cols-2 gap-4">
		<Card.Root class="border-2 border-border bg-muted/20">
			<Card.Header>
				<div class="py-2">
					<AudioWaveform size={32} class="text-primary" />
				</div>
				<Card.Title class="">Predictive Maintenance</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-base text-muted-foreground">
					Reduce downtime and repair costs by proactively identifying maintenance needs through 
					AI-driven anomaly detection and usage pattern analysis.
				</p>
			</Card.Content>
		</Card.Root>
		<Card.Root class="border-2 border-border bg-muted/20">
			<Card.Header>
				<div class="py-2">
					<AudioWaveform size={32} class="text-primary" />
				</div>
				<Card.Title class="">Energy Efficiency Optimization</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-base text-muted-foreground">
					Optimize energy consumption by providing actionable insights for improved system 
					performance, lowering operational costs, and enhancing ESG reporting.
				</p>
			</Card.Content>
		</Card.Root>
		<Card.Root class="border-2 border-border bg-muted/20">
			<Card.Header>
				<div class="py-2">
					<AudioWaveform size={32} class="text-primary" />
				</div>
				<Card.Title class="">Benchmarking</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-base text-muted-foreground">
					Compare HVAC systems based on efficiency, adaptability, and cost-effectiveness to 
					inform investment and design decisions.
				</p>
			</Card.Content>
		</Card.Root>
		<Card.Root class="border-2 border-border bg-muted/20">
			<Card.Header>
				<div class="py-2">
					<AudioWaveform size={32} class="text-primary" />
				</div>
				<Card.Title class="">Scalable Data Integration</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-base text-muted-foreground">
					Seamlessly integrates with the Belimo Cloud and third-party APIs, enabling deeper insights 
					and broader scalability for future upgrades.
				</p>
			</Card.Content>
		</Card.Root>
	</div>
</section>
