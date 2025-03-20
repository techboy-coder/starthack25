<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';
</script>

<section class="container py-16 pt-40 text-foreground">
	<div class="flex flex-col items-center justify-center gap-y-2 text-center">
		<h3 class="text-lg font-medium text-primary">FAQs</h3>
		<h2 class="text-3xl font-bold">Common Questions</h2>
	</div>
	<div class="flex flex-col items-center py-8">
		<Accordion.Root type="single" class="w-full max-w-[50%]">
			<Accordion.Item value="item-1">
				<Accordion.Trigger>How does the Dynamic Performance Dashboard work?</Accordion.Trigger>
				<Accordion.Content>
					Our dashboard provides real-time monitoring and benchmarking of HVAC systems using data from the Belimo Cloud. 
					It uses advanced analytics to provide comprehensive insights into energy efficiency, maintenance status, and system performance.
				</Accordion.Content>
			</Accordion.Item>
			
			<Accordion.Item value="item-2">
				<Accordion.Trigger>What are Smart Alerts & Insights?</Accordion.Trigger>
				<Accordion.Content>
					Smart Alerts are powered by Machine Learning algorithms that detect anomalies and predict maintenance needs before failures occur. 
					Insights include proactive recommendations to enhance efficiency and reduce operational costs.
				</Accordion.Content>
			</Accordion.Item>
			
			<Accordion.Item value="item-3">
				<Accordion.Trigger>How is Machine Learning used in your app?</Accordion.Trigger>
				<Accordion.Content>
					Machine Learning models are trained to identify abnormal patterns in HVAC performance data, providing early warnings for potential issues. 
					These models also enhance benchmarking accuracy by continuously learning from new data inputs.
				</Accordion.Content>
			</Accordion.Item>
			
			<Accordion.Item value="item-4">
				<Accordion.Trigger>Can I integrate this app with my existing systems?</Accordion.Trigger>
				<Accordion.Content>
					Yes! Our platform is designed to be compatible with various APIs, including the Belimo Cloud API, allowing seamless integration with existing infrastructure.
				</Accordion.Content>
			</Accordion.Item>
			
			<div class="py-4">
				Still have questions? <a href="#" class="underline">Contact us</a>
			</div>
		</Accordion.Root>
	</div>
</section>
