<script lang="ts">
  import { Seo } from 'svelte-seo';
  import SearchBar from '$lib/components/SearchBar.svelte';
  import ResourceGrid from '$lib/components/ResourceGrid.svelte';

  let customActions = [
    {
      id: '1',
      title: 'Send Push Notification',
      description: 'Send custom push notifications to users.',
      type: 'Action',
      url: '/custom-actions/send-push-notification'
    },
    {
      id: '2',
      title: 'Generate PDF Report',
      description: 'Create and download PDF reports from app data.',
      type: 'Action',
      url: '/custom-actions/generate-pdf-report'
    }
  ];

  let filteredActions = customActions;

  function handleSearch(event: CustomEvent) {
    const searchTerm = event.detail.toLowerCase();
    filteredActions = customActions.filter(action =>
      action.title.toLowerCase().includes(searchTerm) ||
      action.description.toLowerCase().includes(searchTerm)
    );
  }
</script>

<Seo
  title="FlexPerts Academy - Custom Actions"
  description="Discover custom actions to add powerful features to your FlutterFlow apps"
/>

<h1>Custom Actions</h1>

<SearchBar on:search={handleSearch} />

<ResourceGrid resources={filteredActions} />

<style>
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--primary);
  }
</style>