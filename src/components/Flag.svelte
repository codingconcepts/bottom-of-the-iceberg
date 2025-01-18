<script>
  import * as FlagIcons from "svelte-flag-icons";
  import countries from '../routes/countries.json';

  export let code = "";
  export let size = 20;

  const countryName = countries[code];

  $: Icon = FlagIcons[code];
</script>

{#if Icon}
  <div
    class="flex items-center justify-center bg-zinc-800 rounded-full w-full h-full shadow-lg ring-zinc-700 ring-1"
    title={countryName}
  >
    <Icon {size} />
  </div>
{/if}
