<script>
  import * as FlagIcons from "svelte-flag-icons";

  export let code = '';
  export let size = 20;

  $: Icon = FlagIcons[code];
</script>

{#if Icon}
  <div class="rounded-md overflow-hidden">
    <Icon {size} />
  </div>
{/if}
