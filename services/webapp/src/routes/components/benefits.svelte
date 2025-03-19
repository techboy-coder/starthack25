<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { AudioWaveform } from 'lucide-svelte';
</script>

<section class="container grid grid-cols-2 gap-8 py-16 pt-40 text-foreground">
	<div class="flex flex-col justify-center">
		<div class="flex flex-col gap-y-2">
			<h3 class="text-lg font-medium text-primary">Benefits</h3>
			<h2 class="text-3xl font-bold">Your Shortcut to Success</h2>
			<p class="text-pretty text-lg text-muted-foreground">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officia at sint nostrum,
				cumque dolorum deleniti perspiciatis sapiente et molestias! Quia voluptatibus exercitationem
				aliquam, incidunt ut nesciunt quaerat officiis repellendus?
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
				<Card.Title class="">Benefit 1</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-base text-muted-foreground">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus
					consectetur dolores.
				</p>
			</Card.Content>
		</Card.Root>
		<Card.Root class="border-2 border-border bg-muted/20">
			<Card.Header>
				<div class="py-2">
					<AudioWaveform size={32} class="text-primary" />
				</div>
				<Card.Title class="">Benefit 2</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-base text-muted-foreground">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus
					consectetur dolores.
				</p>
			</Card.Content>
		</Card.Root>
		<Card.Root class="border-2 border-border bg-muted/20">
			<Card.Header>
				<div class="py-2">
					<AudioWaveform size={32} class="text-primary" />
				</div>
				<Card.Title class="">Benefit 3</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-base text-muted-foreground">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus
					consectetur dolores.
				</p>
			</Card.Content>
		</Card.Root>
		<Card.Root class="border-2 border-border bg-muted/20">
			<Card.Header>
				<div class="py-2">
					<AudioWaveform size={32} class="text-primary" />
				</div>
				<Card.Title class="">Benefit 4</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-base text-muted-foreground">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus
					consectetur dolores.
				</p>
			</Card.Content>
		</Card.Root>
	</div>
</section>
