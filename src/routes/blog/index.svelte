<script context="module">
	import { fetchData } from "../../components/fetchData";
	import api from "../../components/api";

	export let posts;

	export async function preload({ params, query }) {
		// retrieve articles
		posts = await fetchData(this, "", api.posts);

		return;
	}
</script>

<style>
	h1,
	li,
	a {
		font-family: -system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
			"Segoe UI Emoji", "Segoe UI Symbol";
		line-height: 1.35;
	}

	h1 {
		font-size: 2em;
		letter-spacing: -1.5;
		text-transform: uppercase;
	}

	ul {
		margin-bottom: 1em;
		margin-left: 1.3em;

		padding-left: 0;
	}

	li {
		margin-bottom: 1em;
	}

	a:first-of-type {
		text-transform: capitalize;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<main>

	<h1>Posts</h1>

	<ul>
		{#each posts as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
			<li>
				<a rel="prefetch" href="blog/{post.id}">{post.title}</a>
			</li>
		{/each}
	</ul>

</main>
