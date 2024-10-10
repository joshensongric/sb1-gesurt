<script lang="ts">
  import { Seo } from 'svelte-seo';
  import SearchBar from '$lib/components/SearchBar.svelte';
  import ResourceGrid from '$lib/components/ResourceGrid.svelte';

  let cmaResources = [
    {
      id: '1',
      title: 'Custom Navigation Drawer',
      description: 'A beautifully designed navigation drawer widget.',
      type: 'Widget',
      url: '/cma-library/custom-navigation-drawer'
    },
    {
      id: '2',
      title: 'Advanced Data Table',
      description: 'A feature-rich data table with sorting and filtering capabilities.',
      type: 'Widget',
      url: '/cma-library/advanced-data-table'
    },
    {
      id: '3',
      title: 'Social Media Integration',
      description: 'Easy-to-use functions for integrating social media features.',
      type: 'Function',
      url: '/cma-library/social-media-integration'
    }
  ];

  let filteredResources = cmaResources;

  function handleSearch(event: CustomEvent) {
    const searchTerm = event.detail.toLowerCase();
    filteredResources = cmaResources.filter(resource =>
      resource.title.toLowerCase().includes(searchTerm) ||
      resource.description.toLowerCase().includes(searchTerm)
    );
  }
</script>

<Seo
  title="FlexPerts Academy - CMA Library"
  description="Browse community-made assets for FlutterFlow"
/>

<h1>CMA Library</h1>

<SearchBar on:search={handleSearch} />

<ResourceGrid resources={filteredResources} />

<style>
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--primary);
  }
</style>