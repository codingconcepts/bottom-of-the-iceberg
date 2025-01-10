<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  export let type;
  export let embedUrl;
  export let title;

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


<iframe
  bind:this={root}
  data-src={embedUrl}
  data-type={type}
  src=''
  class="w-full h-32"
  {title}
  >
</iframe>