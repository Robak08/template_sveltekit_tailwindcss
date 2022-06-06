<script>
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import '../app.css';

	let y;
</script>

<svelte:window bind:scrollY={y} />

<Header {y} />

<main>
	<slot />
</main>

<Footer />

<style type="postcss">
	main {
		@apply px-2 md:px-8 mx-auto my-0 box-border w-full;
	}
</style>
