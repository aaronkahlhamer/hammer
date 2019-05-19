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
	h1,
	h2,
	h3,
	li,
	p,
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

	.email-address {
		font-size: 0.82em;
		text-transform: lowercase;
	}

	section {
		margin-top: 1em;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<main>

	<h1>{post.title}</h1>

	<a rel="prefetch" href="authors/{post.id}">{author.name}</a>

	<div class="content">
		<p>
			{@html post.body}
		</p>

		<section>
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

		</section>
	</div>

</main>
