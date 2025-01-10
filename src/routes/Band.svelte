<script>
  export let type;
  export let embedUrl;
  export let title;
</script>


{#if type === 'bandcamp'}
  <iframe 
    src={embedUrl}
    class="w-full h-32"
    {title}
  >
  </iframe>
{:else if type === 'soundcloud'}
  <iframe
    src={embedUrl}
    class="w-full h-32"
    {title}
  >
  </iframe>
{/if}