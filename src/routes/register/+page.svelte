<svelte:head>
	
</svelte:head>

<div class="text-column">

	<div class="signinbox flex">
		<h1>register.</h1>
		<div class="spacer1"></div>
		<input type="text" placeholder="Username" class="inputBox" />
		<div class="spacer"/>
		<input type="password" placeholder="Password" class="inputBox" />
		<div class="spacer"/>
		<input type="password" placeholder="Type password again" class="inputBox" />
		<div class="spacer"/>
		<button class="inputBox submit">Submit</button>
	</div>
	<div class="spacer1"></div>
	<div class="error"><p>Incorrect username or password.</p></div>
</div>

<style>
	.spacer {
		margin-top: 1em;
		margin-bottom: 1em;
	}
	.spacer1 {
		margin-top: 0.5em;
		margin-bottom: 0.5em;
	}
	.signinbox {
		background-color: rgb(15, 15, 15);
		border-radius: 0.25em;
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding: 1em;
	}
	.inputBox {
		border: none;
		background-color: rgb(29, 29, 29);
		color: rgb(230, 230, 230);
		padding: 0.5em;
		border-radius: 0.25em;
		transition: all 0.2s linear;
	}
	.inputBox:hover {
		background-color: rgba(45, 45, 45, 0.8);
	}
	.submit:hover {
		cursor: pointer;
		background-color: rgba(45, 45, 45, 0.8);
		color: rgb(236, 236, 236);
	}
	.error {
		text-align: center;
		border-radius: 0.25em;
		padding: 1em;
		background-color: brown;
	}
</style>