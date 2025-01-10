<script>
  export let title;
  export let description;
</script>

<div>
  <h2>{title}</h2>
  <p>{description}</p>
  <slot></slot>
</div>