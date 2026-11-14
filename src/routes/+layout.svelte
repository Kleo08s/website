<script lang="ts">
	import '../app.css';

	import favicon from '#lib/assets/favicon.svg';
	import Navbar from '#lib/components/navbar.svelte';
	import type { LayoutProps } from './$types';

	import 'bootstrap/dist/css/bootstrap.min.css';
	import { onMount } from 'svelte';

	onMount(async () => {
		await import('bootstrap/dist/js/bootstrap.bundle.min.js');
	});

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />
{@render children()}
