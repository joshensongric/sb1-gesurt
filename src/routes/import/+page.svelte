<script lang="ts">
  import { Seo } from 'svelte-seo';
  import { importMarkdown, importHtml } from '$lib/utils/contentImporter';

  let fileInput: HTMLInputElement;
  let importedContent: any = null;
  let isLoading = false;
  let error = '';

  async function handleFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    isLoading = true;
    error = '';

    try {
      const content = await file.text();
      
      if (file.name.endsWith('.md')) {
        importedContent = await importMarkdown(content);
      } else if (file.name.endsWith('.html')) {
        importedContent = await importHtml(content);
      } else {
        throw new Error('Unsupported file type. Please upload a .md or .html file.');
      }
    } catch (err) {
      error = err.message;
      importedContent = null;
    } finally {
      isLoading = false;
    }
  }

  function handleSave() {
    // Here you would typically send the importedContent to your backend
    // or store it in your application state
    console.log('Saving imported content:', importedContent);
    alert('Content saved successfully!');
    importedContent = null;
    if (fileInput) fileInput.value = '';
  }
</script>

<Seo
  title="FlexPerts Academy - Import Content"
  description="Import new tutorials, functions, or actions to FlexPerts Academy"
/>

<h1>Import Content</h1>

<p>Upload a Markdown (.md) or HTML (.html) file to import new content.</p>

<input
  bind:this={fileInput}
  type="file"
  accept=".md,.html"
  on:change={handleFileSelect}
/>

{#if isLoading}
  <p>Loading...</p>
{:else if error}
  <p class="error">{error}</p>
{:else if importedContent}
  <div class="preview">
    <h2>Imported Content</h2>
    <p><strong>Title:</strong> {importedContent.title}</p>
    <p><strong>Type:</strong> {importedContent.type}</p>
    <div>
      <h3>Preview:</h3>
      <div class="content-preview">
        {@html importedContent.content}
      </div>
    </div>
    <button on:click={handleSave}>Save Content</button>
  </div>
{/if}

<style>
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--primary);
  }

  input[type="file"] {
    margin-bottom: 1rem;
  }

  .error {
    color: var(--error);
    font-weight: bold;
  }

  .preview {
    background-color: var(--secondary-background);
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1rem;
  }

  .content-preview {
    max-height: 300px;
    overflow-y: auto;
    border: 1px solid var(--secondary);
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 4px;
  }

  button {
    background-color: var(--primary);
    color: var(--primary-text);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 1rem;
  }

  button:hover {
    background-color: var(--tertiary);
  }
</style>