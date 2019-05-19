<script context="module">
	import { fetchData } from "../../components/fetchData";
	import api from "../../components/api";

	export let author;

	export async function preload({ params, query }) {
		// retrieve authors
		author = await fetchData(this, params.slug, api.users);

		return;
	}
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{authors.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .container
	*/
	.container :global(h1) {
		font-size: 1.4em;
		font-weight: 500;
	}
</style>

<svelte:head>
	<title>{author.name}</title>
</svelte:head>

<div class="container">

	<h1>{author.name}</h1>

	<div class="content">

		<p>
			{@html author.username}
		</p>

		<p>{author.email}</p>

		<p>{author.address.street} {author.address.suite}</p>
		<p>{author.address.city}, {author.address.zipcode}</p>
		<p>{author.address.geo.lat} {author.address.geo.lng}</p>

		<p>{author.phone}</p>

		<p>{author.website}</p>

		<p>
			 {author.company.name} {author.company.catchPhrase} {author.company.bs}

		</p>

	</div>

</div>
