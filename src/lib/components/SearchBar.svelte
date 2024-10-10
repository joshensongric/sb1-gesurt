<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Search } from 'svelte-search';

  const dispatch = createEventDispatcher();

  function handleSearch(event: CustomEvent) {
    dispatch('search', event.detail);
  }
</script>

<Search on:search={handleSearch} placeholder="Search resources..." />

<style>
  :global(.svelte-search) {
    width: 100%;
    max-width: 600px;
    margin: 0 auto 2rem;
  }
</style>