<script>
  import Depth0 from './Depth-0.svelte';
  import Depth1 from './Depth-1.svelte';
  import Depth2 from './Depth-2.svelte';
  import Depth3 from './Depth-3.svelte';

  export let depth;
  export let title;
  export let description;
</script>

<!-- bg-gradient-to-b to-brand-depth-${depth} from-brand-depth-${depth + 1} -->
<section class={`relative flex flex-col gap-4 bg-brand-depth-${depth}`}>
  <div class="flex flex-col gap-8 w-full max-w-7xl mx-auto p-4 py-8 z-10">
    <div class="text-white">
      <h2 class="m-0 text-inherit">{title}</h2>
      <p class="m-0">{description}</p>
    </div>
    <slot></slot>
  </div>
  <div class="absolute w-full h-96">
    <div class="mx-auto">
      {#if depth === 0}
        <Depth0 maxWidth="max-w-4xl" />
      {:else if depth === 1}
        <Depth1 maxWidth="max-w-lg" />
      {:else if depth === 2}
        <Depth2 maxWidth="max-w-md" />
      {:else if depth === 3}
        <Depth3 maxWidth="max-w-sm" />
      {:else}
        <div></div>
      {/if}
    </div>
  </div>
</section>
