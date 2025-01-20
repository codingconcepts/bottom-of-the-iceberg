<script>
  import Layer from "../components/Layer.svelte";
  import Band from "../components/Band.svelte";
  import GitHubButton from "../components/GitHubButton.svelte";
  import Iceberg from "../components/Iceberg.svelte";
  import DepthRuler from "../components/DepthRuler.svelte";

  import layers from "./layers.json";

  const year = new Date().getFullYear();

  let scrolled = false;
  let currentDepth = 0;

  const handleScroll = () => {
    scrolled = window.scrollY > 0;
  };

  window.addEventListener('scroll', handleScroll);
</script>

<main class="prose min-h-screen max-w-none bg-brand-depth">
  <header class="w-full max-w-7xl mx-auto p-4 sm:p-8">
    <nav class="flex justify-end">
      <GitHubButton
        repoUrl="https://github.com/codingconcepts/bottom-of-the-iceberg"
        buttonText="Contribute"
      />
    </nav>
  </header>

  <!-- Sticky container for the title -->
  <div
    class="sticky top-0 z-10 bg-brand-depth transition-shadow duration-300"
    class:shadow="{scrolled}"
  >
    <h1
      class="text-center font-display m-0 text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-brand-depth-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
    >
      Bottom of the Iceberg
    </h1>
    <p class="m-0 text-center font-bold text-md text-brand-depth-3">
      A descent into the depths of extreme metal
    </p>
  </div>

  <DepthRuler bind:currentDepth />

  <section
    class="relative flex flex-col justify-center items-center min-h-96 px-8 sm:px-16"
  >
    <div class="absolute bottom-0 w-full">
      <div class="max-w-4xl mx-auto">
        <Iceberg />
      </div>
    </div>
  </section>

  {#each layers as layer, index}
    <Layer {...layer} depth={index}>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each layer.bands as band}
          <Band {...band} />
        {/each}
      </div>

      {#if index === layers.length - 1}
        <div class="relative flex flex-row justify-center items-center gap-1 w-full">
          <p class="text-[#ccc]">© {year} -</p>
          <a
            class="text-[#ccc] text-sm"
            href="mailto:rob@bottomoftheiceberg.com"
            >Rob Reid</a
          >
          <p class="text-[#ccc]">and Paul Scanlon</p>
        </div>
      {/if}
    </Layer>
  {/each}
</main>

<style>
  .sticky {
    background-color: '#fff';
    z-index: 50;
  }

  .shadow {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  main {
    position: relative;
    z-index: 0;
  }
</style>