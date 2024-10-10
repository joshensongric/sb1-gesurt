<script lang="ts">
  import { page } from '$app/stores';

  const navItems = ['Home', 'Tutorials', 'Custom Functions', 'Custom Actions', 'CMA Library'];
</script>

<header>
  <nav>
    {#each navItems as item}
      <a
        href="/{item.toLowerCase().replace(/ /g, '-')}"
        class:active={$page.url.pathname.includes(item.toLowerCase().replace(/ /g, '-'))}
      >
        {item}
      </a>
    {/each}
  </nav>
  <button class="theme-toggle">🌙</button>
</header>

<style>
  header {
    background-color: var(--secondary-background);
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  a {
    color: var(--secondary-text);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
  }

  a.active {
    color: var(--primary);
    font-weight: 700;
  }

  .theme-toggle {
    background: none;
    border: none;
    color: var(--secondary-text);
    font-size: 1.2rem;
    cursor: pointer;
  }
</style>