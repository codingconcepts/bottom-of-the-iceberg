<script>
  export let type;
  export let embedUrl;
  export let title;
</script>

<div class="band">
  {#if type === 'bandcamp'}
    <iframe 
      src={embedUrl}
      class="bandcamp-frame"
      {title}
    >
    </iframe>
  {:else if type === 'soundcloud'}
    <iframe
      src={embedUrl}
      class="soundcloud-frame"
      {title}
    >
    </iframe>
  {/if}
</div>

<style>
  .band {
    padding: 1rem;
    transition: transform 0.2s;
  }

  .band:hover {
    transform: scale(1.02);
  }

  :global(.bandcamp-frame) {
    border: 0;
    width: 100%;
    height: 120px;
  }

  :global(.soundcloud-frame) {
    border: 0;
    width: 100%;
    height: 120px;
  }
</style>