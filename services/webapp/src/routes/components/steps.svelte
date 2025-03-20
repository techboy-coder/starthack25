<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/';
</script>

<section class="container py-16 pt-40 text-foreground">
	<div class="flex flex-col items-center justify-center gap-y-2 text-center">
		<h3 class="text-lg font-medium text-primary">How It Works</h3>
		<h2 class="text-3xl font-bold">Step-by-Step Process</h2>
	</div>
	<div class="mx-auto grid max-w-6xl grid-cols-2 gap-8 py-8">
		<div class="space-y-1 py-4">
			<Badge variant="default" class="my-2 inline-block">Data Collection</Badge>
			<h3 class="text-xl font-bold">Gather Real-Time Performance Data</h3>
			<p class="text-pretty text-muted-foreground">
				Continuously collect HVAC system data via the Belimo Cloud, including energy consumption, temperature control, and operational efficiency.
			</p>
		</div>
		
		<div class="space-y-1 py-4">
			<Badge variant="default" class="my-2 inline-block">Data Processing</Badge>
			<h3 class="text-xl font-bold">Process & Analyze Collected Data</h3>
			<p class="text-pretty text-muted-foreground">
				Utilize Apache Spark and Delta Sharing to process large-scale time series data for meaningful insights and efficiency benchmarking.
			</p>
		</div>
		
		<div class="space-y-1 py-4">
			<Badge variant="default" class="my-2 inline-block">Machine Learning</Badge>
			<h3 class="text-xl font-bold">Identify Patterns & Predict Failures</h3>
			<p class="text-pretty text-muted-foreground">
				Apply advanced ML algorithms to detect anomalies, predict maintenance needs, and enhance performance accuracy over time.
			</p>
		</div>
		
		<div class="space-y-1 py-4">
			<Badge variant="default" class="my-2 inline-block">Dynamic Dashboard</Badge>
			<h3 class="text-xl font-bold">Visualize Performance Metrics</h3>
			<p class="text-pretty text-muted-foreground">
				Access a user-friendly dashboard displaying real-time performance metrics, predictive alerts, and suggested optimizations.
			</p>
		</div>
		
		<div class="space-y-1 py-4">
			<Badge variant="default" class="my-2 inline-block">Smart Alerts</Badge>
			<h3 class="text-xl font-bold">Receive Proactive Notifications</h3>
			<p class="text-pretty text-muted-foreground">
				Get notified of potential issues before they become critical, ensuring smooth and efficient operation of HVAC systems.
			</p>
		</div>
		
		<div class="space-y-1 py-4">
			<Badge variant="default" class="my-2 inline-block">Continuous Improvement</Badge>
			<h3 class="text-xl font-bold">Refine & Scale</h3>
			<p class="text-pretty text-muted-foreground">
				Leverage collected data to enhance ML models, improve efficiency scores, and expand integrations with third-party systems.
			</p>
		</div>
	</div>
</section>
