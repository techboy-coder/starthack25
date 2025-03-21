<script>
	import GridAndDotBackgrounds from '$lib/components/ui/GridAndDotBackground/GridAndDotBackgrounds.svelte';
	import Benefits from './components/benefits.svelte';
	import Faq from './components/faq.svelte';
	import Footer from './components/footer.svelte';
	import Hero from './components/hero.svelte';
	import Steps from './components/steps.svelte';
</script>

<!-- <div class="dark:bg-grid-white/[0.05]"> -->
<!-- same but gradient with black at bg-background at bottom but transparent at top -->
<div class="dark:bg-dot-white/[0.2]">
	<div class="bg-gradient-to-b from-transparent to-background">
		<Hero />
	</div>
</div>
<Benefits />

<Steps />

<Faq />
