<script>
  import Layer from '../components/Layer.svelte';
  import Band from '../components/Band.svelte';
  import GitHubButton from '../components/GitHubButton.svelte';
  import Iceberg from '../components/Iceberg.svelte';
  import DepthRuler from '../components/DepthRuler.svelte';

  import layers from './layers.json'

  const countries = [...new Set(layers.flatMap(x => x.bands.map(band => band.country)))].sort();
  let selectedCountry = '';

  const genres = [...new Set(layers.flatMap(x => x.bands.flatMap(band => band.genres)))].sort();
  let selectedGenre = '';

  let currentDepth = 0;
</script>

<main class="prose min-h-screen max-w-none bg-brand-depth">
  <header class="w-full max-w-7xl mx-auto p-4 sm:p-8">
    <nav class="flex justify-end">
      <GitHubButton repoUrl="https://github.com/codingconcepts/bottom-of-the-iceberg" buttonText="Contribute" />

      <!-- TODO: Uncomment once heading is fixed and style is improved. -->
      <!-- <p>{currentDepth}</p> -->
    </nav>
  </header>

  <DepthRuler bind:currentDepth={currentDepth} />

  <section class="relative flex flex-col justify-center items-center min-h-96 px-4 sm:px-8">
    <div class="z-10">
      <h1 class="text-center font-display m-0 text-5xl lg:text-7xl text-brand-depth-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">Bottom of the Iceberg</h1>
      <p class="m-0 text-center font-bold text-xl text-brand-depth-3">A descent into the depths of extreme metal</p>
    </div>
    <div class="absolute bottom-0 w-full">
      <div class="max-w-4xl mx-auto">
        <Iceberg />
      </div>
    </div>
  </section>

  {#each layers as layer, index}
    <Layer {...layer} depth={index}>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {#each layer.bands as band}
          <Band {...band} />
        {/each}
      </div>
    </Layer>
  {/each}
</main>
