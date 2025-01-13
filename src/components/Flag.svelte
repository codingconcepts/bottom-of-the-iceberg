<script>
  import * as FlagIcons from 'svelte-flag-icons';

  export let code = 0;
  export let size = 20;

  $: Icon = FlagIcons[code];
</script>

{#if Icon}
  <div class="flex items-center justify-center bg-zinc-800 rounded-full w-full h-full shadow-lg ring-zinc-700 ring-1">
    <Icon {size} />
  </div>
{/if}
