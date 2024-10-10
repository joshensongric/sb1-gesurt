<script lang="ts">
  import { page } from '$app/stores';

  const sections = [
    { title: 'Tutorials', items: ['Getting Started', 'Best Practices', 'Layout Design'] },
    { title: 'Custom Functions', items: ['Parse Date', 'Format Currency'] },
    { title: 'Custom Actions', items: ['Push Notification', 'Generate PDF'] },
    { title: 'CMA Library', items: ['Widgets', 'Functions', 'Actions'] },
    { title: 'Import', items: ['New Content'] }
  ];
</script>

<aside class="sidebar">
  <div class="logo">
    <span class="icon">✏️</span>
    <span class="text">flexperts academy</span>
  </div>
  
  {#each sections as section}
    <div class="section">
      <h3>{section.title}</h3>
      <ul>
        {#each section.items as item}
          <li class:active={$page.url.pathname.includes(item.toLowerCase().replace(/ /g, '-'))}>
            <a href="/{section.title.toLowerCase().replace(/ /g, '-')}/{item.toLowerCase().replace(/ /g, '-')}">{item}</a>
          </li>
        {/each}
      </ul>
    </div>
  {/each}
</aside>

<style>
  .sidebar {
    width: 250px;
    background-color: var(--secondary-background);
    color: var(--primary-text);
    padding: 1rem;
    height: 100vh;
    overflow-y: auto;
  }

  .logo {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: var(--primary);
  }

  .logo .icon {
    margin-right: 0.5rem;
  }

  .section {
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 0.9rem;
    text-transform: uppercase;
    color: var(--secondary-text);
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: var(--secondary-text);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .active a {
    color: var(--primary);
    font-weight: 700;
  }
</style>