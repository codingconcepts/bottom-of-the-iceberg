<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  import Flag from './Flag.svelte';

  export let type;
  export let embedUrl;
  export let title;
  export let country;

  let root: any = null;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const src = entry.target.getAttribute('data-src') || ''
        entry.target.setAttribute('src', src)
        
        observer.disconnect();
      }
    });
  });

  onMount(() => {
    observer.observe(root);
  });

  onDestroy(() => {
    observer.disconnect();
  });
</script>


<div class="relative w-full h-32">
  <iframe
    bind:this={root}
    data-src={embedUrl}
    data-type={type}
    src=''
    class="w-full h-full"
    {title}
  ></iframe>

  <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
    <Flag code={country} />
  </div>
</div>