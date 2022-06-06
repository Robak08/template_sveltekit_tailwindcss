<script>
	export let y;
	import { page } from '$app/stores';
	import Logo from '$components/Logo.svelte';

	import { mainMenuItems } from '$data/navigation';

	// $: console.log($page.url.pathname);
</script>

<nav>
	<Logo header scrolled={y > 40} />
	<ul class="navbar-nav mr-auto">
		{#each mainMenuItems as { href, label }}
			<li class="nav-item">
				<a sveltekit:prefetch {href} alt={label} class:active={$page.url.pathname.includes(href)}>
					{label}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="postcss">
	nav {
		@apply fixed top-0 inset-x-0;
		@apply dark:bg-neutral-900/80 bg-white/80 shadow-md;
		@apply backdrop-blur-sm;
		@apply px-2 md:px-4;
		ul {
			@apply text-xs lg:text-sm;
			a {
				@apply dark:text-neutral-200 text-neutral-800 transition-colors;
				&:hover,
				&:focus {
					@apply outline-none text-indigo-600;
				}
				&.active,
				&:active {
					@apply text-purple-600;
				}
			}
		}
	}
</style>
