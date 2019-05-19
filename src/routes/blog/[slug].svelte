<script context="module">
	import { fetchData } from "../../components/fetchData";
	import api from "../../components/api";

	export let author;
	export let comments;
	export let post;

	export async function preload({ params, query }) {
		// retrieve article content
		post = await fetchData(this, params.slug, api.posts);

		// retrieve user's profile
		author = await fetchData(this, post.id, api.users);

		// retrieve comments for this specific article
		comments = await fetchData(this, `comments?postId=1`, api.standard);

		return;
	}
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{blog.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h2) {
		margin-top: 1em;

		font-size: 1.4em;
		font-weight: 500;
	}

	li {
		margin-bottom: 1em;
	}

	li h3 {
		margin-top: 0;
		margin-bottom: 0.3em;

		text-transform: uppercase;
	}

	li p {
		margin-top: 0;
		margin-bottom: 0.3em;
	}

	.email-address {
		font-size: 0.82em;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class="container">

	<h1>{post.title}</h1>

	<a rel="prefetch" href="authors/{post.id}">{author.name}</a>

	<div class="content">
		{@html post.body}

		<div>
			<h2>Comments</h2>

			<ul>
				{#each comments as comment}
					<li>
						<h3>{comment.name}</h3>
						<p class="email-address">{comment.email}</p>
						<p>{comment.body}</p>
					</li>
				{/each}
			</ul>

		</div>
	</div>

</div>
