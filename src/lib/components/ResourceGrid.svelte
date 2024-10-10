<script lang="ts">
  export let resources: Array<{
    id: string;
    title: string;
    description: string;
    type: string;
    url: string;
  }>;
</script>

<div class="resource-grid">
  {#each resources as resource}
    <div class="resource-card">
      <h2>{resource.title}</h2>
      <p>{resource.description}</p>
      <span class="resource-type">{resource.type}</span>
      <a href={resource.url} target="_blank" rel="noopener noreferrer">View Resource</a>
    </div>
  {/each}
</div>

<style>
  .resource-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }

  .resource-card {
    background-color: var(--card-background);
    border-radius: 10px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .resource-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }

  .resource-type {
    background-color: var(--secondary-color);
    color: var(--text-color);
    padding: 0.25rem 0.5rem;
    border-radius: 20px;
    font-size: 0.8rem;
    align-self: flex-start;
    margin-bottom: 1rem;
  }

  a {
    margin-top: auto;
    background-color: var(--primary-color);
    color: var(--text-color);
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  a:hover {
    background-color: var(--secondary-color);
  }
</style>