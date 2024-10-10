<script lang="ts">
  import { Seo } from 'svelte-seo';
</script>

<Seo
  title="FlexPerts Academy - FlutterFlow Resources"
  description="Discover tutorials, custom functions, widgets, and actions for FlutterFlow"
/>

<h1>Welcome to FlexPerts Academy</h1>

<p>
  Explore our comprehensive resources for FlutterFlow, including tutorials,
  custom functions, widgets, and actions. Whether you're a beginner or an
  experienced developer, you'll find valuable content to enhance your
  FlutterFlow projects.
</p>

<div class="card-grid">
  <div class="card">
    <h2>Tutorials</h2>
    <p>Step-by-step guides to master FlutterFlow</p>
    <a href="/tutorials">Explore Tutorials</a>
  </div>
  <div class="card">
    <h2>Custom Functions</h2>
    <p>Extend FlutterFlow's capabilities with custom functions</p>
    <a href="/custom-functions">View Functions</a>
  </div>
  <div class="card">
    <h2>Custom Actions</h2>
    <p>Create powerful custom actions for your apps</p>
    <a href="/custom-actions">Discover Actions</a>
  </div>
  <div class="card">
    <h2>CMA Library</h2>
    <p>A collection of community-made assets</p>
    <a href="/cma-library">Browse Library</a>
  </div>
</div>

<style>
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--primary);
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: var(--secondary-text);
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .card {
    background-color: var(--secondary-background);
    border-radius: 8px;
    padding: 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  .card h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--primary);
  }

  .card p {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: var(--secondary-text);
  }

  .card a {
    display: inline-block;
    background-color: var(--primary);
    color: var(--primary-text);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s ease;
    font-weight: 600;
  }

  .card a:hover {
    background-color: var(--tertiary);
  }
</style>