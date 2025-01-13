<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  import Flag from './Flag.svelte';

  export let type;
  export let embedUrl;
  export let title;
  export let country;

  let root: any = null;
  let player: any;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const src = entry.target.getAttribute('data-src') || '';
        entry.target.setAttribute('src', src);

        setTimeout(() => {
          player.style.opacity = '100%';
        }, 400);

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

<div bind:this={player} class="relative w-full h-32 opacity-0 transition-opacity duration-500">
  <iframe bind:this={root} data-src={embedUrl} data-type={type} src="" class="w-full h-full" {title}></iframe>

  <div class="absolute -top-3 -left-3 z-10 size-10">
    <Flag code={country} />
  </div>
</div>
