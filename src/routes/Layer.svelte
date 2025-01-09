<script>
  export let title;
  export let description;
</script>

<div class="layer">
  <div class="layer-header">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
  <slot></slot>
</div>

<style>
  .layer {
    margin: 2rem 0;
    padding: 1rem;
    border-radius: 8px;
  }

  .layer-header {
    color: #fff;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
  }

  h2 {
    margin: 0;
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  p {
    margin: 0.5rem 0 0;
    opacity: 0.7;
  }
</style>