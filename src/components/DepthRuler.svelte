<script>
  import { onMount } from "svelte";

  let scrollY = 0;
  let windowHeight = 0;
  let documentHeight = 0;
  let ruler;
  let currentDepth = 0;

  const MAX_DEPTH = 10984;
  const MARK_SPACING = 50;

  $: totalMarks = Math.ceil(documentHeight / MARK_SPACING);

  $: rulerMarks = Array.from({ length: totalMarks }, (_, i) => {
    const depthAtMark = Math.round((i * MAX_DEPTH) / totalMarks);
    return {
      depth: i * MARK_SPACING,
      isLong: i % 2 === 0,
      label: `${depthAtMark}m`,
    };
  });

  $: {
    if (documentHeight && windowHeight) {
      const maxScroll = documentHeight - windowHeight;
      const scrollProgress = scrollY / maxScroll;
      currentDepth = Math.floor(scrollProgress * MAX_DEPTH);
    }
  }

  function handleScroll() {
    scrollY = window.scrollY;
  }

  function updateDimensions() {
    windowHeight = window.innerHeight;
    documentHeight = Math.max(
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
  }

  onMount(() => {
    updateDimensions();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateDimensions);

    const observer = new MutationObserver(updateDimensions);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateDimensions);
      observer.disconnect();
    };
  });
</script>

<div
  class="fixed w-[60px] z-[1000] pointer-events-none right-5 inset-y-0"
  bind:this={ruler}
>
  <div
    class="absolute w-full will-change-transform"
    style="
      height: {documentHeight}px; 
      transform: translateY({-scrollY * 0.25}px)
    "
  >
    {#each rulerMarks as mark}
      <div
        class="ruler-mark"
        class:long={mark.isLong}
        style="top: {mark.depth}px"
      ></div>
    {/each}
  </div>
  <div
    class="fixed text-base text-white text-right px-2.5 py-[5px] right-[70px] bottom-5"
  >
    <div class="text-xl mb-0.5">{currentDepth.toLocaleString()}m</div>
  </div>
</div>

<style>
  .ruler-mark {
    position: absolute;
    right: 0;
    width: 20px;
    height: 1px;
    background-color: #fff;
    transform-origin: right center;
  }

  .ruler-mark.long {
    width: 40px;
    background-color: #fff;
  }
</style>
