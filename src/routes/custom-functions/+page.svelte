<script lang="ts">
  import { Seo } from 'svelte-seo';
  import SearchBar from '$lib/components/SearchBar.svelte';
  import ResourceGrid from '$lib/components/ResourceGrid.svelte';

  let customFunctions = [
    {
      id: '1',
      title: 'Parse Date from String',
      description: 'Convert string representations of dates into DateTime objects.',
      type: 'Function',
      url: '/custom-functions/parse-date-from-string'
    },
    {
      id: '2',
      title: 'Format Currency',
      description: 'Format numbers as currency with proper localization.',
      type: 'Function',
      url: '/custom-functions/format-currency'
    }
  ];

  let filteredFunctions = customFunctions;

  function handleSearch(event: CustomEvent) {
    const searchTerm = event.detail.toLowerCase();
    filteredFunctions = customFunctions.filter(func =>
      func.title.toLowerCase().includes(searchTerm) ||
      func.description.toLowerCase().includes(searchTerm)
    );
  }
</script>

<Seo
  title="FlexPerts Academy - Custom Functions"
  description="Explore custom functions to enhance your FlutterFlow projects"
/>

<h1>Custom Functions</h1>

<SearchBar on:search={handleSearch} />

<ResourceGrid resources={filteredFunctions} />

<style>
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--primary);
  }
</style>