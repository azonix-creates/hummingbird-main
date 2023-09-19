<svelte:head>
	
</svelte:head>

<div class="text-column">
	<h1>about <span class="yellow-gradient">hummingbird.</span></h1>
	<p>One of our core principals at hummingbird is our commitment to transparency. We aim to be transparent on our server hardware, as well as our use of your data. Hummingbird uses your data in accordance with our policy below.</p>
	<p class="spacer"/>
	<p>Hummingbird processes four different data points from you. We collect your network IP, your username, your password, and your photos. None of these points are ever shared unless we are required to by law. Hummingbird also reports all illegal content uploaded to the relevant authorities, and will provide any information to law enforcement if illegal content is uploaded.</p>
	<p class="spacer"/>
	<p>We also provide technical specifications of our server, if you wish to replicate our service.</p>
	<p class="spacer"/>
	<p>The server operates out of a <span class="bold">New York</span> datacentre. The server currently operates on an AMD Epyc Gold CPU, with 32GB of random access memory. We store all data on RAID-1 SSDs, which means your data is mirrored onto a second SSD, in the case of a data loss event. The server runs Ubuntu 22 LTS.</p>
	<p class="spacer"/>
	<p>We hope that this transparency statement informs you and allows you to make the best decision on your choice of image host.</p>
</div>

<style>
	.text-column {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.spacer {
		margin-top: 1em;
		margin-bottom: 1em;
	}
	p {
		width: 75%;
	}
</style>