<script>
  export let title;
  export let description;
</script>

<div class='flex flex-col gap-4'>
  <div>
    <h2 class="m-0">{title}</h2>
    <p class="m-0">{description}</p>
  </div>
  <slot></slot>
</div>