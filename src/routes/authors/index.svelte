<script context="module">
	import { fetchData } from "../../components/fetchData";
	import api from "../../components/api";

	export let authors;

	export async function preload({ params, query }) {
		// retrieve authors
		authors = await fetchData(this, "", api.users);

		return;
	}
</script>

<style>
	ul {
		margin-bottom: 1em;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Authors</title>
</svelte:head>

<h1>Authors</h1>

<ul>
	{#each authors as author}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li>
			<a rel="prefetch" href="authors/{author.id}">{author.name}</a>
		</li>
	{/each}
</ul>
