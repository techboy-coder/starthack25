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
				<Accordion.Trigger>Is it accessible?</Accordion.Trigger>
				<Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-2">
				<Accordion.Trigger>Is it styled?</Accordion.Trigger>
				<Accordion.Content>
					Yes. It comes with default styles that matches the other components' aesthetic.
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-3">
				<Accordion.Trigger>Is it animated?</Accordion.Trigger>
				<Accordion.Content>
					Yes. It's animated by default, but you can disable it if you prefer.
				</Accordion.Content>
			</Accordion.Item>
			<div class="py-4">
				Still have questions? <a href="#" class="underline">Contact us</a>
			</div>
		</Accordion.Root>
	</div>
</section>
