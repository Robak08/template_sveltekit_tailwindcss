<script>
	export let title = '';
	export let ogTitle = false;
	export let twitterTitle = false;
	export let description =
		'';
	export let ogDescription = false;
	export let twitterDescription = false;
	export let image = '';
	export let ogImageWidth = false;
	export let ogImageHeight = false;
	export let alt = '';
	export let ogImage = false;
	export let ogImageAlt = false;
	export let ogImageType = false;
	export let twitterImage = false;
	export let twitterImageAlt = false;
	export let robots = 'index';
	export let googlebot = 'index';
	export let url = '';
	export let ogType = 'website';
	export let slug = '/';
</script>

<svelte:head>
	<!-- General Tags -->
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="robots" content={robots} />
	<meta name="googlebot" content={googlebot || robots} />

	<!-- Open Graph Tags -->
	<meta property="og:title" content={ogTitle || title} />
	<meta property="og:description" content={ogDescription || description} />
	<meta property="og:type" content={ogType} />
	<meta property="og:image" content={ogImage ? ogImage : image} />
	<meta property="og:image:alt" content={ogImageAlt ? ogImageAlt : alt} />
	{#if ogImageWidth}
		<meta property="og:image:width" content={ogImageWidth || 1200} />
		<meta property="og:image:height" content={ogImageHeight || 630} />
	{/if}
	{#if ogImageType}
		<meta property="og:image:type" content={ogImageType} />
	{/if}

	<!-- Twitter Tags -->
	<meta property="twitter:title" content={twitterTitle || title} />
	<meta property="twitter:description" content={twitterDescription || description} />
	<meta property="twitter:image" content={twitterImage ? twitterImage : image} />
	<meta property="twitter:image:alt" content={twitterImageAlt ? twitterImageAlt : alt} />
	<meta property="twitter:card" content="summary" />

	<!-- Url tags-->
	{#if url}
		<meta property="og:url" content={`${url}${slug}`} />
		<link rel="canonical" href={`${url}${slug}`} />
	{/if}
</svelte:head>
