<script lang="ts">
  import { Seo } from 'svelte-seo';
  import SearchBar from '$lib/components/SearchBar.svelte';
  import ResourceGrid from '$lib/components/ResourceGrid.svelte';

  let tutorials = [
    {
      id: '1',
      title: 'Getting Started with FlutterFlow',
      description: 'Learn the basics of FlutterFlow and create your first app.',
      type: 'Tutorial',
      url: '/tutorials/getting-started-with-flutterflow'
    },
    {
      id: '2',
      title: 'FlutterFlow Best Practices',
      description: 'Discover best practices for efficient FlutterFlow development.',
      type: 'Tutorial',
      url: '/tutorials/flutterflow-best-practices'
    },
    {
      id: '3',
      title: 'FlutterFlow Layout Design',
      description: 'Master the art of creating beautiful layouts in FlutterFlow.',
      type: 'Tutorial',
      url: '/tutorials/flutterflow-layout-design'
    }
  ];

  let filteredTutorials = tutorials;

  function handleSearch(event: CustomEvent) {
    const searchTerm = event.detail.toLowerCase();
    filteredTutorials = tutorials.filter(tutorial =>
      tutorial.title.toLowerCase().includes(searchTerm) ||
      tutorial.description.toLowerCase().includes(searchTerm)
    );
  }
</script>

<Seo
  title="FlexPerts Academy - Tutorials"
  description="Explore our comprehensive FlutterFlow tutorials"
/>

<h1>FlutterFlow Tutorials</h1>

<SearchBar on:search={handleSearch} />

<ResourceGrid resources={filteredTutorials} />

<style>
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--primary);
  }
</style>