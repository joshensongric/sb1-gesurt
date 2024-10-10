<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="app-container">
  <Sidebar />
  <div class="main-content">
    <Header />
    <main>
      <div class="container">
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</div>

<style>
  .app-container {
    display: flex;
    min-height: 100vh;
  }

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  main {
    flex: 1;
    padding: 2rem;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>