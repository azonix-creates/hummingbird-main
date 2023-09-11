<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>

</svelte:head>

<section>
	<h1 class="splash"><span class="yellow-gradient">hummingbird.</span> secure, private image host.</h1>
	<div class="buttonHolder">
		<a class="mainButton1" href="/signin">sign-in</a>
		<a class="mainButton1" href="/register">register</a>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction:column;
		justify-content: center;
		align-items: center;
		flex: 0.8;
	}
	.buttonHolder {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 10%;
		width: 100%;
	}
	.splash {
		width: 100%;
		position: inherit;
		margin-bottom: 0.5em;
	}
</style>
