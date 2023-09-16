<header>
	<nav>
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<ul>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<img src={logo} id="logo" alt="pieBio" width="50" height="50" on:click={goHome} class="mainLogo"/>		
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>
<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/hummingbird.svg';
	function goHome() {
		window.location.href = '/';
	}
</script>
<style>
	header {
		display: flex;
		justify-content: center;
	}

	nav {
		width: 100%;
		filter: blur();
		background-color: rgb(15, 15, 15);
		backdrop-filter: blur(3px);
	}
	.mainLogo {
		position: relative;
		height: 75%;
		display: flex;
		align-items: center;
		margin-top: auto;
		margin-bottom: auto;
		padding-left: 10%;
		transition: all 0.1s linear;
		margin-right: 1%;
		box-sizing: content-box;
	}
	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 4em;
		display: flex;
		justify-content: left;
		align-items:flex-end;
		list-style: none;
		background: var(--background);
		background-size: contain;
		backdrop-filter: blur(3px);
		-webkit-backdrop-filter: blur(10px);
	}

	li {
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		margin-right: 0.5%;
	}
	nav a {
		display: flex;
		height: 60%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: all 0.2s linear;
		border-radius: 0.5em;
	}
	nav {
		height: 100%;
	}
	li {
		margin-top: auto;
		margin-bottom: auto;
	}
	a {
		margin-left: 0.5%;
		margin-right: 0.5%;
	}
	.mainLogo:hover {
		cursor: pointer;
		height: 85%;
	}
	a:hover {
		color: #ffffff;
		background-color: rgba(45, 45, 45, 0.8);
		margin-bottom: 0.3em;
	}
</style>
