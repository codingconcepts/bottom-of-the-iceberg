<script>
  import { onMount } from 'svelte';

  let scrollY = 0;
  let windowHeight = 0;
  let documentHeight = 0;
  let ruler;
  let currentDepth = 0;
  
  const MAX_DEPTH = 10984;
  const MARK_SPACING = 50;
  const METERS_PER_MARK = Math.ceil(MAX_DEPTH / (documentHeight / MARK_SPACING));
  
  $: totalMarks = Math.ceil(documentHeight / MARK_SPACING);
  
  $: rulerMarks = Array.from({ length: totalMarks }, (_, i) => {
    const depthAtMark = Math.round((i * MAX_DEPTH) / totalMarks);
    return {
      depth: i * MARK_SPACING,
      isLong: i % 2 === 0,
      label: `${depthAtMark}m`
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
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateDimensions);
    
    const observer = new MutationObserver(updateDimensions);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateDimensions);
      observer.disconnect();
    };
  });
</script>

<div class="depth-ruler" bind:this={ruler}>
  <div 
    class="ruler-container" 
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
      >
      </div>
    {/each}
  </div>
  <div class="current-depth">
    <div class="depth-value">{currentDepth.toLocaleString()}m</div>
  </div>
</div>

<style>
  .depth-ruler {
    position: fixed;
    right: 20px;
    top: 0;
    bottom: 0;
    width: 60px;
    z-index: 1000;
    pointer-events: none;
  }
  
  .ruler-container {
    position: absolute;
    width: 100%;
    will-change: transform;
  }
  
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
  
  .current-depth {
    position: fixed;
    right: 70px;
    bottom: 20px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    padding: 5px 10px;
    text-align: right;
  }

  .depth-value {
    font-size: 20px;
    margin-bottom: 2px;
  }
</style>