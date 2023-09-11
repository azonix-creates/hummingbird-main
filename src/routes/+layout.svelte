<script>
  import "../app.postcss";
  import Header from "./Header.svelte";
  import "./styles.css";
  function goGit() {
    window.location.href = "https://github.com/";
  }
</script>

<div class="app">
  <title>hummingbird</title>
  <link rel="stylesheet" href="https://use.typekit.net/ijj6dcp.css" />
  <Header />

  <main>
    <slot />
  </main>

  <footer>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <p class="footer">
      pieiskewl dev llc, an oregon company.
    </p>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.2s linear;
	background-color: rgb(15, 15, 15);
	padding: 1em;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
  .footer:hover {
    cursor: default;
    color: rgb(230, 230, 230);
  }
</style>
